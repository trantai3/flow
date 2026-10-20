/*
 * Đóng gói nội dung quà tặng vào link (phần sau dấu #) và đọc ngược lại.
 * Dữ liệu được nén deflate rồi mã hoá base64-url:  flower.html#d=z<...>
 * Trình duyệt cũ không có CompressionStream thì dùng JSON thô: #d=j<...>
 */
(function () {
    function toB64Url(bytes) {
        let bin = "";
        for (let i = 0; i < bytes.length; i += 0x8000) {
            bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
        }
        return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }

    function fromB64Url(str) {
        const b64 = str.replace(/-/g, "+").replace(/_/g, "/");
        const bin = atob(b64 + "===".slice((b64.length + 3) % 4));
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        return bytes;
    }

    async function pipe(bytes, stream) {
        const out = new Blob([bytes]).stream().pipeThrough(stream);
        return new Uint8Array(await new Response(out).arrayBuffer());
    }

    async function encodeGift(data) {
        const raw = new TextEncoder().encode(JSON.stringify(data));
        if (typeof CompressionStream === "function") {
            return "z" + toB64Url(await pipe(raw, new CompressionStream("deflate-raw")));
        }
        return "j" + toB64Url(raw);
    }

    async function decodeGift(code) {
        const kind = code[0];
        let bytes = fromB64Url(code.slice(1));
        if (kind === "z") bytes = await pipe(bytes, new DecompressionStream("deflate-raw"));
        else if (kind !== "j") throw new Error("Link không hợp lệ");
        return JSON.parse(new TextDecoder().decode(bytes));
    }

    // Lấy mã quà từ link hiện tại (hỗ trợ cả #d=... và ?d=...)
    function giftCodeFromLocation() {
        const fromHash = new URLSearchParams(location.hash.slice(1)).get("d");
        return fromHash || new URLSearchParams(location.search).get("d");
    }

    window.GiftShare = { encodeGift, decodeGift, giftCodeFromLocation };
})();

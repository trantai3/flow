# Bó hoa tặng nàng 🌷

Trang quà tặng 20/10: chạm bé thỏ → bó tulip nở → mở phong thư đọc lời nhắn, có ảnh kỷ niệm bay lượn trên màn hình.

- **Trang tạo quà:** https://phamkhanhhung1998.github.io/flower/
- **Repo:** https://github.com/phamkhanhhung1998/flower

---

## Mục lục

1. [Tạo quà nhanh (không cần sửa code)](#1-tạo-quà-nhanh-không-cần-sửa-code)
2. [Thêm ảnh](#2-thêm-ảnh)
3. [Thêm nhạc](#3-thêm-nhạc)
4. [Sửa code trên GitHub (không cần cài gì)](#4-sửa-code-trên-github-không-cần-cài-gì)
5. [Gặp lỗi thì xem ở đây](#5-gặp-lỗi-thì-xem-ở-đây)

---

## 1. Tạo quà nhanh (không cần sửa code)

1. Mở https://phamkhanhhung1998.github.io/flower/
2. Điền form:

   | Ô trong form | Hiện ở đâu trên trang quà |
   |---|---|
   | **Thông điệp đầu** | Chữ to phát sáng phía trên bó hoa |
   | **Tiêu đề thư** | Tiêu đề lá thư |
   | **Lời nhắn nhủ** | Nội dung thư, gõ từng chữ (tối đa 320 ký tự) |
   | **Ký tên** | Tên người gửi cuối thư |
   | **Ảnh kỷ niệm** | Ảnh nhỏ bay qua lại trên màn hình (xem [mục 2](#2-thêm-ảnh)) |
   | **Số ảnh bay** | Bao nhiêu tấm ảnh bay cùng lúc (1–15) |
   | **Nhạc nền** | Nhạc phát khi chạm bé thỏ (xem [mục 3](#3-thêm-nhạc)) |

3. Bấm **Tạo Link** → **Xem thử** để kiểm tra → **Sao chép** rồi gửi link qua Zalo / Messenger.

> Mọi nội dung (kể cả ảnh đã thu nhỏ) nằm **trong chính đường link** (phần `#d=...`), không lưu trên server.
> Form tự lưu nháp trong trình duyệt, lần sau mở lại vẫn còn.

---

## 2. Thêm ảnh

### Cách A — Upload trong form (khuyên dùng, ảnh KHÔNG bị công khai)

1. Trong form, bấm nút hồng **Chọn hoặc Upload ảnh**.
2. Chọn 1–3 ảnh từ máy / điện thoại. Ảnh hiện thành ô vuông nhỏ bên dưới, bấm **×** để xoá.
3. Chọn **Số ảnh bay trên màn hình** (ví dụ 7). Nếu có ít ảnh hơn số này, ảnh sẽ được lặp lại cho đủ.
4. Bấm **Tạo Link**.

- Ảnh được tự thu nhỏ còn 180px rồi gói vào link → chỉ ai có link mới thấy.
- Người nhận **chạm vào ảnh đang bay** để xem ảnh to hơn.
- ⚠️ Mỗi ảnh làm link dài thêm khoảng 5.000 ký tự. Nếu Zalo / Messenger cắt mất link, hãy dùng 1 ảnh thôi.

### Cách B — Ảnh mặc định cố định trong repo (ảnh sẽ CÔNG KHAI)

Dùng khi muốn trang `flower.html` mở trực tiếp (không có link quà) vẫn có ảnh bay.

> ⚠️ Repo này là **public**: ảnh upload lên repo thì **ai cũng xem / tải được**.

1. Vào https://github.com/phamkhanhhung1998/flower/tree/main/assets/a
2. Bấm **Add file** → **Upload files** → kéo ảnh vào (đặt tên không dấu, không khoảng trắng, ví dụ `kyniem1.jpg`) → bấm **Commit changes**.
3. Mở file `flower.html` trên GitHub → bấm biểu tượng ✏️ (**Edit**).
4. Tìm dòng (gần dòng 487):

   ```js
   photos: [],                          // ảnh kỷ niệm bay lượn
   ```

   Sửa thành:

   ```js
   photos: ["./assets/a/kyniem1.jpg"],  // ảnh kỷ niệm bay lượn
   ```

   Nhiều ảnh thì cách nhau dấu phẩy: `["./assets/a/kyniem1.jpg", "./assets/a/kyniem2.jpg"]`
5. Bấm **Commit changes**. Khoảng 1 phút sau trang tự cập nhật.

> Link tạo từ form có ảnh riêng thì ảnh trong link sẽ **thay** ảnh mặc định này.

---

## 3. Thêm nhạc

> ⚠️ Chỉ dùng nhạc bạn **có quyền chia sẻ** (nhạc tự làm, nhạc miễn phí bản quyền…).
> Repo public nên file nhạc upload lên ai cũng tải được, nhạc có bản quyền có thể bị GitHub gỡ.
> Nguồn nhạc miễn phí: [Pixabay Music](https://pixabay.com/music/), [YouTube Audio Library](https://studio.youtube.com/) (mục Audio Library), [Free Music Archive](https://freemusicarchive.org/).

Trình duyệt **không cho tự phát nhạc** khi vừa mở trang, nên nhạc chỉ bắt đầu khi người nhận **chạm vào bé thỏ**. Nút 🎵 góc dưới phải dùng để bật / tắt.

### Cách A — Dán link mp3 trong form

1. Ở ô **Nhạc nền**, chọn **Dán link nhạc mp3...**
2. Một ô nhập hiện ra, dán link **trực tiếp** tới file `.mp3`.
3. Bấm **Tạo Link**.

**Link trực tiếp là gì?** Là link mà mở ra trình duyệt **phát nhạc ngay** (hoặc tải về file .mp3), ví dụ:

```
https://phamkhanhhung1998.github.io/flower/baihat.mp3
```

❌ Không dùng được: link YouTube, link Zing MP3 / Spotify / NhacCuaTui, link chia sẻ Google Drive (`drive.google.com/file/d/...`) — đây là trang web, không phải file nhạc.

### Cách B — Upload mp3 lên repo rồi lấy link (khuyên dùng)

1. Vào https://github.com/phamkhanhhung1998/flower
2. Bấm **Add file** → **Upload files**.
3. Kéo file nhạc vào. **Đổi tên file trước khi upload**: không dấu, không khoảng trắng, ví dụ `baihat.mp3`. (File nên < 10 MB.)
4. Bấm **Commit changes**, đợi khoảng 1 phút.
5. Link nhạc của bạn sẽ là:

   ```
   https://phamkhanhhung1998.github.io/flower/baihat.mp3
   ```

   Mở thử link này trên trình duyệt, nghe được là đúng.
6. Dán link đó vào form theo **Cách A**.

### Cách C — Thêm bài vào danh sách chọn sẵn trong form

Để lần sau chỉ cần chọn trong danh sách, không phải dán link:

1. Upload file nhạc như **Cách B** (bước 1–4).
2. Mở file `create.html` trên GitHub → bấm ✏️ (**Edit**).
3. Tìm đoạn (gần dòng 247):

   ```js
   const MUSIC = [
       { label: "Không phát nhạc", src: "" },
       { label: "Dán link nhạc mp3...", src: CUSTOM },
   ];
   ```

4. Thêm một dòng cho mỗi bài, ví dụ:

   ```js
   const MUSIC = [
       { label: "Bài hát của anh", src: "./baihat.mp3" },
       { label: "Không phát nhạc", src: "" },
       { label: "Dán link nhạc mp3...", src: CUSTOM },
   ];
   ```

   - `label`: tên hiện trong danh sách
   - `src`: đường dẫn tới file, bắt đầu bằng `./` và đúng tên file đã upload
   - Bài để **đầu tiên** sẽ được chọn sẵn
5. Bấm **Commit changes**, đợi khoảng 1 phút rồi tải lại trang form.

### Nhạc có sẵn trong danh sách

Thư mục `n/` có sẵn 7 bài nhạc nhẹ nhàng của **Kevin MacLeod** ([incompetech.com](https://incompetech.com)), dùng miễn phí theo giấy phép [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) với điều kiện **ghi công tác giả** (đã ghi trong form tạo quà, đừng xoá):

| Bài | File |
|---|---|
| Canon in D for Two Harps | `n/canon-in-d.mp3` |
| Crinoline Dreams | `n/crinoline-dreams.mp3` |
| Dreamer | `n/dreamer.mp3` |
| Evening | `n/evening.mp3` |
| Morning | `n/morning.mp3` |
| Smooth Lovin | `n/smooth-lovin.mp3` |
| Fresh Air | `n/fresh-air.mp3` |

> "Tên bài" Kevin MacLeod (incompetech.com) — Licensed under Creative Commons: By Attribution 4.0 License, http://creativecommons.org/licenses/by/4.0/

---

## 4. Sửa code trên GitHub (không cần cài gì)

1. Mở file cần sửa trên https://github.com/phamkhanhhung1998/flower
2. Bấm biểu tượng ✏️ (**Edit this file**) góc trên bên phải.
3. Sửa xong bấm **Commit changes...** → **Commit changes**.
4. Đợi khoảng 1 phút (xem tiến độ ở tab **Actions**), tải lại trang web.

Các file chính:

| File | Dùng để |
|---|---|
| `create.html` | Form tạo quà, danh sách nhạc (`MUSIC`), nội dung điền sẵn (`DEFAULTS`) |
| `flower.html` | Trang quà, nội dung mặc định (`CONFIG`), vị trí các bông tulip (`TULIPS`) |
| `assets/a/` | Hình ảnh |
| `assets/js/share.js` | Nén / giải nén nội dung vào link (không cần sửa) |

**Sửa trên máy** (nếu có thư mục `20_10_github`): sửa file rồi chạy

```bash
git add -A
git commit -m "Cập nhật nội dung"
git push
```

---

## 5. Gặp lỗi thì xem ở đây

| Hiện tượng | Cách xử lý |
|---|---|
| Không có nhạc | Phải **chạm bé thỏ** thì nhạc mới phát. Kiểm tra link mp3 mở được trên trình duyệt. Trên iPhone tắt chế độ im lặng. |
| Link nhạc không chạy | Phải là link **trực tiếp** tới file `.mp3` (xem [mục 3](#3-thêm-nhạc)). Tên file có dấu / khoảng trắng → đổi tên rồi upload lại. |
| Link bị cắt khi gửi | Bớt ảnh (còn 1 ảnh hoặc không ảnh), hoặc gửi link dạng tin nhắn văn bản thay vì xem trước. |
| Sửa xong web chưa đổi | Đợi 1–2 phút, rồi tải lại bằng **Ctrl + F5** (máy tính) hoặc mở tab ẩn danh. |
| Ảnh upload lên repo không hiện | Kiểm tra tên file trong `photos: [...]` đúng chữ hoa / thường và đuôi file (`.jpg` khác `.JPG`). |
| Trang trắng | Mở bằng trình duyệt mới (Chrome, Edge, Safari, Cốc Cốc). Kiểm tra link copy đủ, không thiếu phần `#d=...`. |
#   f l o w  
 
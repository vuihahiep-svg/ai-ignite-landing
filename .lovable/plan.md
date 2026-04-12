
Mục tiêu: đồng bộ đúng 3 ảnh mới mà bạn vừa mô tả, vì hiện tại code mới chỉ tham chiếu tên file cũ chứ chưa chắc đã thay đúng nội dung hiển thị ở tất cả nơi cần dùng.

1. Kiểm tra và cập nhật asset ảnh
- Thay đúng file nguồn trong `src/assets/` để:
  - `baocao1.png` = “Sơ đồ luồng phát triển năng lực học sinh qua 4 cấp của chương trình AI Thực Chiến”
  - `baocao2.png` = “Sơ đồ Gantt lộ trình triển khai AI Thực Chiến 12 tháng (2026-2027)”
  - `baocao3.jpeg` = ảnh chân dung Hoàng Hiệp
- Đồng thời bổ sung bản dùng cho markdown ở `public/image/` vì `public/baocao.md` đang tham chiếu:
  - `image/baocao1.png`
  - `image/baocao2.png`
  - `image/baocao3.jpeg`

2. Sửa phần landing page để khớp ngữ nghĩa ảnh
- `src/components/BenefitsSection.tsx`
  - giữ `baocao1` cho sơ đồ phát triển năng lực
  - cập nhật alt/caption đầy đủ theo mô tả mới
  - chỉnh khung hiển thị để ảnh sơ đồ không bị quá nhỏ hoặc méo
- `src/components/ImplementationSection.tsx`
  - giữ `baocao2` cho sơ đồ Gantt
  - cập nhật alt/caption đúng 3 giai đoạn: Chuẩn bị, Triển khai, Nhân rộng
  - tối ưu khung hiển thị cho ảnh timeline ngang
- `src/components/AuthorSection.tsx`
  - giữ `baocao3` cho hình Hoàng Hiệp
  - cập nhật alt rõ nghĩa hơn
  - nếu ảnh chân dung bị crop xấu sẽ đổi từ `object-cover` sang cách hiển thị phù hợp hơn

3. Sửa trang `/baocao` để markdown dùng đúng ảnh mới
- Vì `public/baocao.md` đang gọi ảnh từ thư mục `public/image/`, cần đặt đúng 3 file tại đó để markdown render ra đúng nội dung, không còn tình trạng landing page đúng mà trang báo cáo vẫn sai.
- Giữ nguyên nội dung markdown nếu text hiện tại đã đúng, chỉ cần đảm bảo đường dẫn ảnh trỏ tới file mới thực sự.

4. Tinh chỉnh kích thước hiển thị ảnh
- `baocao1`: ưu tiên khung dọc/cân đối hơn, tránh bị thu quá nhỏ trong card rộng
- `baocao2`: ưu tiên khung ngang lớn hơn, tận dụng chiều rộng container vì đây là sơ đồ Gantt
- `baocao3`: ưu tiên hiển thị đủ khuôn mặt/chủ thể, tránh crop mất đầu hoặc vai

5. Kiểm tra sau khi triển khai
- Xác minh trên landing page:
  - phần “Sơ Đồ Phát Triển Năng Lực” hiển thị đúng ảnh `baocao1`
  - phần “Lộ Trình 12 Tháng” hiển thị đúng ảnh `baocao2`
  - phần “Người Triển Khai” hiển thị đúng ảnh `baocao3`
- Xác minh trên route `/baocao`:
  - 3 ảnh trong markdown đều hiện đúng và đúng thứ tự
  - alt/caption/ngữ cảnh khớp với nội dung bạn mô tả

Chi tiết kỹ thuật
- File cần sửa khả năng cao:
  - `src/components/BenefitsSection.tsx`
  - `src/components/ImplementationSection.tsx`
  - `src/components/AuthorSection.tsx`
  - thêm/cập nhật asset trong `src/assets/`
  - thêm/cập nhật ảnh trong `public/image/`
- Nguyên nhân chính hiện tại:
  - markdown đang đọc ảnh từ `public/image/...`
  - landing page lại đọc ảnh từ `src/assets/...`
  - nên nếu chỉ thay một bên thì vẫn sẽ có chỗ chưa cập nhật

Khi bạn duyệt kế hoạch này, tôi sẽ cập nhật đồng bộ cả landing page lẫn trang `/baocao`, rồi chỉnh lại kích thước hiển thị cho 3 ảnh để không bị sai hoặc méo nữa.

# Bảng so sánh “Visual DOM” vs “Real DOM” trong Angular

| Tiêu chí                            | **Visual DOM (DOM nhìn thấy trong DevTools)**                             | **Real DOM (DOM thật của trình duyệt xử lý)**                                 |
| ----------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Định nghĩa                          | Các thẻ component (`<app-*>`) mà bạn thấy trong DevTools                  | Các thẻ HTML thật mà browser thực sự hiểu (`<div>`, `<span>`, `<input>`)      |
| Ai tạo ra                           | Angular tạo để giúp debug và cấu trúc component                           | Browser tạo sau khi Angular render                                            |
| Công dụng                           | - Hiển thị cấu trúc component <br>- Developer dễ đọc, debug               | - Render thật ra UI <br>- Trình duyệt layout, paint, event hoạt động trên đây |
| Tồn tại khi render cuối cùng        | Tồn tại trong DevTools nhưng không ảnh hưởng tới UI                       | Chính nó quyết định UI hiển thị                                               |
| Ví dụ bạn thấy                      | `<app-validator><input></app-validator>`                                  | `<input ...>` với logic Angular đổ vào                                        |
| Có tối ưu hiệu năng không?          | Không trực tiếp                                                           | Có — vì chỉ Real DOM được cập nhật                                            |
| Browser có hiểu không?              | ❌ Không                                                                   | ✅ Có                                                                          |
| Xóa trong DevTools có bị lỗi không? | Không làm mất UI thực, chỉ wrapper mất                                    | Xóa thì UI biến mất thật                                                      |
| Quan hệ giữa chúng                  | Visual DOM chỉ là lớp hiển thị, Angular chuyển nó thành Real DOM khi chạy | Real DOM là bản chính hiển thị trên UI                                        |

### My code
```html
<app-button>
  <button>Click</button>
</app-button>
```

### DevTools -> Visual DOM
```html
<app-button>
  <button>Click</button>
</app-button>
```

### Real DOM
```html
<button>Click</button>
```
`<app-button>` không có ý nghĩa với browser, Angular chỉ dùng để cấu trúc code.

| Vấn đề             | Angular                                | React                                |
| ------------------ | -------------------------------------- | ------------------------------------ |
| Render UI          | Thao tác trực tiếp lên Real DOM        | So sánh Virtual DOM → patch Real DOM |
| DOM developer thấy | `<app-*>` (visual wrapper)             | Các thẻ HTML thật từ JSX             |
| Tối ưu hiệu năng   | Change Detection + Ivy Incremental DOM | Virtual DOM diffing                  |

# Validate form
## Có 2 cách chính để validate form
### 1. Dùng Angular: Reactive Forms Validators
- Props: 
  - Native, không cần cài thêm package.
  - Tích hợp chặt chẽ với form control state (touched, dirty, valid, …).
  - Dễ show error trong template.
- Cons:
  - Không mạnh bằng schema-based validation (như Yup/Zod) nếu form phức tạp (object lồng nhau, rules động...).

### 2. Dùng Schema-based validation (Giống React - Yup/Zod style)
- Props:
  - Mạnh, type-safe, dễ test
- Cons:
  - Phải cài
  - Custom các kiểu
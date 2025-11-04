import { FormGroup } from "@angular/forms";

export const getError = (form: FormGroup) => {
  const errs: Record<string, string> = {};

  Object.keys(form.controls).forEach(key => {
    const control = form.get(key);

    if (control && control.touched && control.errors) {      
      switch (Object.keys(control.errors)[0]) {
        case 'required':
          errs[key] = 'Trường này là bắt buộc.';
          break;
        case 'minlength':
          errs[key] = `Phải có ít nhất ${control.errors['minlength'].requiredLength} kí tự`;
          break;
        case 'email':
          errs[key] = 'Email không hợp lệ.';
          break;
        default:
          errs[key] = "Có lỗi xảy ra";
          break;
      }
    }
  })

  return errs;
}
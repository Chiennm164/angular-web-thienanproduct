import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss'],
})
export class DangKyComponent {
  @Output() closeForm = new EventEmitter();
  showModal: boolean = false;

  validateBoxText =
    /^([a-zA-ZAÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZaàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz\s]+)([a-zA-Z0-9AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZaàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz\s]+)$/i;

  registerForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(this.validateBoxText)],
      ],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: [''],
    });

    setTimeout(() => {
      this.showModal = true;
    }, 1000);
  }

  submitForm(e: Event) {
    e.preventDefault();

    let alertText = '';

    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      if (
        this.registerForm.controls.name.errors?.['required'] ||
        this.registerForm.controls.phone.errors?.['required'] ||
        this.registerForm.controls.email.errors?.['required']
      ) {
        alertText = ' không được để trống.';

        if (this.registerForm.controls.phone.errors?.['required']) {
          alertText = 'Số điện thoại' + alertText;
        }
        if (this.registerForm.controls.email.errors?.['required']) {
          alertText = 'Email, ' + alertText;
        }
        if (this.registerForm.controls.name.errors?.['required']) {
          alertText = 'Họ và tên, ' + alertText;
        }
      } else {
        alertText = ' không đúng định dạng.';
        if (this.registerForm.controls.phone.errors?.['pattern']) {
          alertText = 'Số điện thoại không đúng định dạng (0987654321)\n';
        }
        if (this.registerForm.controls.email.errors?.['pattern']) {
          alertText = 'Email không đúng định dạng (a@gmail.com)\n' + alertText;
        }
        if (this.registerForm.controls.name.errors?.['pattern']) {
          alertText =
            'Họ và tên không được có kí tự đặc biệt hoặc số ở đầu\n' +
            alertText;
        }
      }
      alert(alertText);
    }
  }

  closeModal() {
    this.showModal = false;
  }
}

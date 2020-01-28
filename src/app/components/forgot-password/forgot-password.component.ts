import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { PasswordValidators } from "./password.validators";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"]
})
export class ForgotPasswordComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          "",
          Validators.required,
          PasswordValidators.invalidOldPassword
        ],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      { validator: PasswordValidators.passwordsShouldMatch }
    );
  }

  changePassword() {
    this.form.setErrors({
      invalidPassord: true
    });
  }

  get oldPassword() {
    return this.form.get("oldPassword");
  }
  get newPassword() {
    return this.form.get("newPassword");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}

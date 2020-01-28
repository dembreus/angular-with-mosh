import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
  static passwordsShouldMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    const newPassword: String = control.get("newPassword").value;
    const confirmPassword: String = control.get("confirmPassword").value;
    if (newPassword !== confirmPassword) return { passwordsShouldMatch: true };
    return null;
  }

  static invalidOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      if (control.value !== "1234") resolve({ invalidOldPassword: true });
      else resolve(null);
    });
  }
}

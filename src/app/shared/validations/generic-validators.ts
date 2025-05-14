import { AbstractControl, ValidationErrors } from '@angular/forms';

export class GenericValidators {
  static crossFieldsPasswordValidator(field1: string, field2: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const field1Value = control.get(field1)?.value;
      const field2Value = control.get(field2)?.value;
      if (field1Value !== field2Value) {
        control.get(field2)?.setErrors({ passwordMatchError: true });
        return { passwordMatchError: true };
      } else {
        control.get(field2)?.setErrors(null);
        return null;
      }
    };
  }
}

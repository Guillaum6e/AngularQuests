import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  // const emailRegex = RegExp('/\@wilder\.school$/m');
  const valid = control.value.includes('@') && control.value.endsWith('wilder.school');

  const errors = {
    email: {
      rules: 'should end with "@wilder.school"'
    }
  };

  return !valid ? errors : null;
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from './ValidationErrors';
import { emailValidator } from './email-Validators';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  myForm = this.fb.group({
    fullname: ['', [Validators.required]],
    credentials: this.fb.group({
      email: ['', [emailValidator, Validators.required]],
      password: ['', [passwordValidator, Validators.required]]
    }),
    address: this.fb.group({
      street: ['', Validators.pattern(RegExp('[a-z ]{1,50}/i'))],
      city: ['', Validators.pattern(RegExp('[a-z ]{1,50}/i'))],
      zipcode: ['', Validators.pattern(RegExp('[0-9]{1,5}'))],
    }),
  });

  constructor(private fb: FormBuilder) { }

  person: Person = new Person('', '', '', '', '', 0);

  onSubmit() {
    if (this.myForm.valid) {
      const fullname = this.myForm.value.fullname!;
      const email = this.myForm.value.credentials?.email!;
      const password = this.myForm.value.credentials?.password!;
      const street = this.myForm.value.address?.street!;
      const city = this.myForm.value.address?.city!;
      const zipcode = parseInt(this.myForm.value.address?.zipcode!);

      this.person = new Person(fullname, email, password, street, city, zipcode)
    }
  }

}

export class Person {
  constructor(
    public fullname: string,
    public email: string,
    public password: string,
    public street: string,
    public city: string,
    public zipcode: number,
  ) { }
}

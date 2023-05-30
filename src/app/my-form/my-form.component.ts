import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  model: Order = new Order("", "", "", "");

  onSubmit() {
    console.log(this.model);
  }
}

export class Order {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string
  ) { }
}

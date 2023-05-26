import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    ageDisplay: true,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  showAge() {
    return (this.user.ageDisplay = true);
  }
  hideAge() {
    return (this.user.ageDisplay = false);
  }
}

import { Component } from '@angular/core';
import { Developper } from '../models/developper.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  dev: Developper = new Developper("GG", "JJ", 78, "male", "", [new Skill(), new Skill()]);
  // user = {
  //   name: 'Doe',
  //   firstName: 'John',
  //   age: 25,
  //   ageDisplay: true,
  //   quote: '',
  //   photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  // };

  // showAge() {
  //   return (this.user.ageDisplay = true);
  // }
  // hideAge() {
  //   return (this.user.ageDisplay = false);
  // }
}

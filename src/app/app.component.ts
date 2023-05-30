import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quest04';
  isAdmin = false;

  connect() {
    this.isAdmin = true;
  }

  disconnect() {
    this.isAdmin = false;
  }
}

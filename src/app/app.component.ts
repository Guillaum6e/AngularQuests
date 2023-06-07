import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quest08';
  isAdmin = false;

  public onomatopoeiaList: string[] = ["test"];
  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event);
  }

  connect() {
    this.isAdmin = true;
  }

  disconnect() {
    this.isAdmin = false;
  }
}

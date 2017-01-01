import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened: Boolean = false; 

  toggle() {
    this.opened = !this.opened; 
  }
}

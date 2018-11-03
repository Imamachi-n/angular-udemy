import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSecret = false;
  logItems = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.logItems.push(this.logItems.length + 1);
  }
}

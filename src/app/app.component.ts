import { Component } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `zkr ${VERSION}`;
  constructor() {
  }
}

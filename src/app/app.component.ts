import { Component } from '@angular/core';
import { Navbar } from './navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your first app';
  word = '';
}

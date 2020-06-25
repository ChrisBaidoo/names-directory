import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular app';
  tester = 'Im starting to like this';
  students = {
    name: 'John',
    age: 24,
  };
}

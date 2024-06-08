import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 16 practice';
  user = {
    name: "angular user",
    hobby: "coding",
    interest: "UI",
    known: ["java", "go", "javascript", "typescript", "html", "css"]
  }
}

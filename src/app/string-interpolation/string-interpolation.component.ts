import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  title = 'Angular 16 practice';
  user = {
    name: "angular user",
    hobby: "coding",
    interest: "UI",
    known: ["java", "go", "javascript", "typescript", "html", "css"]
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent {
  title = 'Angular 16 practice';
  user = {
    name: 'angular user',
    hobby: 'coding',
    interest: 'UI',
    known: ['java', 'go', 'javascript', 'typescript', 'html', 'css'],
  };
  codeTemplate: string = `Code of above template
----------------------------------------------------------------
HTML code 
----------------------------------------------------------------
  <div>
    <h1>{{title}}</h1>
    <h2>user : {{user.name}}</h2>
    <h2>hobby : {{user.hobby}}</h2>
    <h2>interest : {{user.interest}}</h2>
    <h2>known : </h2>
    <ol>
        <li>{{user.known[0]}}</li>
        <li>{{user.known[1]}}</li>
        <li>{{user.known[2]}}</li>
        <li>{{user.known[3]}}</li>
    </ol>
  </div>
----------------------------------------------------------------
Typescript Code
----------------------------------------------------------------
  title = 'Angular 16 practice';
  user = {
    name: "angular user",
    hobby: "coding",
    interest: "UI",
    known: ["java", "go", "javascript", "typescript", "html", "css"]
  }`;
}

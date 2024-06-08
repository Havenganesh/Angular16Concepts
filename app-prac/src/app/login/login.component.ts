import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    console.log("called")
    if (this.authService.login(this.username, this.password)) {
      console.log("calledpute r")
      this.router.navigate(['a']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }

}

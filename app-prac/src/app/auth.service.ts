import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(username: string, password: string): boolean {
    // Implement your authentication logic here.
    // For this example, we will just return true if username and password match 'admin'.
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', 'admin');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}

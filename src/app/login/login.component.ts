import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  loginError: string = '';

  users = [
    { email: 'user1@abc.com', password: '111' },
    { email: 'user2@abc.com', password: '222' },
    { email: 'user3@abc.com', password: '333' },
];

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
    this.loginError = '';
  }

  ngOnInit(): void {
  }

  login(): void {
    const validUser = this.users.find(user => user.email === this.email && user.password === this.password);

    if (validUser) {
        this.router.navigate(['/account']);
        this.loginError = '';
    } else {
        this.loginError = 'Invalid email or password';
    }
}
}

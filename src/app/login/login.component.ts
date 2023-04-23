import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  adminName: string = 'admin';
  adminPassword: string = '1234';

  logInFrom: FormGroup;

  constructor(private auth: AuthService, private router: Router) {
    this.logInFrom = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
    })
  }

  submit() {
    if (this.logInFrom.value.name === this.adminName && this.logInFrom.value.password === this.adminPassword) {
      this.auth.logIn();
      this.router.navigate(['list']);
    }
    else alert('name: admin ; password: 1234');
  }

}

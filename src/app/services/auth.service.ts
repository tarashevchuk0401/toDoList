import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogedIn: boolean = false;

  constructor() { }

  logIn(){
    this.isLogedIn = true;
  }

  logOut(){
    this.isLogedIn = false;
  }


}

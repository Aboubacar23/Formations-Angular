import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!: string;
  constructor() { }


  login()  {
    return this.token = "MonFauxToken";
  }
  getToken() : string{
    return this.token;
  }
}

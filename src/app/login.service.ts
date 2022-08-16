import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  ValidateUser(_username:any,_password:any){
    return true;
  }
}

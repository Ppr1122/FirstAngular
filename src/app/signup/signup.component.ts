import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  SignUp =new FormGroup({
    firstname: new FormControl,
    lastname: new FormControl,
    email: new FormControl,
    phone: new FormControl,
    City: new FormControl
  })
  NewUser(){
  this.router.navigate(["login"]);
  }

}

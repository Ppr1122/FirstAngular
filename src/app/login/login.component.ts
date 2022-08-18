import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 submitted=false;
  constructor(public service: LoginService,public router:Router, private activatedRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
   
  }
  login =new FormGroup({
    uname: new FormControl('',[Validators.required,Validators.email]),
    pwd: new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  onSubmit(){
    console.log("login");
    this.submitted=true;
    if(this.login.invalid){
      return;
    }
    alert("Success")
    this.router.navigate(['home']);
  }
  get uname(): FormControl{
    return this.login.get("uname") as FormControl;
  }
  get password(): FormControl{
    return this.login.get("pwd") as FormControl;
  }
  CheckUser(){
   this.submitted=true;
   this.router.navigate(["SignUp"]);
  }
}

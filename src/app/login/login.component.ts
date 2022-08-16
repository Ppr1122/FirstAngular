import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(public service: LoginService,public router:Router) { }
  

  ngOnInit(): void {
   
  }
  login =new FormGroup({
    uname: new FormControl('',[Validators.required,Validators.email]),
    pwd: new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  CheckUser(){
    alert();
   var res= this.service.ValidateUser(this.login?.value["uname"],this.login?.value["pwd"]);
   if(res! == undefined){
    this.router.navigate(['home']);
      }
      else{
  alert("Invalid User..")
    }
  }
  
}
  



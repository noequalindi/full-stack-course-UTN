import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  constructor(public fb:FormBuilder,public auth:AutenticacionService) { 
    this.form = this.fb.group({
      usuario:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  login(){
    this.auth.login(this.form.value).subscribe(data=>{
      console.log(data)
    })
  }
  ngOnInit() {
  }

}

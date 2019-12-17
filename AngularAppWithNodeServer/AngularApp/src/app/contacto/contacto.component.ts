import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form;
  constructor(public fb:FormBuilder) { 
    this.form = this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(4)]],
      apellido:["",[Validators.required]],
      email:["",[Validators.required]],
      descripcion:["",[Validators.required]]
    })
  }
  contacto(){
    console.log(this.form.value)
  }
  ngOnInit() {
  }

}

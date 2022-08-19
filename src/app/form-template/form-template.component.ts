import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  email!: string;
  nom!: string;
  prenom!: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm){
    console.log(form.value);
  }

}

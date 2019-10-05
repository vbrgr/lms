import { Component, ViewChild, OnInit } from '@angular/core';
import { FieldConfig } from '../models/Field.interface';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formdata: {};
  @ViewChild('DynamicFormComponent') form: DynamicFormComponent;
  constructor(private forms: FormService) {
    this.forms.getForm().subscribe(res => {
      this.formdata = res[0].schema.properties;
      const main = [];
      Object.keys(this.formdata).forEach( (k, v) => {
        main.push(this.getData(k));
      });
     // console.log(main);
      localStorage.setItem('jsondata', JSON.stringify(main));
    });
  }
  regConfig: FieldConfig[] = JSON.parse(localStorage.getItem('jsondata'));
  getData(name) {
    return this.formdata[name];
  }
  submit(value: any) {
   // console.log(value);
   }
   ngOnInit() {
   // console.log(this.regConfig);
  }
}


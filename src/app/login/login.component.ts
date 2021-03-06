import { Component, ViewChild, OnInit } from '@angular/core';
import { FieldConfig } from '../models/Field.interface';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { FormService } from '../services/form.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formdata: {};
  loading = false;
  errorMsg: string;
  @ViewChild('DynamicFormComponent') form: DynamicFormComponent;
  constructor(private forms: FormService, private router: Router, private route: ActivatedRoute,
              private authService: AdminAuthService) {
    this.forms.getForm().subscribe(res => {
      this.formdata = res[0].schema.properties;
      const main = [];
      Object.keys(this.formdata).forEach( (k, v) => {
        main.push(this.getData(k));
      });
      main.push(res[0].schema);
     // console.log(main);
      localStorage.setItem('jsondata', JSON.stringify(main));
    });
  }
  regConfig: FieldConfig[] = JSON.parse(localStorage.getItem('jsondata'));
  getData(name) {
    return this.formdata[name];
  }
  submit(value: any) {
    this.signIn(value);
   }
   ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.authService.getCurrentUser().subscribe(result => {
        if (result[0]['type'] === 'Admin') {
        this.router.navigate(['admin/dashboard']);
         } else if (result[0]['type'] === 'User') {
           this.router.navigate(['user/profile']);
         } else {
           this.router.navigate(['/']);
         }
      });
   } else {
     this.router.navigate(['/']);
   }
   // console.log(this.regConfig);
  }
  signIn(credentials) {
      this.loading = true;
      this.authService.login(credentials)
        .subscribe(result => {
          if (result[0].token) {
            if (result[0].type === 'Admin') {
            this.router.navigate(['admin/dashboard']);
            } else if (result[0].type === 'User') {
              this.router.navigate(['user/profile']);
            }
            console.log(result);
            localStorage.setItem('currentUserToken', result[0].token);
            this.authService.setLoggedIn(true);
          } else {
            this.errorMsg = result[0].errorMessage;
            this.loading = false;
          }
        });
  }
}


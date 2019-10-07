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
  loginForm: FormGroup;
  submitted = false;
  invalidLogin: boolean;
  loading = false;
  errorMsg: string;
  @ViewChild('DynamicFormComponent') form: DynamicFormComponent;
  constructor(private forms: FormService, private router: Router, private route: ActivatedRoute,  private authService: AdminAuthService) {
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
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.signIn(this.loginForm.value);
   // console.log(value);
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
          if (result.token) {
            if (result.type === 'Admin') {
            this.router.navigate(['admin/dashboard']);
            } else if (result.type === 'User') {
              this.router.navigate(['user/profile']);
            }
            this.authService.setLoggedIn(true);
          } else {
            this.invalidLogin = true;
            this.errorMsg = result.errorMessage;
            this.loading = false;
          }
        });
  }
}


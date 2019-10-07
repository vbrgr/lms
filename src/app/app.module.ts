import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

import { SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { MenuComponent } from './admin/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './components/input/input.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadioComponent } from './components/radio/radio.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { FormTitleComponent } from './components/form-title/form-title.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    DynamicFieldDirective,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent,
    TextareaComponent,
    FormTitleComponent,
    HeaderNavComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('currentUserToken');
        }
      }
    }),
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent,
    TextareaComponent,
    FormTitleComponent,
    HeaderNavComponent
    ]
})
export class AppModule { }

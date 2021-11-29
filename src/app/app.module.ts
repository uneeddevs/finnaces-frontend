import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './modules/login/form-login/form-login.component';
import { FormRegisterComponent } from './modules/login/form-register/form-register.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
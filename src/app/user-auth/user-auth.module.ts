import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './login/login.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [

    LoadingComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [

    LoadingComponent
  ]
})
export class UserAuthModule { }

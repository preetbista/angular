import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './user-auth/login/login.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HeaderComponent } from './user-auth/header/header.component';

const routes: Routes = [
  {path:'login', component:FormComponent},
  {path:'employee', component:EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormComponent, EmployeeDetailComponent, HeaderComponent]

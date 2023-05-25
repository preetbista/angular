import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './user-auth/login/login.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HeaderComponent } from './user-auth/header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component:FormComponent},
  {path:'employee', component:EmployeeDetailComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormComponent, EmployeeDetailComponent, HeaderComponent, PageNotFoundComponent]

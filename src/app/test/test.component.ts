import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  template: `
  <h2>Employee List</h2>
  <h2>{{errorMsg}}</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
  `,
  styles: []
})
export class TestComponent {
 public employees = []

 public errorMsg:string;
 constructor(private _employeeService:EmployeeService){ }

 ngOnInit(){
     this._employeeService.getEmployees()
     .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
 }
}

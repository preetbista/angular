import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee List</h2>
    <h2>{{errorMsg}}</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}.{{employee.name}}-{{employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
    public employees = [];
    public errorMsg;

    constructor(private _employeeService:EmployeeService){ }

    ngOnInit(){
      this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMsg = error);
  }
}

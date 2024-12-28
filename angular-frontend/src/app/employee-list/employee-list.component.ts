import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees:Employee[]=[];

  constructor(private employeeService:EmployeeService, private router: Router){}

  ngOnInit(): void {
      this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees = data;
    });
  }

  updateEmployee(id: number): void {
    console.log(`Update employee with ID: ${id}`);
    // Logic to navigate to update page or open a form can be implemented here
  }

  deleteEmployee(id: number): void {
    console.log(`Delete employee with ID: ${id}`);
    // Logic to delete the employee can be implemented here
    this.employees = this.employees.filter(employee => employee.id !== id);
  }

  employeeDetails(id: number): void {
    console.log(`View details of employee with ID: ${id}`);
    
  }
}

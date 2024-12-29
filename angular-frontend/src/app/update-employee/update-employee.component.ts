import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id!:number;
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    // When a route has dynamic parameters, such as id in /employees/:id, you use ActivatedRoute to access these parameters
    this.id=this.activatedRoute.snapshot.params['id'];

    this.employeeService.getEmpolyeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    },error=>console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['employees']);  // Navigate back to employee list page
  }
}

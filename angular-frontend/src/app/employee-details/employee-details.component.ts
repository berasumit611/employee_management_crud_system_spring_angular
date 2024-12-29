import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!:number; // Use '!' to assert that this will be assigned later
  employee!:Employee;
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService){}

  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];

      this.employee=new Employee();
      this.employeeService.getEmpolyeeById(this.id).subscribe(data=>{
        this.employee=data;
      });
  }
}

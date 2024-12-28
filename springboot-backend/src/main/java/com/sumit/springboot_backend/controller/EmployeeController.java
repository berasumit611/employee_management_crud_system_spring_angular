
package com.sumit.springboot_backend.controller;

import com.sumit.springboot_backend.exception.ResourceNotFoundException;
import com.sumit.springboot_backend.model.Employee;
import com.sumit.springboot_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.module.ResolutionException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
//@CrossOrigin(origins = "http://localhost:4200") // Allow requests from Angular // don't require for global configuration
public class EmployeeController {

    // inject employee repository here
    @Autowired
    private EmployeeRepository employeeRepository;


    // get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }


    // create employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return  employeeRepository.save(employee);
    }

    // get employee by id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with id :"+id));
        return ResponseEntity.ok(employee);
    }

    // delete employee
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
        Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :" + id));


        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

    // update employee
    @PutMapping("employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
        Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with id :"+id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }



}
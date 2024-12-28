package com.sumit.springboot_backend.repository;

import com.sumit.springboot_backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository; // Extends JPARepository which will give many methods
import org.springframework.stereotype.Repository;
// Pass Employee entity class and primary key type
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}

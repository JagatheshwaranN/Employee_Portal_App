package com.learn_everyday.employee_portal.repository;

import com.learn_everyday.employee_portal.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository  extends JpaRepository<Employee, Long> {

}

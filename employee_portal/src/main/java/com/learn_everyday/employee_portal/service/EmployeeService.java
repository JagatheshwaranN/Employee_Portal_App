package com.learn_everyday.employee_portal.service;

import com.learn_everyday.employee_portal.dto.EmployeeDto;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(long employeeId);
}

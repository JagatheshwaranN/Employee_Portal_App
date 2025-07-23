package com.learn_everyday.employee_portal.service;

import com.learn_everyday.employee_portal.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(long employeeId, EmployeeDto employeeDto);

    void deleteEmployeeById(long employeeId);
}

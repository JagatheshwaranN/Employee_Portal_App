package com.learn_everyday.employee_portal.mapper;

import com.learn_everyday.employee_portal.dto.EmployeeDto;
import com.learn_everyday.employee_portal.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmailId(),
                employee.getLocation(),
                employee.getDomain(),
                employee.getContact());
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmailId(),
                employeeDto.getLocation(),
                employeeDto.getDomain(),
                employeeDto.getContact());
    }

}

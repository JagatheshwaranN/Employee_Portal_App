package com.learn_everyday.employee_portal.controller;

import com.learn_everyday.employee_portal.dto.EmployeeDto;
import com.learn_everyday.employee_portal.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") long employeeId) {
        EmployeeDto foundEmployee = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(foundEmployee, HttpStatus.OK);
    }

}

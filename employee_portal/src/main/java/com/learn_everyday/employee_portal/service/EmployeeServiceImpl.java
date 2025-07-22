package com.learn_everyday.employee_portal.service;

import com.learn_everyday.employee_portal.dto.EmployeeDto;
import com.learn_everyday.employee_portal.entity.Employee;
import com.learn_everyday.employee_portal.exception.ResourceNotFoundException;
import com.learn_everyday.employee_portal.mapper.EmployeeMapper;
import com.learn_everyday.employee_portal.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee createEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(createEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Employee not exists with given id: %d", employeeId )));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

}

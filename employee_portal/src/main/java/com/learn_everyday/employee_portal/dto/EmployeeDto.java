package com.learn_everyday.employee_portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {

    private long id;

    private String firstName;

    private String lastName;

    private String emailId;

    private String location;

    private String domain;

    private String contact;

}

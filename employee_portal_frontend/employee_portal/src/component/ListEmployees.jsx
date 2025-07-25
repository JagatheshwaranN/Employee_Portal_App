import React, {useEffect, useState} from 'react'
import { listEmployees } from '../service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployees = () => {

  const[employees, setEmployees] = useState([])
  const navigator = useNavigate();
  

  useEffect(()=> {
    listEmployees().then((response) => {
      setEmployees(response.data)
    }).catch(error => {
      console.log(error);
    })
  }, [])

  function addEmployee() {
    navigator('/addEmployee');
  }

    const tempData = [
        {
  "id": 101,
  "firstName": "Alice",
  "lastName": "Johnson",
  "emailId": "alice.johnson@example.com",
  "location": "New York",
  "domain": "Finance",
  "contact": "123-456-7890"
}, {
  "id": 102,
  "firstName": "Bob",
  "lastName": "Smith",
  "emailId": "bob.smith@example.com",
  "location": "San Francisco",
  "domain": "Technology",
  "contact": "987-654-3210"
}
]
  return (
    <div className='container'>
      <h2>List of Employees</h2> 
      <button className='btn btn-primary mb-2' onClick={addEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Location</th>
            <th>Domain</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => 
               <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>{employee.location}</td>
                <td>{employee.domain}</td>
                <td>{employee.contact}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployees
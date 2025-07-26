import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployees = () => {

  const[employees, setEmployees] = useState([])
  const navigator = useNavigate();
  

  useEffect(()=> {
    getAllEmployees();
  }, [])

  function getAllEmployees() {
    listEmployees().then((response) => {
      setEmployees(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  function addEmployee() {
    navigator('/addEmployee');
  }

  function updateEmployee(id) {
    navigator(`/updateEmployee/${id}`)
  }

  function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id).then((response) => {
      getAllEmployees();
    }).catch(error => {
      console.error(error);
    })
  }
    
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
            <th>Action</th>
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
                <td>
                  <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                  <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}
                    style={{marginLeft: '10px'}}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployees
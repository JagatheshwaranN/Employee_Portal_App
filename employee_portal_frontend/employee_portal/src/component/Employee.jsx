import React, {useState} from 'react'
import { addEmployee } from '../service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const Employee = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [location, setLocation] = useState('')
    const [domain, setDomain] = useState('')
    const [contact, setContact] = useState('')

    const navigator = useNavigate();

    function saveEmployee(event) {
        event.preventDefault();
        const employee = {firstName, lastName, emailId, location, domain, contact};
        console.log(employee);
        addEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })        
    }

  return (
    <div>
        <div className='container'>
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input type='text'
                                placeholder='Enter your First Name'
                                name='firstName'
                                value={firstName}
                                className='form-control'
                                onChange={(event) => setFirstName(event.target.value)}>
                                     
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input type='text'
                                placeholder='Enter your Last Name'
                                name='lastName'
                                value={lastName}
                                className='form-control'
                                onChange={(event) => setLastName(event.target.value)}>
                                     
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input type='text'
                                placeholder='Enter your Email Id'
                                name='emailId'
                                value={emailId}
                                className='form-control'
                                onChange={(event) => setEmailId(event.target.value)}>
                                     
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Location:</label>
                                <input type='text'
                                placeholder='Enter your Location'
                                name='location'
                                value={location}
                                className='form-control'
                                onChange={(event) => setLocation(event.target.value)}>
                                     
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Domain:</label>
                                <input type='text'
                                placeholder='Enter your Domain'
                                name='domain'
                                value={domain}
                                className='form-control'
                                onChange={(event) => setDomain(event.target.value)}>
                                     
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Contact:</label>
                                <input type='text'
                                placeholder='Enter your Contact'
                                name='contact'
                                value={contact}
                                className='form-control'
                                onChange={(event) => setContact(event.target.value)}>
                                     
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employee
import React, {useEffect, useState} from 'react'
import { addEmployee, getEmployee, updateEmployee } from '../service/EmployeeService'
import { useNavigate, useParams} from 'react-router-dom'

const Employee = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [location, setLocation] = useState('')
    const [domain, setDomain] = useState('')
    const [contact, setContact] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        emailId:'',
        location:'',
        domain:'',
        contact:''
    })

    const navigator = useNavigate();

    useEffect( () => {
        if(id) {
        getEmployee(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmailId(response.data.emailId);
            setLocation(response.data.location);
            setDomain(response.data.domain);
            setContact(response.data.contact);
        }).catch(error => {
            console.log(error); 
        }) 
        }
    }, [id])

    function saveOrUpdateEmployee(event) {
        event.preventDefault();
        if(validateForm()){
        const employee = {firstName, lastName, emailId, location, domain, contact};
        console.log(employee);
        if(id) {
            updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigator('/employees')
            }).catch(error => {
                console.error(error);
            })
        } else{
        addEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        }).catch(error => {
                console.error(error);
        })
        }   
     }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = {... errors};
        if(firstName.trim()) {
            errorsCopy.firstName = ''
        } else {
            errorsCopy.firstName = 'First Name is required.';
            valid = false;
        }
        if(lastName.trim()) {
            errorsCopy.lastName = ''
        } else {
            errorsCopy.lastName = 'Last Name is required.';
            valid = false;
        }
        if(emailId.trim()) {
            errorsCopy.emailId = ''
        } else {
            errorsCopy.emailId = 'Email Id is required.';
            valid = false;
        }
        if(location.trim()) {
            errorsCopy.location = ''
        } else {
            errorsCopy.location = 'Location is required.';
            valid = false;
        }
        if(domain.trim()) {
            errorsCopy.domain = ''
        } else {
            errorsCopy.domain = 'Domain is required.';
            valid = false;
        }
        if(contact.trim()) {
            errorsCopy.contact = ''
        } else {
            errorsCopy.contact = 'Contact is required.';
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if(id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div>
        <div className='container'>
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input type='text'
                                placeholder='Enter your First Name'
                                name='firstName'
                                value={firstName}
                                className= {`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                onChange={(event) => setFirstName(event.target.value)}>
                                </input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input type='text'
                                placeholder='Enter your Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(event) => setLastName(event.target.value)}>
                                </input>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input type='text'
                                placeholder='Enter your Email Id'
                                name='emailId'
                                value={emailId}
                                className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                                onChange={(event) => setEmailId(event.target.value)}>
                                </input>
                                {errors.emailId && <div className='invalid-feedback'>{errors.emailId}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Location:</label>
                                <input type='text'
                                placeholder='Enter your Location'
                                name='location'
                                value={location}
                                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                                onChange={(event) => setLocation(event.target.value)}>
                                </input>
                                {errors.location && <div className='invalid-feedback'>{errors.location}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Domain:</label>
                                <input type='text'
                                placeholder='Enter your Domain'
                                name='domain'
                                value={domain}
                                className={`form-control ${errors.domain ? 'is-invalid' : ''}`}
                                onChange={(event) => setDomain(event.target.value)}>
                                </input>
                                {errors.domain && <div className='invalid-feedback'>{errors.domain}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Contact:</label>
                                <input type='text'
                                placeholder='Enter your Contact'
                                name='contact'
                                value={contact}
                                className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                                onChange={(event) => setContact(event.target.value)}>
                                </input>
                                {errors.contact && <div className='invalid-feedback'>{errors.contact}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employee
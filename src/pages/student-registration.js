import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export default function StudentRegistration() {

    const history = useHistory();

    const [startDate, setStartDate] = useState(new Date());
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        mobile: '',
        birthMarks: ''
    });

    const [firstNameErrorMessage, setfirstNameErrorMessage] = useState('');
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
    const [dobErrorMessage, setDobErrorMessage] = useState('');
    const [mobileErrorMessage, setMobileErrorMessage] = useState('');

    const onChange = (e, d) => {
        let element = e.target ? e.target : d;
        if (element.value) {
            setStudent({ ...student, [element.name]: element.value });
        }
    };

    const validateFirstName = () => {
        let pattern = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
        if (!student.firstName)
            setfirstNameErrorMessage("FirstName is required");
        else if (!pattern.test(student.firstName))
            setfirstNameErrorMessage("Only alphabet allowed");
        else {
            setfirstNameErrorMessage('');
            return true;
        }
        return false;
    };

    const validateLastName = () => {
        let pattern = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
        if (!student.lastName)
            setLastNameErrorMessage("LastName is required");
        else if (!pattern.test(student.lastName))
            setLastNameErrorMessage("Only alphabet allowed");
        else {
            setLastNameErrorMessage('');
            return true;
        }
        return false;
    };

    const validateDateOfBirth = () => {
        let age = moment().diff(student.dob, 'years');
        console.log(age);
        if (!student.dob)
            setDobErrorMessage("Date of birth is required");
        else if(age<5) {
            setDobErrorMessage("Student should be atleast 5 years");
        }
        else{
            setDobErrorMessage("");
            return true;
        }
        return false;
    };

    const validateMobile = () => {
        let pattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        if (!student.mobile)
            setMobileErrorMessage("Mobile number is required");
        else if(!pattern.test(student.mobile)){
            setMobileErrorMessage("Should be a valid mobile number");
        }
        else {
            setMobileErrorMessage("");
            return true;
        }
        return false;
    };

    const validate = () => {
        let isValid = validateFirstName()
            && validateLastName()
            && validateDateOfBirth()
            && validateMobile();
        return isValid;
    };

    const onRegister = () => {
        if (validate()) {
            console.log(student);
            let students = JSON.parse(localStorage.getItem('students')) || [];
            students.push(student);
            localStorage.setItem('students', JSON.stringify(students));
            history.push("/dashboard");
        }
    };

    return (
        <div className="container registration-form">
            <Form>
                <fieldset>
                    <span>Fields marked with</span> <span className="red-color">*</span><span> are mandotory</span>
                    <br />
                </fieldset>
                <br />
                <Form.Group as={Row} className="mb-3" controlId="firstName">
                    <Form.Label column sm={2}>
                        First Name <span className="red-color">*</span>
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="firstName" type="text" placeholder="Firstname" onChange={onChange} maxLength="50" />
                        <span className="red-color">{firstNameErrorMessage ? firstNameErrorMessage : ""}</span>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="lastName" maxLength="50">
                    <Form.Label column sm={2}>
                        LastName<span className="red-color">*</span>
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="lastName" type="text" placeholder="LastName" onChange={onChange} maxLength="50" />
                        <span className="red-color">{lastNameErrorMessage ? lastNameErrorMessage : ""}</span>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="dateOfBirth">
                    <Form.Label column sm={2}>
                        Date of Birth<span className="red-color">*</span>
                    </Form.Label>
                    <Col sm={10}>
                        <Datepicker name="dob" className="form-control" selected={student.dob} onChange={(date) => setStudent({ ...student, "dob": date })} />
                        <span className="red-color">{dobErrorMessage ? dobErrorMessage : ""}</span>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="mobile" >
                    <Form.Label column sm={2}>
                        Mobile<span className="red-color">*</span>
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="mobile" type="text" placeholder="123-456-7890" onChange={onChange} maxLength="10" />
                        <span className="red-color">{mobileErrorMessage ? mobileErrorMessage : ""}</span>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Birth Marks
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="birthMarks" type="text" placeholder="a mole on the cheek" onChange={onChange} maxLength="100" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 12, offset: 5 }}>
                        <Button type="button" onClick={onRegister}>Register</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

import React from 'react'
import { Button, Table } from 'react-bootstrap';
import StudentRow from '../components/studentlistitem.component';

function StudentList(props) {
    return props.students.map((student, index) => (<StudentRow ix={index} key={index} student={student}></StudentRow>));
}

export default function StudentsPage() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1>List of Registered Students</h1>
            <br></br>
            <div>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <StudentList students={students}></StudentList>
                    </tbody>
                </Table>
            </div>
        </div>
    )
};
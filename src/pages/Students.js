import React from 'react';
import {Student} from '../components/Student';
import {Link} from "react-router-dom";
import '../style/Students.css';
import '../style/Label.css';
import '../store/StudentsRepo';


export const Students = () => {

    var students;
    var unirest = require('unirest');
    var req = unirest('GET', 'http://localhost:8080/students')
        .send("")
        .end(function (res) {
            if (res.error) throw new Error(res.error);
            students = res.raw_body;
        });

    const htmlStudents = [];

    console.log(students);
    for (let i = 0; i < students; i++) {
        htmlStudents.push(
            <div>
                <Link to={'/student/' + students[i].id} className="list-group-item list-group-item-action">
                    <Student student={students[i]}/>
                </Link>
            </div>);
    }

    return (
        <div className="list-group list-group-students ">
            <ul>
                {htmlStudents}
            </ul>
        </div>
    );
}


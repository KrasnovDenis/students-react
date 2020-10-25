import React from 'react';
import {Student} from '../components/Student';
import {Link} from "react-router-dom";
import '../style/Students.css';
import '../style/Label.css';
import '../store/StudentsRepo';
import {students} from "../store/StudentsRepo";
import {groups} from "../store/groupsRepo";
import {Group} from "../components/Group";
import {getAllStudents, removeUserById} from "../store/StudentController";

export const Students = () => {

    const students = getAllStudents();
    const htmlStudents = [];

    for (let i = 0; i < students.length; i++) {
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


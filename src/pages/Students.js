import React from 'react';
import {Student} from '../components/Student';
import {Link} from "react-router-dom";
import '../style/Students.css';
import '../style/Label.css';
import '../store/userRepo';
import {student} from "../store/userRepo";

export const Students = () => {
    return (

        <div className="list-group list-group-students">
            <Link to={`/user/1`} className="list-group-item list-group-item-action">
                <Student student={student[0]}/>
            </Link>

            <Link to={`/user/2`} className="list-group-item list-group-item-action">
                <Student student={student[1]}/>
            </Link>
        </div>
    );
}


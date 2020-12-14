import React from "react";
import '../style/Label.css';
import '../style/Student.css';
import {Link} from "react-router-dom";
import GroupsRepo from "../store/GroupsRepo";

export function StudentFromGroup(props) {

    return (
        props.group.users.map(
                user =>
        <div className=' list-group-item'>
        <div className='row'>
            <div className='col-lg-10 student-item'>
                <Link to={`/students/${user.key}`}>
                    {user.name}
                </Link>
            </div>

            <div className='col-lg-1'>
                <button type="button"
                        onClick={() => GroupsRepo.deleteStudentFromGroup(props.group.key, user.key)}
                        className="btn btn-danger">
                    Отчислить
                </button>
            </div>

        </div>
    </div>
        ) )

}

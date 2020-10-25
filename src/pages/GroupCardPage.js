import React from "react";
import '../style/Label.css';
import '../style/Student.css';
import '../style/CardPage.css';
import {deleteStudentFromGroup, getGroupById} from "../store/GroupController";
import {Link} from "react-router-dom";


export function GroupCardPage() {
    const group = getGroup();
    let htmlStudents = [];

    for (let i = 0; i < group.students.length; i++) {
        htmlStudents.push(
            <div className='row'>
                <div className='col-lg-8'>
                    <Link to={"/student/" + group.students[i].id} className="list-group-item">{group.students[i].name}

                    </Link>
                </div>
                <div className='col-sm-1'>
                    <button type="button" onClick={deleteStudentFromGroup(group.id, group.students[i].id)}
                            className="btn btn-danger close-button ">
                        Отчислить
                    </button>
                </div>
            </div>
        );

    }

    console.log(group);
    return (
        <div className="container">
            <div className="row">
                <div className="area col-lg-1"/>
                <div className="area col-lg-9">

                    <div className="panel panel-default label-template">
                        <div className="panel-heading">
                            Название {group.name}
                        </div>
                        <div className="panel-body">
                            Направление - {group.direction}
                        </div>
                        <div className="panel-body">
                            курс - {group.level}
                        </div>
                        <br/>
                        <ul className="list-group">
                            Список студентов
                            <br/>
                            <br/>
                            {htmlStudents}
                        </ul>
                    </div>
                </div>
                <div className=" area col-lg-1"/>
            </div>
        </div>
    );
}


function getGroup() {
    const url = window.location.pathname;
    const groupId = parseInt(url.substring(url.lastIndexOf('/') + 1));

    return getGroupById(groupId);
}
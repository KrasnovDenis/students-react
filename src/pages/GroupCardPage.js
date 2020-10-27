import React from "react";
import '../style/Label.css';
import '../style/Student.css';
import '../style/CardPage.css';
import {deleteStudentFromGroup, getGroupById, putStudent} from "../store/GroupController";
import {Link} from "react-router-dom";
import {StudentEntity} from '../entities/StudentEntity';

export function GroupCardPage() {
    const group = getGroup();
    let htmlStudents = [];

    for (let i = 0; i < group.students.length; i++) {
        htmlStudents.push(
            <div className=' list-group-item'>
                <div className='row'>
                    <div className='col-lg-10 student-item'>
                        <Link to={"/student/" + group.students[i].id}>
                            {group.students[i].name}
                        </Link>
                    </div>

                    <div className='col-lg-1'>
                        <button type="button"
                                onClick={() => deleteStudentFromGroup(group.id, group.students[i].id)}
                                className="btn btn-danger">
                            Отчислить
                        </button>
                    </div>

                </div>
            </div>
        );

    }

    return (
        <div className="container">
            <div className="row">
                <div className="area col-lg-1"/>
                <div className="area col-lg-9">

                    <div className="panel panel-default label-template">
                        <div className="panel-heading">
                            <h2> {group.name}</h2>
                        </div>
                        <div className="panel-body">
                            <h5> {group.direction}</h5>
                        </div>
                        <div className="panel-body">
                            курс - {group.level}
                        </div>
                        <br/>

                        <div>
                            <button type="button"
                                    className="btn btn-dark close-button "
                                    onClick={() => putStudent(new StudentEntity("петя",  "Пинф31","очно","3.2", "нет"))}>
                                Зачислить
                            </button>
                        </div>
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

import React from "react";
import '../style/Label.css';
import '../style/Student.css';
import '../style/CardPage.css';
import {students} from "../store/StudentsRepo";
import {getStudentById, removeUserById} from "../store/StudentController";

export function StudentCardPage() {
    let student = getStudent();

    return (

        <div className='container'>

            <div className="area card">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {student.name}
                        </h5>
                        <p className="card-text">{student.group} </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> Тип обучения - {student.educationTiming}</li>
                        <li className="list-group-item">Средний балл - {student.averageGrade}</li>
                        <li className="list-group-item">Долги по учебе  - {student.doubt}</li>
                    </ul>
                <button type="button" onClick={removeUserById(student.id)}
                        className="btn btn-danger">
                    Отчислить
                </button>
            </div>
        </div>
    );
}

function getStudent() {
    const url = window.location.pathname;
    const studentId =  parseInt(url.substring(url.lastIndexOf('/') + 1));

    return getStudentById(studentId);
}

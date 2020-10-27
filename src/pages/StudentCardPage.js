import React from "react";
import '../style/Label.css';
import '../style/Student.css';
import '../style/CardPage.css';
import {getStudentById, removeUserById} from "../store/StudentController";


export function StudentCardPage() {
    let student = getStudent();

    return (

        <div className='container'>

            <div className="area card">
                <div className='row'>
                    <div className='col-lg-5'>
                        <img className="rounded-circle " height='250' width='250' src={require('../store/img/ava.jpg')}
                             alt="Card cap"/>

                    </div>
                    <div className="card-body col-lg-5">
                        <h2 className="card-title">
                            {student.name}
                        </h2>
                        <h3 className="card-text">{student.group} </h3>
                    </div>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> Тип обучения - {student.educationTiming}</li>
                    <li className="list-group-item">Средний балл - {student.averageGrade}</li>
                    <li className="list-group-item">Долги по учебе - {student.doubt}</li>
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
    const studentId = parseInt(url.substring(url.lastIndexOf('/') + 1));

    return getStudentById(studentId);
}

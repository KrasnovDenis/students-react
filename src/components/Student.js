import React from "react";
import '../style/Label.css';
import '../style/Student.css';
import {removeUserById} from "../store/StudentController";

export function Student(props) {
    return (
        <div className="panel panel-default label-template">
            <div className="panel-heading">
                <h2> {props.student.name}</h2>
            </div>
            <div className="panel-body">
                <h5>{props.student.group}</h5>
            </div>
            <div className="panel-body">
                Тип обучения - {props.student.educationTiming}
            </div>
            <div className="panel-body">
                Средний балл - {props.student.averageGrade}
            </div>
            <div className="panel-body">
                Долги по учебе - {props.student.doubt}
            </div>
        </div>
    );
}

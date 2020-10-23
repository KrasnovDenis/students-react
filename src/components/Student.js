import React from "react";
import '../style/Label.css';
import '../style/Student.css';


export function Student(props) {
    return (
        <div className="panel panel-default label-template">
            <div className="panel-heading">
                Группа {props.student.name}
            </div>
            <div className="panel-body">
                Группа - {props.student.group}
            </div>
            <div className="panel-body">
                Тип обучения - {props.student.educationTiming}
            </div>
            <div className="panel-body">
                Средний балл - {props.student.averageGrade}
            </div>
            <div className="panel-body">
                Долги по учебе  - {props.student.doubt}
            </div>


            <button type="button" className="btn btn-danger close-button ">
                Remove
            </button>
        </div>
    );
}

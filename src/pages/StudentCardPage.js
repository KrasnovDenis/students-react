import React from "react";
import '../style/Label.css';
import '../style/Student.css';
import '../style/CardPage.css';
import {student} from "../store/userRepo";

const studentFromJson = loadUserById();

export function StudentCardPage() {
    return (
        <div>
            <div className="area col-lg-10">
                <div>Left</div>
                <div className="panel panel-default label-template">
                    <div className="panel-heading">
                        Группа {studentFromJson.name}
                    </div>
                    <div className="panel-body">
                        Группа - {studentFromJson.group}
                    </div>
                    <div className="panel-body">
                        Тип обучения - {studentFromJson.educationTiming}
                    </div>
                    <div className="panel-body">
                        Средний балл - {studentFromJson.averageGrade}
                    </div>
                    <div className="panel-body">
                        Долги по учебе  - {studentFromJson.doubt}
                    </div>
                </div>
            </div>
            <div className="info col-lg-10">
                <div>Right</div>
            </div>
        </div>
    );
}

function getUserId() {
    const url = window.location.pathname;
    return url.substring(url.lastIndexOf('/') + 1);
}
function loadUserById(){
    const userId = getUserId();
    return student[userId];
}
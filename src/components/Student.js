import React from "react";
import '../style/Label.css';
import '../style/Student.css';

export function Student(props) {
    return (
        <div>
            <div className='row'>
                <div className="col-lg-9 order-1 panel panel-default label-template">
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
                <div className="col-lg-0 order-2 ">
                    <img className="rounded-circle " height='130' width='130' src={require('../store/img/ava.jpg')}
                         alt="Card cap"/>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import {Group} from '../components/Group';
import {Link} from "react-router-dom";
import '../style/Groups.css';
import '../style/Label.css';

const group = {
    name: "бПИНФ-41",
    level: 4,
    direction: "Прикладная информатика в информационной сфере",
    students: [
        {
            name: "Денис Олегович Краснов",
            averageGrade: 3.3,
            educationTiming: "Очно",
            doubt: false,
            group: "бПИНФ-41"
        },
        {
            name: "Барынин Егор Игоревич",
            averageGrade: 2.4,
            educationTiming: "Очно",
            doubt: true,
            group: "бПИНФ-41"
        },
        {
            name: "Олег",
            averageGrade: 4,
            educationTiming: "Очно",
            doubt: true,
            group: "бПИНФ-41"
        }
    ]
}

export const Groups = () => {
    return (
        <div className="list-group list-group-students ">
            <Link className="list-group-item list-group-item-action" >
                <Group group={group}/>
            </Link>
            <Link  className="list-group-item list-group-item-action">
                <Group group={group}/>
            </Link>
        </div>
    );
}
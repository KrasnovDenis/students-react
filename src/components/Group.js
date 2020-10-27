import React from "react";
import '../style/Label.css';
import {removeGroupById} from "../store/GroupController";

export function Group(props) {
    return (
        <div className="panel panel-default label-template group-label">
            <div className="panel-heading">
                <a href={'/group/'+props.group.id}>
                    {props.group.name}
                </a>
            </div>
            <div className="panel-body">
                Направление - {props.group.direction}
            </div>
            <div className="panel-body">
                Курс - {props.group.level}
            </div>
            <button type="button" onClick={removeGroupById(props.group.id)} className="btn btn-danger close-button ">
                Расформировать
            </button>
        </div>
    );
}
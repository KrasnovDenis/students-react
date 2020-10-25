import React from "react";
import '../style/Label.css';
import {removeGroupById} from "../store/GroupController";
import {Link} from "react-router-dom";

export function Group(props) {
    return (
        <div className="panel panel-default label-template group-label">
            <div className="panel-heading">
                <Link to={'/group/'+props.group.id}>
                    {props.group.name}
                </Link>
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
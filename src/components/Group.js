import React from "react";
import '../style/Label.css';
import GroupsRepo from "../store/GroupsRepo";
import {Link} from "react-router-dom";

export function Group(props) {
    return (
        <div className="panel panel-default label-template group-label">
            <div className="panel-heading">
                <Link to={`/groups/${props.group.key}`}>
                    {props.group.name}
                </Link>
            </div>
            <div className="panel-body">
                Направление - {props.group.direction}
            </div>
            <div className="panel-body">
                Курс - {props.group.courseLevel}
            </div>
            <button type="button" onClick={GroupsRepo.removeGroup(props.group.id)} className="btn btn-danger close-button ">
                Расформировать
            </button>
        </div>
    );
}
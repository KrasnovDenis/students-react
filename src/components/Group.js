import React from "react";
import '../style/Label.css';

export function Group(props) {
    return (
        <div className="panel panel-default label-template group-label">
            <div className="panel-heading">Name of Group {props.group.name} </div>
            <div className="panel-body">
                Group info - {props.group.direction}
            </div>
            <div className="panel-body">
                Group level - {props.group.level}
            </div>
            <button type="button" className="btn btn-danger close-button ">
                Remove
            </button>
        </div>
    );
}
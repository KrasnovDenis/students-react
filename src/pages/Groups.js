import React from 'react';
import {Group} from '../components/Group';
import '../style/Groups.css';
import '../style/Label.css';
import {getAllGroups} from "../store/GroupController";


export function Groups() {
    let groups = getAllGroups();
    let htmlGroup = [];
    for (let i = 0; i < groups.length; i++) {
        htmlGroup.push(
            <li  className="list-group-item list-group-item-action">
                <Group group={groups[i]}/>
            </li>);
    }

    return (
        <div className="list-group list-group-students container ">
            <ul>
                {htmlGroup}
            </ul>
        </div>
    );
}
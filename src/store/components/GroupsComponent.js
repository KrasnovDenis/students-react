import React from 'react';
import {Group} from '../../components/Group';
import '../../style/Groups.css';
import '../../style/Label.css';
import GroupsRepo from "../GroupsRepo";


class GroupsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: []
        }
    }

    componentDidMount() {
        GroupsRepo.getAllGroups().then((response) => {
            this.setState({groups: response.data})
        });
    }


    render() {
        return (
            <div className="list-group list-group-students container ">
                <ul>{
                    this.state.groups.map(
                        group =>
                            <li className="list-group-item list-group-item-action">
                                <Group group={group}/>
                            </li>
                    )
                }
                </ul>
            </div>
        );

    }

}

export default GroupsComponent;
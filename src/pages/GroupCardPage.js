import React from "react";
import '../style/Label.css';
import '../style/Student.css';
import '../style/CardPage.css';
import {Link} from "react-router-dom";
import GroupsRepo from "../store/GroupsRepo";
import {StudentFromGroup} from "../entities/StudentFromGroup";

class GroupCardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            group: [],
            students: [],
        }


    }

    componentDidMount() {
        const url = window.location.pathname;
        const groupId = url.substr(url.lastIndexOf('/') + 1);
        GroupsRepo.getGroupById(groupId).then((response) => {
            this.setState({group: response.data})
        });
        GroupsRepo.getGroupById(groupId).then((response) => {
            this.setState({students: response.data.users})
        });

    }


    render() {


        if (this.state.group.users === undefined || this.state.group.users === []) {
            return <div>Загрузка</div>
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="area col-lg-1"/>
                    <div className="area col-lg-9">

                        <div className="panel panel-default label-template">
                            <div className="panel-heading">
                                <h2> {this.state.group.name}</h2>
                            </div>
                            <div className="panel-body">
                                <h5> {this.state.group.direction}</h5>
                            </div>
                            <div className="panel-body">
                                курс - {this.state.group.courseLevel}
                            </div>
                            <br/>

                            <div>
                                <Link to="/add-student-to-group">
                                    <button type="button"
                                            className="btn btn-dark close-button ">
                                        Зачислить
                                    </button>
                                </Link>
                            </div>
                            <ul className="list-group">
                                Список студентов
                                <br/>
                                <br/>
                                {
                                    <StudentFromGroup group={this.state.group}/>
                                }

                            </ul>
                        </div>
                    </div>
                    <div className=" area col-lg-1"/>
                </div>
            </div>


        );
    }
}

export default GroupCardPage;

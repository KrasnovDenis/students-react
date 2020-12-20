import React from "react";
import {Link} from "react-router-dom";
import StudentsRepo from "../store/StudentsRepo";
import GroupsRepo from "../store/GroupsRepo";

export const DEFAULT_GROUP_ID = "0bd01274-8a22-40bd-8131-a5b37a2be82f";

class AddStudentModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            studentNames: [],
            groupsNames : [],
            studentsIncome: [],
            groupsIncome: []
        }
    }

    componentDidMount() {
        GroupsRepo.getAllGroups().then((response) => {
            let groupList = [];
            response.data.forEach( function (group)
            {
                groupList.push(group);
            });
            this.setState({groupsIncome:groupList })

        });

        StudentsRepo.getAllStudents().then((response) => {
            let studentList = [];
            response.data.forEach( function (student)
            {
                studentList.push(student);
            });
            this.setState({studentsIncome:studentList })
        });

    }

    onChooseGroup = (event) => {
        this.setState({groupsNames: event.target.value});
    }

    onChooseStudent = (event) => {
        this.setState({studentNames:  [...this.state.studentNames, event.target.value]});
    }

    onSubmit = (event) =>{
        event.preventDefault();
        let studentIds = [... new Set(this.state.studentNames)] ;
        let groupId = this.state.groupsNames;
        for(let i = 0 ; i < studentIds.length; i++ ){
            GroupsRepo.addStudentToGroup(groupId,studentIds[i]);

        }
    }



    render() {
        return (
            <div className="content-main ">
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="GroupToAdd">Выберите группу для добавления</label>
                            <select onChange={this.onChooseGroup} className="form-control" id="GroupToAdd">
                                {
                                    this.state.groupsIncome.map(
                                        group =>
                                            <option id={group.key} value={group.key}>{group.name}</option>
                                    )
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="studentsToAdd">Выберите студентов для добавления</label>
                            <select multiple onChange={this.onChooseStudent} className="form-control" id="studentsToAdd">
                                {
                                    this.state.studentsIncome.map(
                                        student =>
                                            <option id={student.key} value={student.key}>{student.name}</option>
                                    )
                                }
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary">Добавить</button>
                    </form>
                </div>


                <Link to={"/groups"}>
                    <button type="button" className="btn btn-secondary">К списку групп</button>
                </Link>
            </div>
        )


    }
}

export default AddStudentModal;
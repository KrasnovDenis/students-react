import React from 'react';
import StudentsService from "../service/StudentsService";
import {Student} from "../../components/Student";
import {Link} from "react-router-dom";

class StudentsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        StudentsService.getStudents().then((response) => {
            this.setState({students: response.data})
        });
    }

    render() {
        return (

                <div className="list-group list-group-students ">
                    <Link to={"/create-student"}>
                        <button type="button" style={{ marginLeft: "24%"}} className="btn btn-danger ">
                            Добавить студента
                        </button>
                    </Link>
                    {
                        this.state.students.map(
                            student =>
                                <Link to={'/students/' + student.key}
                                      className="list-group-item list-group-item-action">
                                    <Student student={student}/>
                                </Link>
                        )
                    }
                </div>
        )
    }
}

export default StudentsComponent;
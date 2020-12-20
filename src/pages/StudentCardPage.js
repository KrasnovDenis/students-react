import React, {Fragment} from 'react'
import '../style/Label.css';
import '../style/Student.css';
import '../style/CardPage.css';
import StudentsRepo from "../store/StudentsRepo";
import ModalWindow from '../components/ModalWindow';
import UpdateStudentModal from "../components/UpdateStudentModal";

class StudentCardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: [],
            showModal: false
        }
    }

    componentDidMount() {
        const url = window.location.pathname;
        const studentId = url.substr(url.lastIndexOf('/') + 1);
        StudentsRepo.getStudentById(studentId).then((response) => {
            this.setState({student: response.data})
        });
    }

    handleModal = () => {
        this.setState({showModal: !this.state.showModal});
    }

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }

    updateHandler = (event) => {
        StudentsRepo.updateStudent(this.state.student);
    }

    render() {
        let student = this.state.student;
        return (


            <div className='container'>

                <div className="area card">
                    <div className='row'>
                        <div className='col-lg-5'>
                            <img className="rounded-circle " height='250' width='250'
                                 src={require('../store/img/ava.jpg')}
                                 alt="Card cap"/>

                        </div>
                        <div className="card-body col-lg-5">
                            <h2 className="card-title">
                                {student.name}

                            </h2>
                            <h3 className="card-text">{student.group} </h3>
                        </div>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> Тип обучения - {student.timing}

                        </li>
                        <li className="list-group-item">Средний балл - {student.averageGrade}

                        </li>
                        <li className="list-group-item">Долги по учебе - {student.doubt}

                        </li>
                    </ul>


                    <Fragment>
                        {
                            student.key !== undefined && <ModalWindow id={student.key}/>
                        }
                    </Fragment>
                    <Fragment>
                        {
                            <UpdateStudentModal student={student}/>
                        }
                    </Fragment>
                </div>
            </div>
        );
    }
}

export default StudentCardPage;

import React, {Component} from 'react';
import {Button, Form, FormGroup, Modal, ModalBody, ModalHeader, Label, Input} from "reactstrap";
import StudentsRepo from "../store/StudentsRepo";

class UpdateStudentModal extends Component {
    state = {
        modal: false,
        id: "",
        name:"",
        doubt: "",
        timing: "",
        averageGrade:0
    }

    componentWillReceiveProps(nextProps) {
        this.setState({id: nextProps.student.key})
        this.setState({name: nextProps.student.name})
        this.setState({doubt: nextProps.student.doubt})
        this.setState({timing: nextProps.student.timing})
        this.setState({averageGrade: nextProps.student.averageGrade})
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }


    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }


    onSubmit = (e) => {
        e.preventDefault();
        const student ={
            key: this.state.id,
            name:this.state.name,
            doubt: this.state.doubt,
            timing: this.state.timing,
            averageGrade:this.state.averageGrade
        }
        console.log(student)
        StudentsRepo.updateStudent(student);

        window.location.href = "/students/"
    }


    render() {

        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Редактировать
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Выберите параметры для редактирования
                        <ModalBody>
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label style={{marginTop: '2rem'}} for="name">Имя</Label>
                                    <Input
                                        type="text"
                                        name="name"

                                        defaultValue={this.props.student.name}
                                        onChange={this.onChange}>

                                    </Input>

                                    <Label style={{marginTop: '2rem'}} for="averageGrade">Оценка</Label>
                                    <Input
                                        type="text"
                                        name="averageGrade"

                                        defaultValue={this.props.student.averageGrade}
                                        onChange={this.onChange}
                                    >

                                    </Input>

                                    <Label style={{marginTop: '2rem'}} for="timing">Тип обучения</Label>
                                    <Input
                                        type="text"
                                        name="timing"

                                        defaultValue={this.props.student.timing}
                                        onChange={this.onChange}
                                    >

                                    </Input>

                                    <Label style={{marginTop: '2rem'}} for="doubt">Долги по учебе</Label>
                                    <Input
                                        type="text"
                                        name="doubt"
                                        defaultValue={this.props.student.doubt}
                                        onChange={this.onChange}
                                    >

                                    </Input>

                                    <Button
                                        color="dark"
                                        style={{marginTop: '2rem'}}
                                        block
                                    >
                                        Обновить
                                    </Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default UpdateStudentModal;
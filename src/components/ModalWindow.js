import React, {Component} from 'react';
import {Button, Form, FormGroup, Modal, ModalBody, ModalHeader} from "reactstrap";
import StudentsRepo from "../store/StudentsRepo";


class ModalWindow extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }


    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value});

    }

    onSubmit = (e) => {
        e.preventDefault();
        StudentsRepo.removeStudent(this.props.id);
        window.location.href="/students/"
    }

    render(){
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom:'2rem'}}
                    onClick={this.toggle}>
                    Выгнать на мороз
                </Button>
                <Modal
                    isOpen ={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Точно отчислить?
                        <ModalBody>
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Button
                                        isOpen ={this.state.modal}
                                        toggle={this.toggle}
                                    block
                                    >Отчислить</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default ModalWindow;
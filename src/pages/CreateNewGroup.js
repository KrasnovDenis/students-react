import React from "react";
import GroupsRepo from "../store/GroupsRepo";
import {Link} from "react-router-dom";

class CreateNewGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            direction : '',
            courseLevel : ''
        }
    }


    mySubmitHandler = () => {
       GroupsRepo.createGroup(
            this.state.name,
            this.state.direction,
            this.state.courseLevel)
           .then(r =>alert(`Группа ${this.state.name} добавлена`) )
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value});
    }

    onChangeDirection = (event) => {
        this.setState({direction: event.target.value});
    }

    onChangeCourseLevel = (event) => {
        this.setState({courseLevel: event.target.value});
    }



    render() {
        return (
            <div className="content-main ">
                <form onSubmit={this.mySubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Название группы</label>
                        <input type="text" onChange={this.onChangeName} className="form-control" id="name"
                               placeholder="Б2-ПИНФ"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="direction">Направление</label>
                        <input type="text" onChange={this.onChangeDirection} className="form-control" id="direction"
                               placeholder="Прикладная информатика"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="courseLevel">Курс</label>
                        <select onChange={this.onChangeCourseLevel} className="form-control" id="courseLevel">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Добавить</button>
                    <Link to={"/groups"}>
                        <button type="button" className="btn btn-secondary">К списку групп</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default CreateNewGroup;
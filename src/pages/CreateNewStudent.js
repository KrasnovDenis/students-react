import React from "react";
import StudentsRepo from "../store/StudentsRepo";
import {Link} from "react-router-dom";

class CreateNewStudent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Мужик',
            timing: 'Очно',
            averageGrade: 0,
            doubt: 'Долгов не имеет',

        }
    }

    mySubmitHandler = () => {
        StudentsRepo.createStudent(
            this.state.name,
            this.state.timing,
            this.state.averageGrade,
            this.state.doubt);
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value});
    }

    onChangeTiming = (event) => {
        this.setState({timing: event.target.value});
    }

    onChangeAverageGrade = (event) => {
        this.setState({averageGrade: event.target.value});
    }

    onChangeDoubt = (event) => {
        this.setState({doubt: event.target.value});
    }


    render() {
        return (
            <div className="content-main ">
                <form onSubmit={this.mySubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Фамиилия Имя Отчество</label>
                        <input type="text" onChange={this.onChangeName} className="form-control" id="name"
                               placeholder="Василий"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="averageGrade">Введите среднюю оценку</label>
                        <input onChange={this.onChangeAverageGrade} type="number" pattern="[+-]?([0-9]*[.])?[0-9]+" className="form-control"
                               id="averageGrade"
                             />
                    </div>

                    <div className="form-group">
                        <label htmlFor="timingType">Выберите тип обучения</label>
                        <select onChange={this.onChangeTiming} className="form-control" id="timingType">
                            <option>Очно</option>
                            <option>Очно-заочно</option>
                            <option>Ин. план</option>
                            <option>Дистанционно</option>
                            <option>Свободное посещение произвольных занятий</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="doubtArea">Впишите долг студента</label>
                        <textarea onChange={this.onChangeDoubt} className="form-control" id="doubtArea" rows="3"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Добавить</button>
                    <Link to={"/students"}>
                        <button type="button" className="btn btn-secondary">К списку студентов</button>
                    </Link>
                </form>
            </div>
        )
    }

}

export default CreateNewStudent;
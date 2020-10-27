import {students} from "./StudentsRepo";

export function getAllStudents(){
    return students;
}
export function getStudentById(id) {
    for(let i = 0; i < students.length; i++){
        if(students[i].id === id){
            return students[i];
        }
    }

    return undefined;
}

export function removeUserById(id) {

}

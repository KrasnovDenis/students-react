import {groups} from './groupsRepo';

export function putStudent(student) {

}

export function removeGroupById(id){
    for(let i = 0; i < groups.entities.length; i++){
        if(groups.entities[i].id === id){
            groups.entities.splice(i,1);
        }
    }
}

export function getGroupById(id) {
    for(let i = 0; i < groups.entities.length; i++){
        if(groups.entities[i].id === id){
            return groups.entities[i];
        }
    }

    return undefined;
}

export function getStudentsByGroupId(id){
    const group = getGroupById(id);
    return group.students;
}

export function deduct(id) {
    alert("Вы уверены ?");
}
export function deductAll() {
    alert("Всех не отчислят!");
}

export function deleteStudentFromGroup(groupId, studentId) {
    for(let i = 0; i < groups.entities.length; i++){
        if(groups.entities[i].id === groupId){
            for(let j = 0; j < groups.entities[i].students.length; j++){
                if(groups.entities[i].students[j].id === studentId){
                    groups.entities[i].students.splice(j,1);
                    alert("Уволен!");
                }

            }
        }
    }
}

export function getAllGroups(){
    return groups.entities;
}


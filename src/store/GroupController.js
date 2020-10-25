import {groups} from './groupsRepo';

export function putStudent(Student) {

}

export function removeGroupById(id){
    console.log("BANG!");
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
    var group = getGroupById(id);
    return group.students;
}


export function deleteStudentFromGroup(groupId, studentId) {

}

export function getAllGroups(){
    return groups.entities;
}


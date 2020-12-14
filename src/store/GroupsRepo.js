

import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/groups';

class GroupsRepo {

    getGroupById(groupId) {
        return axios.get(`${USERS_REST_API_URL}/${groupId}`);
    }


    getAllGroups() {
        return axios.get(USERS_REST_API_URL);
    }

    addStudentToGroup(groupId, studentId) {
        return axios.put(`USERS_REST_API_URL/${groupId}&${studentId}`)
    }


    deleteStudentFromGroup(groupId, studentId) {
        return axios.delete(`USERS_REST_API_URL/${groupId}&${studentId}`)
    }

    removeGroup(id) {
        return axios.delete(`USERS_REST_API_URL/${id}`)
    }
}

export default new GroupsRepo();



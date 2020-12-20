import axios from 'axios'

const GROUPS_REST_API_URL = 'http://localhost:8080/groups';

class GroupsRepo {

    getGroupById(groupId) {
        return axios.get(`${GROUPS_REST_API_URL}/${groupId}`);
    }


    getAllGroups() {
        return axios.get(GROUPS_REST_API_URL);
    }

    addStudentToGroup(groupId, studentId) {
        return axios.put(`${GROUPS_REST_API_URL}/${groupId}&${studentId}`)
    }


    deleteStudentFromGroup(groupId, studentId) {
        return axios.delete(`${GROUPS_REST_API_URL}/${groupId}&${studentId}`)
    }

    removeGroup(id) {
        return axios.delete(`${GROUPS_REST_API_URL}/${id}`)
    }

    createGroup(name, direction, courseLevel){
        return axios.post(GROUPS_REST_API_URL, {
            name : name,
            direction : direction,
            courseLevel : courseLevel
        });
    }
}

export default new GroupsRepo();



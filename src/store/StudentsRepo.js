import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/students';

class StudentsRepo {

    getStudents() {
        return axios.get(USERS_REST_API_URL);
    }

    getStudentById(studentId) {
        return axios.get(`${USERS_REST_API_URL}/${studentId}`);
    }

    getAllStudents() {
        return axios.get(USERS_REST_API_URL);
    }


    removeStudent(studentId) {
        return axios.delete(`${USERS_REST_API_URL}/${studentId}`);
    }

    updateStudent(student) {
        return axios.post(`USERS_REST_API_URL`, {
            body: student
        });
    }
}

export default new StudentsRepo();
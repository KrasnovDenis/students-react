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
        return axios.post(USERS_REST_API_URL, {

                key : student.key,
                name:student.name,
                doubt: student.doubt,
                timing: student.timing,
                averageGrade:student.averageGrade

        });
    }

    createStudent(name, timing, averageGrade,  doubt) {
        return axios.post(USERS_REST_API_URL, {
            name : name,
            averageGrade : averageGrade,
            timing : timing,
            doubt : doubt
        });
    }
}

export default new StudentsRepo();
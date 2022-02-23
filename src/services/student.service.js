import api from './api';

class StudentService {
    getStudents = () => {
        return api.get('/secured/students');
    }

    addStudent = (data) => {
        return api.post('/secured/students', data);
    }

    updateStudent = (id, score) => {
        return api.put(`/secured/students/${id}`, {
            score
        });
    }

    deleteStudent = (id) => {
        return api.delete(`/secured/students/${id}`);
    }
}

export default new StudentService();
const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('');
const CreateNewStudent = (data) => axios.post('/api/student',data); 

const GetAllStudents=()=>axios.get('/api/student');
export default {
  GetAllGrades,
  CreateNewStudent,
  GetAllStudents,
};

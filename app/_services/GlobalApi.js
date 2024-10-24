const { default: axios } = require("axios");


const CreateNewStudent = (data) => axios.post('/api/student',data); 

export default {
  CreateNewStudent
};

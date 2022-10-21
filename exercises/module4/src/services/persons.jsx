import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const createOne = (person) => {
  return axios.post(baseUrl, person).then(response => response.data);
};

export default {
  createOne
};


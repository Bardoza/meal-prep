import axios from "axios";

const url =
  "https://04ttj1tsdc.execute-api.us-east-2.amazonaws.com/prod/ingredients";

export const save = ingredient => {
  return axios
    .post(url, ingredient)
    .then(response => console.log({ response }) || response.data)
    .catch(error => console.log(error));
};

export const load = () => {
  return axios
    .get(url)
    .then(response => response.data)
    .then(data => data.Items);
};

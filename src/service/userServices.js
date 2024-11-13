import axios from "./customizeAxios";

const fetchAllUser = (page) => {
    return  axios.get(`/api/users?page=${page}`);
}

const postCreateUser = (name, job) => {
    return axios.post("/api/users", {name, job});
}

const updateUser = (name, job) => {
    return axios.patch("/api/users", {name, job});
}

const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}` );
}
export {fetchAllUser, postCreateUser, updateUser, deleteUser};
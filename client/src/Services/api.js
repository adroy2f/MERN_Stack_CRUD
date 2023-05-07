import axios from 'axios';

// const url = 'http://localhost:3000';
//const url = 'http://localhost:8080';
const url ='https://adroy2f-fluffy-invention-qjgg4p99g9pc94p4-8080.preview.app.github.dev/contact';

// export const getUsers = async (id) => {
//     id = id || '';
//     return await axios.get(`${url}/${id}`);
// }

export const createContact = async (contactObj) => {
    try{
        console.log(`${url}/add`, contactObj);
    return await axios.post(`${url}/add`, contactObj);
    }catch(error){console.log("error occured while creting contact", error.message, error)}
}

// export const deleteUser = async (id) => {
//     return await axios.delete(`${url}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${url}/${id}`, user)
// }
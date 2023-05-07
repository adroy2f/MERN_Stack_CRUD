import axios from 'axios';

// const url = 'http://localhost:3000';
//const url = 'http://localhost:8080';
const url ='https://adroy2f-fluffy-invention-qjgg4p99g9pc94p4-8080.preview.app.github.dev';

export const getContacts = async (id) => {
    //id = id || '';
    try{
        //return await axios.get(`${url}/${id}/all`);
    return await axios.get(`${url}/all`);
    }catch(error){console.log("error occured while fetching contacts", error.message, error)}
}

export const createContact = async (contactObj) => {
    try{
        console.log(`${url}/add`, contactObj);
    return await axios.post(`${url}/add`, contactObj);
    }catch(error){console.log("error occured while creting contact", error.message, error)}
}

export const deleteContact = async (id) => { 
    try{
        return await axios.delete(`${url}/${id}`);
    }catch(error){console.log("error occured while deleting contact", error.message, error)}
}

export const editContact = async (id, user) => {
    try{
        return await axios.put(`${url}/${id}`, user);
    }catch(error){console.log("error occured while updating contacts", error.message, error)}
}

export const getContactById = async (id) => {
    try{
        return await axios.get(`${url}/${id}`);
    }catch(error){console.log("error occured while fetching contact", error.message, error)}
}
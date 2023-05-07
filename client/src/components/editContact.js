import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getContactById, editContact } from '../Services/api';

const initialValue = {
    name: '',
    phone: '',
    address: '' 
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditContact = () => {
    const [contact, setContact] = useState(initialValue);
    const { name, phone, address } = contact;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadContactDetails();
    }, []);

    const loadContactDetails = async() => {
        const response = await getContactById(id);
        setContact(response.data);
    }

    const editContactDetails = async() => {
        // eslint-disable-next-line 
        const response = await editContact(id, contact);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setContact({...contact, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={address} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editContactDetails()}>Edit User</Button>
            </FormControl>
        </Container>
        
    )
}

export default EditContact;
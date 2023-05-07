import React , { useState }from 'react';
import { FormGroup, FormControl, InputLabel, Input, Typography , styled, Button} from '@mui/material';

import { createContact } from '../Services/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    Name: '',
    Phone_No: '',
    Address: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25% ;
    & > div {
        margin-top: 20px;
    
`;

const AddContact = () => {
     const [user, setUser] = useState(initialValue);
     const { Name, Phone_No, Address } = user;
    
     let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

     const addContactDetails = async() => {
         await createContact(user);
        navigate('/all');
     }

    return (
        <Container>
            <Typography variant="h4">Excited to add new Contact</Typography>
            <FormControl>
                <InputLabel htmlFor="Name">Name</InputLabel>  
                <Input onChange={(e) => onValueChange(e)} name='Name' value={Name} id="Name-Nick" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="Phone-No">Phone No</InputLabel>   
                <Input onChange={(e) => onValueChange(e)} name='Phone_No' value={Phone_No} id="Phone_No" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="Address">Address</InputLabel>   
                <Input onChange={(e) => onValueChange(e)} name='Address' value={Address} id="Address" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addContactDetails()}>Add </Button>
            </FormControl>
        </Container>
        
    )
}

export default AddContact;

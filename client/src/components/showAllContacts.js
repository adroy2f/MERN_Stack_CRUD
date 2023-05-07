
import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getContacts, deleteContact } from '../Services/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllContacts = () => {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        getAllContacts();
    }, []);

    const deleteUserData = async (id) => {
        await deleteContact(id);
        getAllContacts();
    }

    const getAllContacts = async () => {
        let response = await getContacts();
        console.log(response)
        // eslint-disable-next-line 
        setContacts(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone No</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {contacts.map((contact) => (
                    <TRow key={contact.id}>
                        <TableCell>{contact.id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{contact.name}</TableCell>
                        <TableCell>{contact.phone}</TableCell>
                        <TableCell>{contact.address}</TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${contact._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(contact._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllContacts;
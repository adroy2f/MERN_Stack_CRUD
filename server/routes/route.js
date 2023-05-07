import express from 'express';
import {  addContact } from '../controller/contactController.js';
//,getContacts, getContactById, editContact, deleteContact
const router = express.Router();

// router.get('/', getContacts);
router.post('/add', addContact);
// router.get('/:id', getContactById);
// router.put('/:id', editContact);
// router.delete('/:id', deleteContact);

export default router;
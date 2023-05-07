import express from 'express';
import {  addContact,getContacts } from '../controller/contactController.js';
//, getContactById, editContact, deleteContact
const router = express.Router();

 router.get('/all', getContacts);
router.post('/add', addContact);
// router.get('/:id', getContactById);
// router.put('/:id', editContact);
// router.delete('/:id', deleteContact);

export default router;
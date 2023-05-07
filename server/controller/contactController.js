import Contact from '../model/contactRecordModel.js';

// Get all contacts
export const getContacts = async (request, response) => {
    try{
        const contacts = await Contact.find();
        response.status(200).json(contacts);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the contact in database
export const addContact = async (request, response) => {
    
    const contact = request.body;

    console.log(contact);
    const newContact = new Contact(contact);
    try{
        await newContact.save();
        response.status(201).json(newContact);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a contact by id
export const getContactById = async (request, response) => {
    try{
        const contact = await Contact.findById(request.params.id);
        response.status(200).json(contact);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited contact in the database
export const editContact = async (request, response) => {
    let contact = request.body;

    const editedContact = new Contact(contact);
    try{
        await Contact.updateOne({_id: request.params.id}, editedContact);
        response.status(201).json(editedContact);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of contact from the database
export const deleteContact = async (request, response) => {
    try{
        await Contact.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
import Contact from '../model/contactRecordModel.js';

// Get all users
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

// // Get a user by id
// export const getContactById = async (request, response) => {
//     try{
//         const user = await User.findById(request.params.id);
//         response.status(200).json(user);
//     }catch( error ){
//         response.status(404).json({ message: error.message })
//     }
// }

// // Save data of edited user in the database
// export const editContact = async (request, response) => {
//     let user = request.body;

//     const editUser = new User(user);
//     try{
//         await User.updateOne({_id: request.params.id}, editUser);
//         response.status(201).json(editUser);
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }

// // deleting data of user from the database
// export const deleteContact = async (request, response) => {
//     try{
//         await User.deleteOne({_id: request.params.id});
//         response.status(201).json("User deleted Successfully");
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }
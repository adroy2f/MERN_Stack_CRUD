import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const contactRecordSchema = mongoose.Schema({
    Name: String,
    Phone_No: Number,
    Address: String
    //email: String
});

autoIncrement.initialize(mongoose.connection);
//contactRecordSchema.plugin(autoIncrement.plugin, "contacts");
// we need to turn it into a model
const Contact = mongoose.model('contacts', contactRecordSchema);

export default Contact;
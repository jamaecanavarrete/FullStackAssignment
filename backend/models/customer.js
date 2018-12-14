const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let customer = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {type: String},
    lastName: {type: String},
    address: {type: String},
    city: {type: String},
    number: {type: String},
    status: {type: String, default: 'Active'}
},
{
    collection: 'customers'
});

module.exports = mongoose.model('customer', customer);
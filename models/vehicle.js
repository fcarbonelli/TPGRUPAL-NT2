const mongoose = require('mongoose');
const validator = require('validator');

const beautifyUnique = require('mongoose-beautiful-unique-validation');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    brand: {
        type: String, 
        required: true,  
        trim: true, 
        lowercase: true,
        validate(value) { 
            if(validator.isEmpty(value)) { 
                throw new Error('Please enter a brand');
            }
        }
    },
    model: {
        type: String,
        minLenght: [2, 'Model must be at least 2 characters long'],
        maxLength: [20, 'Model must be less than 20 characters long'],
        trim: true,
        lowercase: true,
        required: true,
        validate(value) { 
            if(validator.isEmpty(value)) { 
                throw new Error('Please enter a model');
            }
        } 
    },
    year: {
        type: Number,
        min: [1990, 'Year must be greater than 1990'],
        max: [new Date().getFullYear(), `Year must be less than current year`],
        required: true,      
    },
    kilometers: {
        type: Number,
        min: [0, 'Km must be greater or equals to 0'],
        required: true,      
    },
    color: {
        type: String,
        trim: true, 
        lowercase: true,
        required: false,             
    },
    doors: {
        type: Number,
        enum: {
            values: [2,3,4,5,6],
            message: '{VALUE} is not supported',
        },
        required: false,
    },
    description: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    }    
}, {
    timestamps: true
})

vehicleSchema.plugin(beautifyUnique);

// vehicleSchema.methods.toJSON = function() {
//     const vehicle = this;
//     const vehicleObject = vehicle.toObject();  

//     return vehicleObject;
// }

const Vehicle = mongoose.model('Vehicle', vehicleSchema); 

module.exports = Vehicle;
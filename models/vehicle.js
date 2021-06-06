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
        minLenght: 2,
        maxLength: 10,
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
        baseYear: 1990,
        currentYear: 2021,
        required: true,      
        validate(value) {
              if(value < validator.baseYear || value > validator.currentYear) {
                  throw new Error('The year must be between 1990 and 2021.')
              }
        }
    },
    kilometers: {
        type: Number,
        minKm: 0,
        required: true,      
        validate(value) {
              if(value < validator.minKm) {
                  throw new Error('Km must be above 0')
              }
        }
    },
    color: {
        type: String,
        trim: true, 
        lowercase: true,
        required: false,             
    },
    doors: {
        type: Number,
        enum: [2,3,4,5,6],
        required: false,
        validate(value){
            if (!this.enum.includes(value)) {
                throw new Error('Door count must be between 2 and 6.')
            }
        }
    }       
}, {
    timestamps: true
})

vehicleSchema.plugin(beautifyUnique);

vehicleSchema.methods.toJSON = function() {
    const vehicle = this;
    const vehicleObject = vehicle.toObject();  

    return vehicleObject;
}

const Vehicle = mongoose.model('Vehicle', vehicleSchema); 

module.exports = Vehicle;
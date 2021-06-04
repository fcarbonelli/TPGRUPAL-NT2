const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/**
 * Esta dependencia formatea los errores de MongoDB
 * que estan relacionados al error por unique
 * MongoDB devuelve un error muy feo
 */
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String, // tipo de dato
        required: true, // es requerido?
        trim: true, // le sacamos los epsacios vacios
        validate(value) { // validador custom, recibe el String por parametro (value)
            if(validator.isEmpty(value)) { // si es un string vacio, retornamos error
                throw new Error('Please enter a name');
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        trim: true,
        required: [true, 'Password is required'] // de esta forma podemos poner mensajes personalizados en la respuesta
    },
    email: {
        type: String,
        required: true,
        unique: 'Email already in use ({VALUE})', // el ({VALUE}) toma el String y lo concatena
        lowercase: true,
        validate(value) {
                if(!validator.isEmail(value)) {
                    throw new Error('Email is not valid')
                }
        }
    },
    profileImage: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    tokens: [{
        token: {
            type: String,
            required: true
        } 
    }],
    admin: { // es admin ??
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // ésto agrega los atributos UPDATED y CREATED DATE en el modelo
})

userSchema.plugin(beautifyUnique);

userSchema.methods.toJSON = function() {
    // modelamos la respuesta de los datos del usuario
    const user = this;
    const userObject = user.toObject();  
    // borramos la password para no retornarla
    delete userObject.password;
    delete userObject.tokens;

    return userObject;
}

userSchema.methods.generateToken = async function(){
    // Metodo del usuario que genera el token y se lo guarda en la BD
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({ token: token });
    await user.save();

    return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
    // Metodo validador de credenciales
    const user =  await User.findOne({ email: email });
    if(!user) {
        throw new Error("Wrong credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        throw new Error("Wrong credentials")
    }

    return user;
}

userSchema.pre('save', async function(next) {
    // .pre() toma como parametro una accion
    // en esta caso es save
    // antes de guardar al usuario (por eso PRE), va a hashear la pass
    const user = this;
    
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

const User = mongoose.model('User', userSchema); // crea el modelo User a partir del Schema que modelamos

module.exports = User;
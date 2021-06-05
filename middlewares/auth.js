const jwt = require('jsonwebtoken');
const User = require('../models/user');


const auth = async (req, res, next) => {
    
    try {
        let token = req.header('Authorization'); //tomo el token que viene por el header
        if(!token) {
            // Si no envia el token, no es autorizado
            throw new Error('Unauthorized');
        }
        token = token.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET); //verifico que sea válido
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token }); //luego busco un usuario que coincida con los datos decodificados y el token

        if(!user) {
            throw new Error('Unauthorized');
        }

        req.token = token; //le paso los datos por el req al next
        req.user = user; // de ésta manera obtengo al usuario después de ejecutar el middleware
        next() //El next va acá porque todo sigue OK
    } catch (e) {
        console.log(e.message);
        return res.status(401).send({error: 'Please authenticate'});
    }
    
}

module.exports = auth;
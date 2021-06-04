const User = require('../models/user');

/**
 * Como propuesta, lo ideal sería mejorar el codigo repetido
 * cuando se devuelve una respuesta
 * se podría crear una funcion que modele el objeto de respuesta
 *  de acuerdo a los parametros que se le pasan
 */

const userController = {
    createUser: async (req, res) => {

        // Creo una instancia de User con los datos que vienen por body
        const user = new User(req.body);
        if (!user) {
            // si el user es null, respondo con 400, BAD REQUEST
            return res.status(400).json({ success: false, code: 400, message: 'Error creating User' })
        }
        try {
            //await user.save();
            // genero el token correspondiente al usuario 
            const token = await user.generateToken();
            // respondo con status 201, CREATED
            res.status(201).json({ success: true, message: "User created successfully", user, token });
        } catch (error) {
            // Si hay algun error, retorno 400 
            res.status(400).json({ success: false, code: 400, message: error.message, error: error.errors });
        }
    },
    login: async (req, res) => {

        // el login lo que hace es buscar a un usuario de acuerdo 
        // a los datos que se pasan por body en el req
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password);
            // si existe el usuario, le genero el token
            // lo tengo que devolver en la respuesta
            // para que sea almacenado por el cliente
            // y pueda enviarlo en cada req para que sea autenticado
            const token = await user.generateToken();
            res.status(200).json({ user, token });
        } catch (e) {
            res.status(401).json(e);
        }
    },
    logout: async (req, res) => {
        // El logout lo que hace es buscar el token y eliminarlo
        // luego hace un user.save() para que esa modificación persista en la BD
        // hace el user.save() es importante porque las modificaciones que hacemos
        // las esstamos haciendo en memoria y no tendrían impacto en la BD
        try {
            req.user.tokens = req.user.tokens.filter(token => {
                return token.token !== req.token;
            })
            await req.user.save();
            res.json();
        } catch (e) {
            res.status(500).json();
        }
    },
    logoutAll: async (req, res) => {
        // el logoutAll elimina todos los tokens que tiene el usuario
        // esto hace que cierre sesion de todos los dipositivos
        // donde tenía almacenado temporalmente ese token
        try {
            req.user.tokens = [];
            await req.user.save();
            res.json();
        } catch (e) {
            res.status(500).json();
        }
    },
    getUser: (req, res) => {
        // esto solo devuelve el usuario
        res.json(req.user);
    },
    deleteAuthUser: async (req, res) => {
        // eliminamos el usuario en la BD
        try {
            await req.user.remove()
            res.json(req.user);
        } catch (e) {
            res.status(401).json(e);
        }
    }
}

module.exports = userController
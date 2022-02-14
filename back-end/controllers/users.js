const User = require('../models/Users');

require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signIn = (req, res, next) => {
    (async () => {
        try {
            const salt = await bcrypt.genSalt(10);
            const password = req.body.password
            const hash = await bcrypt.hash(password, salt);
            const user = User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
            });
            res.send(await user);
            console.log(user)
            } catch (error) {
            console.error(error)
        }
    })()
};

exports.logIn = (req, res, next) => {
    (async () => {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email,
                }
            });
            if (user) {
            const valid = await bcrypt.compare(req.body.password, user.password); 
                if (valid) {
                    res.status(200).json({
                        token: jwt.sign(
                            { userId: user.id },
                            'e0114be42b0d8f6fca4497c585ee1057052a5419083a284d53b7e4aa6d5625ca',
                            { expiresIn: '24h' }
                        ),
                        // message: 'Vous êtes connecté'
                    });
                } else {
                    res.status(401).json({ message: 'Mot de passe incorrect' });
                }
            } else {
                res.status(401).json({ message: 'Email incorrect' });
            }
        } catch (err) {
            console.log({message : err})
        }
    })()
};

exports.getOneUser = (req, res, next) => {
    (async () => {
        try {
            const user = await User.findOne({
                where: {
                    id: req.body.userId,
                }
            });
            console.log(user)
            res.status(200).json({user : user}) 
        } catch (err) {
            console.log({ message: err })
        }
    })()
};

exports.logOut = (req, res, next) => {
    (async () => {
        User.findOne({
            where: {
                id: req.body.userId,
            }
        });
        res.status(200).json({
            message: 'Vous êtes déconnecté',
            token: '',
        });
    })()
};

exports.updateUser = (req, res, next) => {
    (async () => {
        try {
            const salt = await bcrypt.genSalt(10);
            const password = req.body.password
            const hash = await bcrypt.hash(password, salt);
            const update = await User.update(
                {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash
                },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            );
            res.send('update success')
            console.log(update)
            } catch (error) {
            console.error(error)
        }
    })()
};

exports.deleteUser = (req, res, next) => {
    (async () => {
        try {
            const user = await User.destroy({
                where: {
                    id: req.params.id,
                }
            });
            res.send('delete success')
            console.log(user)
            } catch (error) {
            console.error(error)
        }
    })()
};

const router = require('express').Router();
var User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const role = req.body.role;

    const newUser = new User({
        username,
        password,
        email,
        role
    });

    newUser.save()
        .then(() => res.json('Usuario creado!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User eliminado!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
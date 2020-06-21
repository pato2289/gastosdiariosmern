const router = require('express').Router();
let Gasto = require('../models/gasto.model');

router.route('/').get((req, res) => {
        const filterUser = req.headers.username
        Gasto.find({username: filterUser})
        .then(gastos => res.json(gastos))
        .catch(err => res.status(400).json('Error: ', err));
});


router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const importe = Number(req.body.importe);
    const fecha = Date.parse(req.body.fecha);

    const newGasto = new Gasto({
        username,
        description,
        importe,
        fecha,
    });

    newGasto.save()
        .then(() => res.json('Gasto Saved!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Gasto.findById(req.params.id)
        .then(gasto => res.json(gasto))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Gasto.findByIdAndDelete(req.params.id)
        .then(() => res.json('Gasto eliminado!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Gasto.findById(req.params.id)
        .then(gasto => {
            gasto.username = req.body.username;
            gasto.description = req.body.description;
            gasto.importe = Number(req.body.importe);
            gasto.fecha = Date.parse(req.body.fecha);

            gasto.save()
                .then(() => res.json('Gasto actualizado!'))
                .catch(err => res.status(400).json('Error: ' + err));
        });
});

module.exports = router;
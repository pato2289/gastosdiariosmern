const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gastoSchema = new Schema({
    username: {type: String, require: true},
    description: {type: String, require: true},
    importe: {type: Number, require: true},
    fecha: {type: Date, require: true},
}, {
    timestamps: true,
});

const Gasto = mongoose.model('Gasto', gastoSchema);

module.exports = Gasto;
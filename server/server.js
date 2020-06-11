const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDb conectada correctamente');
});

const gastosRouter = require('./routes/gastos');
const usersRouter = require('./routes/users');

app.use('/gastos', gastosRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server corriendo en el puerto: ${port}`);
})
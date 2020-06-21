const express = require('express');
const session = require('express-session')
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'ESTO ES SECRETO',
    // por cada llamada, la info de la sesion se guarda en la BD haya cambios o no
    resave: true,
    // guarda en la bd el objeto vacio sin informacion
    saveUninitialized: true

}))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDb conectada correctamente');
});

const gastosRouter = require('./routes/gastos');
const usersRouter = require('./routes/users');
const Auth = require('./routes/auth');

const AuthToken = require('./middlewares/AuthToken');

app.use(AuthToken);

app.use('/gastos', gastosRouter);
app.use('/users', usersRouter);
app.use('/auth', Auth);

app.listen(port, () => {
    console.log(`Server corriendo en el puerto: ${port}`);
})
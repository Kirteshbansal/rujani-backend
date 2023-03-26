const express = require("express");
const mongoose = require('mongoose');
const app = express();

const appConfig = require('../config/appConfig.js')
const routes = require('../routes/routes');

/* App level Config */
const { app: { port }, db: { databaseURL } } = appConfig;


/* MongoDB setup*/
mongoose.connect(databaseURL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
});

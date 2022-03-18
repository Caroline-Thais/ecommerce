const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();

//Conexão com o banco de dados Mongo
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB connected'))
    .catch(error => console.log(error));

app.use('/api/user', userRoute);


//Porta
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
});
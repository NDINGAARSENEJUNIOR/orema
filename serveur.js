const express = require('express');
const app = express();
const port = process.env.PORT;
const router=require('./routes/usersA.routes');




//middlewares
app.use('/api', router);

//Ecouter le port
app.use(express.json())
app.listen(port, () => {
    console.log(`Le serveur tourne au port ${1500}`);
})
const express = require('express');
const app = express();
const port = process.env.PORT;
const router=require('./routes/usersA.routes');

// récupération du client prisma
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient

// Créer un utilisateur
// prisma.user.create({
//     data: {
//         email : 'coco@gmail.com',
//         password: 'shikamaru'
//     }
// }).then(console.log)

// retrouver toutes les données et l'afficher en console
// prisma.user.findMany({
//     where: {email: {startsWith: "f"}}
// }).then(console.log)
// prisma.user.findUnique({
//     where: {email:'bob@gmail.com'}
// }).then(console.log)

prisma.user.update({
    where: {email: "fifi@gmail.com"},
    data: {password: '0000'}
}).then(console.log)


//middlewares
app.use('/api', router);

//Ecouter le port
app.use(express.json())
app.listen(port, () => {
    console.log(`Le serveur tourne au port ${1500}`);
})





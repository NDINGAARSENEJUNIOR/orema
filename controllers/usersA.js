
const {PrismaClient} = require('@prisma/client')
const prisma = ('../prismaConfig/prisma')
const usersA_get=(req, res) =>{
    res.status(200).send('Hello word')
}

const usersA_post=(req, res) =>{
    res.status(200).send('Post réussi')
}

const usersA_put=(req, res) =>{
    res.status(200).send('Put réussi')
}

const usersA_delete=(req, res) =>{
    res.status(200).send('Delete réussi')
}

module.exports={
    usersA_get,
    usersA_post,
    usersA_put,
    usersA_delete
}


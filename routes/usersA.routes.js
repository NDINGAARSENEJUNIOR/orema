const express=require('express');
const router = express.Router();
const{usersA_get, usersA_post, usersA_put, usersA_delete} =require('../controllers/usersA')


//creation des routes

router.get('/', usersA_get)

router.post('/', usersA_post)

router.put('/', usersA_put)

router.delete('/', usersA_delete)

module.exports=router;
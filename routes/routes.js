const express = require("express");

const router = express.Router();
const {createTodo }= require('../controller/createTodo');
const {getTodos , getTodo} = require('../controller/getTodos');
const {updateTodos} = require('../controller/updateTodos');
const {deleteTodos} = require('../controller/deleteTodos');

router.post('/createTodo',createTodo); //create
router.get('/getTodos',getTodos); //read
router.get('/getTodo/:id',getTodo); //read one todo
router.put('/updateTodo/:id',updateTodos); //update
router.delete('/deleteTodo/:id',deleteTodos); //delete

module.exports = router;
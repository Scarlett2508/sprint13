const routes = require('express').Router();

const { getUser, createUser, getUsers } = require('../controllers/users');


routes.get('/users/:id', getUser);
routes.get('/users', createUser);
routes.post('/users', getUsers);

module.exports = routes;

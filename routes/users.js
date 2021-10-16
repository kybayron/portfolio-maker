const express = require('express');

const { getUsers, createUser, getUser, deleteUser, updateUser } = require('../controllers/users.js');
const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:uuid', getUser);

router.delete('/:uuid', deleteUser);

router.patch('/:uuid', updateUser);

module.exports = router;
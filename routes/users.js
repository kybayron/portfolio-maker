const express = require('express');

const { getUsers, createUser, getUser, deleteUser, updateUser } = require('../controllers/users.js');
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:googleId', getUser);
router.delete('/:googleId', deleteUser);
router.patch('/:googleId', updateUser);

module.exports = router;
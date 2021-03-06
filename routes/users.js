const express = require('express');

const { getUsers, createUser, getUser, deleteUser, updateUser, sendError } = require('../controllers/users.js');
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:googleId', getUser);
router.delete('/:googleId', deleteUser);
router.patch('/:googleId', updateUser);
router.post('/:googleId', sendError);
router.delete('/',sendError);
router.patch('/', sendError);
router.put('/', sendError);
router.put('/:googleId', sendError);
module.exports = router;
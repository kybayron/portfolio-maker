const express = require('express');
const {getPortfolio, createPortfolio, deletePortfolio, updatePortfolio, getError} = require('../controllers/portfolio.js');

const router = express.Router();

router.get('/:googleId',getPortfolio);
router.post('/', createPortfolio);
router.delete('/:googleId', deletePortfolio);
router.patch('/:googleId', updatePortfolio);
router.get('/', getError);
module.exports = router;
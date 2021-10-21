const express = require('express');
const {getPortfolio, createPortfolio, deletePortfolio, updatePortfolio, sendError} = require('../controllers/portfolio.js');

const router = express.Router();

router.get('/:googleId',getPortfolio);
router.post('/', createPortfolio);
router.delete('/:googleId', deletePortfolio);
router.patch('/:googleId', updatePortfolio);
router.get('/', sendError);
router.delete('/',sendError);
router.patch('/',sendError);
router.put('/', sendError);
router.put('/:googleId', sendError);
router.post('/:googleId', sendError);

module.exports = router;
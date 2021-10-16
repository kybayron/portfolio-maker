const express = require('express');
const {getPortfolio, createPortfolio, deletePortfolio, updatePortfolio} = require('../controllers/portfolio.js');

const router = express.Router();

router.get('/:uuid',getPortfolio);
router.post('/', createPortfolio);
router.delete('/:uuid', deletePortfolio);
router.patch('/:uuid', updatePortfolio);
module.exports = router;
const express = require('express');
const { body, validationResult } = require('express-validator');
const controller = require('../controllers/talentController');

const router = express.Router();

// POST /api/talents
router.post('/',
  [
    body('name').trim().notEmpty().withMessage('Name required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('skills').optional().isArray().withMessage('Skills must be an array'),
    body('experience').optional().isNumeric().withMessage('Experience must be numeric')
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    controller.createTalent(req, res, next);
  }
);

// GET /api/talents?skill=React
router.get('/', controller.getTalents);

module.exports = router;

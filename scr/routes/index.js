const { Router } = require('express');
const router = Router();

// create endpoint
router.get('/create', (req, res) => {
    res.json('jajaja');
});

module.exports = router; // Enables routing of routes
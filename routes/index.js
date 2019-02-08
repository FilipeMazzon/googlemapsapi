const express = require('express'),
    router = express.Router();


const MapControllers = require('../controllers/MapControllers');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendfile('./views/index.html');
});
router.post('/distance', (req, res) => {
    MapControllers.calculate(req,res);
});

module.exports = router;

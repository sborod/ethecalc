const express = require('express');
var fs = require('fs');

const router = express.Router();

router.get('/SimpleCalculator.sol', function(req, res, next) {
    fs.readFile('./public/SimpleCalculator.sol', (e, data) => {
        if (e) throw e;
        res.setHeader('Content-Type', 'text/html');
        res.send("<code><pre>"+data+"</pre></code>");
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();

const CalculatorActionsCaller = require("../lib/calculator_actions_caller")
const calculator_actions_caller = new CalculatorActionsCaller();

router.get('/:action/:param1/:param2', function(req, res, next) {
    calculator_actions_caller
        .call_action(req.params.action, req.params.param1, req.params.param2)
        .then(function(result){
            res.setHeader('Content-Type', 'application/json');
            res.send({ result });
        })
});

module.exports = router;

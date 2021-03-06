const express = require('express')
const router = express.Router()

// components
const Search = require('../endpoints/search');

router.post('/:term', (req, res, next) => {
    return Search.all(req, res)
            .then((results) => {
                res.send(results);
            })
            .catch(e => next(e));
});

module.exports = router
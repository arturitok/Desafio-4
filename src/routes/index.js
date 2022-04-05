const express = require('express');
const productRouter = require('./productos')
const router= express.Router();

router.get('/hello', (req,res) => {
    res.json({
        msg: "Hello desde el mainrouter"
    })
})

router.use('/productos', productRouter);

module.exports = router;
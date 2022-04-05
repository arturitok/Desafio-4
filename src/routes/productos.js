const express = require('express');
const router= express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

let products = [];

router.get('/', (req,res) => {
    res.json({
        products,
    })
})

router.get('/:id', (req,res) => {

    const id = parseInt(req.params.id)

    const productFound = products.find(e => e.id == id)

   if (productFound) res.json({ productFound})
  
   else res.json({msg: "Not Found"})

})

router.post('/', (req,res) => {
    
    const body = req.body;
    let id;

    if (products.length === 0) id = 1;
    else id = products[products.length - 1].id + 1

    const newProduct = {
        id: id,
        title: body.title,
        price: body.price,
        thumbnail:body.thumbnail
    }

    products.push(newProduct);

    res.json({
        products
    })
})

router.put('/:id', (req,res) => {
    
    const body = req.body;

    let productFound = products.find(e => e.id == id)

   if (productFound) {
    productFound = {
        title: body.title,
        price: body.price,
        thumbnail:body.thumbnail
    }

    res.json({ productFound})
   }
  
   else res.json({msg: "Not found"})
})

router.delete('/:id', (req,res) => {

    const id = parseInt(req.params.id)

    let productFound = products.find(element => element.id == id)

      if (productFound) {
        products = products.filter(
            (product) => product.id != id
          );
         res.json({ products})
      }
      else res.json({msg: "Not found"})
})

module.exports = router
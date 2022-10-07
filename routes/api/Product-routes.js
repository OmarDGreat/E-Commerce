const router = require('express').Router();
const { Product } = require('../../models');

// The `/api/products` endpoint

router.get('/', (req, res) => {
    // find all products
    // be sure to include its associated Category and Tag data
    Product.findAll()
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    Product.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // create a new product
    Product.create({
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    // update a product by its `id` value
    Product.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete a product by its `id` value
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' });
                return;
            }
            res.json(dbProductData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
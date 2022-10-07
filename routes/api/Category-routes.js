const router = require('express').Router();
const { Catergory } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Catergory.findAll()
        .then(dbCatergoryData => res.json(dbCatergoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Catergory.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbCatergoryData => {
            if (!dbCatergoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCatergoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // create a new category
    Catergory.create({
        category_name: req.body.category_name
    })
        .then(dbCatergoryData => res.json(dbCatergoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Catergory.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbCatergoryData => {
            if (!dbCatergoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCatergoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Catergory.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCatergoryData => {
            if (!dbCatergoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCatergoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
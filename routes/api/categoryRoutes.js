const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],

  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(500).json(err));

});
//find category by id
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
  .then((category) => res.json(category))
  .catch((err) => res.status(500).json(err));

});
//create new category
router.post('/', (req, res) => {
  Category.create(req.body)
  .then((category) => res.json(category))
  .catch((err) => res.status(400).json(err));
});
//update category
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((category) => res.json(category))
  .catch((err) => res.status(400).json(err));
  // update a category by its `id` value
});
//delete category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err));
});

module.exports = router;

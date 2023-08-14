const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
  .then((tags) => res.status(200).json(tags))
  .catch((err) => res.status(500).json(err));
});
//find one tag
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
  .then((tags) => res.status(200).json(tags))
  .catch((err) => res.status(500).json(err));
});
//create tag
router.post('/', (req, res) => {
 Tag.create(req.body)
 .then((tag) => res.status(200).json(tag))
 .catch((err) => res.status(500).json(err));
});
//update tag
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tags) => res.status(200).json(tags))
  .catch((err) => res.status(500).json(err));
});
//delete tag
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(500).json(err));
});

module.exports = router;

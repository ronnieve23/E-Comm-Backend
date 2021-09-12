const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
        as: 'product_tags'
      }
    ]
  }).then(dbTag => res.json(dbTag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where:
    {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through: ProductTag,
        as: 'product_tags'
      }
    ]
  }).then(dbTag => {
    if (!dbTag) {
      res.status(404).json({ message: 'THERE ARE NO TAGS FOUND WITH THAT ID' });
      return;
    }
    res.json(dbTag);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((dbTag) => {
      res.status(200).json(dbTag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;

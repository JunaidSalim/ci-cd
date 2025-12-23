var express = require('express');
var router = express.Router();

let activeCarts = [
  {
    cartID: "777",
    cartItems: [
      {
        title: "Fresh Strawberries",
        description: "Assorted sizes, 2 cartons",
        cost: 200,
        imageUrl: "stawberries.jpg"
      },
      {
        title: "Fresh Blackberries",
        description: "Assorted sizes, 2 cartons",
        cost: 295,
        imageUrl: "blackberries.jpg"
      }
    ]
  },
  {
    cartID: "888",
    cartItems: [
      {
        title: "Yummy cookies",
        description: "Flour and chocolate chips",
        cost: 150,
        imageUrl: "cookies.jpg"
      }
    ]
  }
];

/* GET cart by ID */
router.get('/:id', function (req, res, next) {
  let cart = activeCarts.find(cart => cart.cartID === req.params.id);
  if (cart) {
    res.json(cart);
  } else {
    let err = new Error('Cart not found');
    err.status = 404;
    next(err);
  }
});

/* POST create new cart */
router.post('/', function (req, res, next) {
  if (!req.body.cartID) {
    let err = new Error('Cart ID required');
    err.status = 400;
    next(err);
    return;
  }
  
  activeCarts.push(req.body);
  res.status(201).json(req.body);
});

module.exports = router;

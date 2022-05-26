const { Product } = require('../models');

const productData = [
  {
    product_name: 'Ugly Sweater',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Dad lawn shoes',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Seahawks Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Encanto Soundtrack',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Fanny Pack 1000',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
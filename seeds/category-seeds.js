const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Scarfs',
  },
  {
    category_name: 'Lawn Attire',
  },
  {
    category_name: 'Extra awesome stuff',
  },
  {
    category_name: 'Another Category of awesome',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
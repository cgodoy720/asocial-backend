const express = require('express');
const categories = express.Router();
const {
  getAllCategories,
  getCategory,
  createCategory,
  deleteCategory
} = require('../queries/categories');


categories.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const category = await getCategory(id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


categories.get('/', async (_, res) => {
  try {
    const allCategories = await getAllCategories();
    if (allCategories) {
      res.status(200).json(allCategories);
    } else {
      res.status(404).json({ message: 'No categories found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


categories.post('/', async (req, res) => {
  try {
    const category = await createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

categories.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await deleteCategory(id);
    if (deletedCategory) {
      res.status(200).json(deletedCategory);
    } else {
      res.status(404).json({ message: 'No category found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = categories;
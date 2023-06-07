const db = require('../db/dbConfig');

// Getting category by id
const getCategory = async (id) => {
  try {
    const category = await db.one("SELECT * FROM forum_categories WHERE id=$1", id);
    return category;
  } catch (err) {
    throw new Error('Error: Category not found.');
  }
};

// Getting all categories
const getAllCategories = async () => {
  try {
    const allCategories = await db.any("SELECT * FROM forum_categories");
    return allCategories;
  } catch (err) {
    throw new Error('Error: Categories not found.');
  }
};

// Creating category
const createCategory = async (category) => {
  try {
    const newCategory = await db.one("INSERT INTO forum_categories (category_name, isVentingAndSupport, isAccessibility, isVibeCheck, isFamily, isHobbies, isGeneralChat) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [
      category.category_name,
      category.isVentingAndSupport,
      category.isAccessibility,
      category.isVibeCheck,
      category.isFamily,
      category.isHobbies,
      category.isGeneralChat
    ]);
    return newCategory;
  } catch (error) {
    throw new Error('Error: Category creation failed.');
  }
};

// Deleting category
const deleteCategory = async (id) => {
  try {
    const deletedCategory = await db.one("DELETE FROM forum_categories WHERE id=$1 RETURNING *", id);
    return deletedCategory;
  } catch (error) {
    throw new Error('Error: Category deletion failed.');
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  deleteCategory
};
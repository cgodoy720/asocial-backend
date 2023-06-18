const db = require("../db/dbConfig");

const getAllCategories = async () => {
  try {
    const allCategories = await db.any("SELECT * FROM categories");
    return allCategories;
  } catch (error) {
    return error;
  }
};

const getCategory = async (id) => {
  try {
    const oneCategory = await db.one("SELECT * FROM categories WHERE id = $1", id);
    return oneCategory;
  } catch (error) {
    return error;
  }
};

const createCategory = async (category) => {
  try {
    const newCategory = await db.one(
      "INSERT INTO categories (category_name) VALUES($1) RETURNING *",
      [category.name]
    );
    return newCategory;
  } catch (error) {
    return error;
  }
};

const deleteCategory = async (id) => {
  try {
    const deletedCategory = await db.one("DELETE FROM categories WHERE id = $1 RETURNING *", id);
    return deletedCategory;
  } catch (error) {
    return error;
  }
};

const updateCategory = async (id, category) => {
  try {
    const updatedCategory = await db.one(
      "UPDATE categories SET category_name=$1 WHERE id = $2 RETURNING *",
      [category.name, id]
    );
    return updatedCategory;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCategories, getCategory, createCategory, deleteCategory, updateCategory };

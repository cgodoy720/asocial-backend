const db = require('../db/dbConfig');

const getAllLocations = async () => {
  try {
    const query = 'SELECT * FROM locations';
    const locations = await db.any(query);
    return locations;
  } catch (error) {
    throw new Error('Error getting all locations');
  }
};

const getLocationById = async (id) => {
  try {
    const query = 'SELECT * FROM locations WHERE id = $1';
    const location = await db.one(query, id);
    return location;
  } catch (error) {
    throw new Error(`Error getting location with id ${id}`);
  }
};

const getReviewsByLocationId = async (id) => {
  try {
    const query = 'SELECT * FROM reviews WHERE location_id = $1';
    const reviews = await db.any(query, id);
    return reviews;
  } catch (error) {
    throw new Error(`Error getting reviews for location with id ${id}`);
  }
};

const addReviewToLocation = async (id, rating, comment) => {
  try {
    const query =
      'INSERT INTO reviews (location_id, rating, comment) VALUES ($1, $2, $3) RETURNING *';
    const newReview = await db.one(query, [id, rating, comment]);
    return newReview;
  } catch (error) {
    throw new Error('Error adding review: ' + error.message);
  }
};

module.exports = {
  getAllLocations,
  getLocationById,
  getReviewsByLocationId,
  addReviewToLocation,
};
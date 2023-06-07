const express = require('express');
const map = express.Router();
const {
  getAllLocations,
  getLocationById,
  getReviewsByLocationId,
  addReviewToLocation,
} = require('../queries/map');

map.get('/', async (_, res) => {
  try {
    const allLocations = await getAllLocations();
    res.status(200).json(allLocations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

map.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const location = await getLocationById(parseInt(id));
    res.json(location);
  } catch (error) {
    console.error('Error fetching location:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

map.get('/:id/reviews', async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await getReviewsByLocationId(parseInt(id));
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

map.post('/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;

  try {
    const newReview = await addReviewToLocation(parseInt(id), rating, comment);
    res.json(newReview);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = map;
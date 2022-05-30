const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getSingleThought,
    updateSingleThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../conrollers/thoughtController');

// Get, Post 
router.route('/').get(getAllThoughts).post(createThought);
// Get, Put, Delete
router.route('/:id').get(getSingleThought).put(updateSingleThought).delete(deleteThought);
// Post
router.route('/:id/reactions').post(createReaction);
// Delete
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;
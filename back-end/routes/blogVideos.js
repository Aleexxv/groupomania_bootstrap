const express = require('express');
const router = express.Router();

const blogVideosCtrl = require('../controllers/blogVideos');

router.get('/', blogVideosCtrl.getAllBlogVideos);
router.post('/:userId', blogVideosCtrl.getAllBlogVideosForUser);

module.exports = router;
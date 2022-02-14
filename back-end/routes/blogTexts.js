const express = require('express');
const router = express.Router();

const blogTextsCtrl = require('../controllers/blogTexts');

router.post('/', blogTextsCtrl.postBlogTexts);
router.get('/', blogTextsCtrl.getAllBlogTexts);
router.get('/:id', blogTextsCtrl.getOneBlogTexts);
router.put('/update/:id', blogTextsCtrl.updateBlogTexts);
router.delete('/delete/:id', blogTextsCtrl.deleteBlogTexts);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/send/pw', controller.api.sendPw);

router.post('/search/id', controller.search.id);

router.post('/add/board', controller.add.board);
router.post('/add/category', controller.add.category);
router.post('/add/user', controller.add.user);

router.post('/update/view_cnt', controller.update.view_cnt);

router.post('/delete/category', controller.delete.category);

router.post('/modify/category', controller.modify.category);

router.get('/get/category', controller.get.category);

router.post('/get/board', controller.get.board);
router.post('/get/board_cnt', controller.get.board_cnt);
router.post('/get/board_data', controller.get.board_data);

module.exports = router;
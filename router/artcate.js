//文章分类管理路由模块
const express = require('express');
const router = express.Router();
const artcate_handler = require('../router_handler/artcate');
const expressJoi = require('@escook/express-joi');

// 获取文章分类的列表数据
router.get('/cates', artcate_handler.getArticleCates);

// 新增文章分类的路由
const { add_cate_schema } = require('../schema/artcate');
router.post('/addcates', expressJoi(add_cate_schema), artcate_handler.addArticleCates)

// 删除文章分类的路由
const { delete_cate_schema } = require('../schema/artcate');
router.get('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handler.deleteCateById);

// 根据 Id 获取文章分类
const { get_cate_schema } = require('../schema/artcate');
const { route } = require('./user');
router.get('/cates/:id', expressJoi(get_cate_schema), artcate_handler.getArtCateById)

// 更新文章分类的路由
const { update_cate_schema } = require('../schema/artcate');
router.post('/updatecate', expressJoi(update_cate_schema), artcate_handler.updateCateById);




module.exports = router;
const express = require('express');
const router = express.Router();
// 导入验证数据合法性的中间件
const expressJoi = require('@escook/express-joi')

// 导入用户信息的处理函数模块
const userinfo_handler = require('../router_handler/userinfo');

//获取用户信息
router.get('/userinfo', userinfo_handler.getUserInfo)

// 更新用户信息
const { update_userinfo_schema } = require('../schema/user');
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo);

// 重置密码的路由
const { update_password_schema } = require('../schema/user');
const { jwtSecretKey } = require('../config');
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)

// 更新用户头像的路由
const { update_avatar_schema } = require('../schema/user')
router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)


module.exports = router;
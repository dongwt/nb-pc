var express = require('express');
var router = express.Router();

/**
 * 登录
 */
router.get('/login', function(req, res, next) {
  res.render('user/login', {});
});

/**
 * 注册
 */
router.get('/register', function(req, res, next) {
  res.render('user/register', {});
});

/**
 * 忘记密码
 */
router.get('/forget/password', function(req, res, next) {
  res.render('user/forget-password', {});
});

module.exports = router;

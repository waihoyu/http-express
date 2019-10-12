var express = require('express');
var router = express.Router();

// const {getList, getDetail, newBlog, updateBlog, delBlog} = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const {login} = require('../controller/user')
const {get, set} = require('../db/redis');

/* GET users listing. */
router.get('/login', function(req, res, next) {
        // const {username, password} = req.body //req.query;  
        const {username, password} = req.query //req.query;
        const result = login(username, password)
        return result.then(data => {
            // data.username = "zhangsan";
            if (data.username) {
                // res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly;expires=${getCookieExpires()}`)
                req.session.username = data.username;
                req.session.realname = data.realname;
                // req.session.username = "zhangsan";
                // req.session.realname = "张三";
                // set(req.sessionId, req.session);
                res.json(new SuccessModel('登录成功'));
            }
            res.json(new ErrorModel('登录失败'));
        });
});

router.get('/test-session', function(req, res, next) {
    const session = req.session;
    if (session.viewNum == null) {
        session.viewNum = 0;
    }
    session.viewNum++;    
    res.json({
        viewNum: session.viewNum
    });
});

router.get('/test-login', function(req, res, next) {
    if (req.session.username) {
        res.json({
            errno: 0,
            msg: '测试成功'
        });
        return ;
    }
    res.json({
        errno: -1,
        msg: '测试失败'
    });
});
module.exports = router;

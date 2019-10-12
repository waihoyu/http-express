/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-10-12 09:14:15
 *@version: V1.0.5
*/

const {ErrorModel} = require('../model/resModel');
module.exports = (req, res, next)=>{
    if (req.session.username) {
        next();
        return ;
    }
    res.json(
        new ErrorModel('未登录')
    )
}
/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-10-11 23:41:56
 *@version: V1.0.5
*/

const crypto = require('crypto');
const SECRET_KEY = 'wJiol_8776#';
function md5(content) {
    let md5 = crypto.createHash('md5');
    return  md5.update(content).digest('hex');
}

function genPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`;
    return md5(str);
}
module.exports = {
    genPassword
}



const users = require("../db/models/users");
const apps = require("../db/models/apps");
const crypto = require('crypto');
const MD5 = require('../utils/md5.js');
const config = require('../conf/default')
const initController = {
    // 初始化用户信息
    async initAdmin() {
        try {
            let sum = 1;
            const pwd = MD5(config.adminPwd);
            let data = {
                mobile_phone: 'admin',
                password: pwd,
                lv: 99,
                nick_name: '个人收款',
                amount: 1000000000,
                pay_userid:'2088532298830709',
                membership_expired:'9999999999999',
                e_mail: 'xxx@qq.com',
                wechart: 'xxxx',
            };
            // 添加用户
            const admin = await users.getUserById({userid: 1});
            if(!admin)
                await users.addUser(data);
        } catch (err) {
            console.log(err)
            console.error(`initAdmin--${err}`);
        }
    },
    async initApps() {
        const uuidv1 = require('uuid/v1')
        // const appid = uuidv1().substring(24, 36)
        const appid = config.appid;
        console.info(appid);
        const appsecret = MD5(appid + Date.now()).toUpperCase()
        console.info(appsecret, '--');
        try {
            let data = {
                userid: config.userid,
                name: 'renrenpay',
                callback_url: 'http://192.168.1.186:3000/api/deposits/verbCall',
                whitelist: '',
                appid: appid,
                appsecret: appsecret,
                pay_userid: config.pay_userid
            };
            await apps.chkAppExist(data).then(result => {
                if (result.count > 0) {
                    throw {
                        code: 3000
                    }
                }
            })
            await apps.addApplication(data);
        } catch (err) {
            console.log(err);
            console.error(`initApps--${err}`);
        }
    }
}
setTimeout(item => {
    initController.initAdmin();
    initController.initApps();
}, 3000)

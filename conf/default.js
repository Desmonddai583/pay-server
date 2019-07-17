const _ = require('lodash')

let config = {
    domain: "http://6ee2615c.ngrok.io/", // 绑定的域名或者ip 注意，这里必须填写正确否则无法使用支付宝支付，如果是域名使用nginx就不需要填端口，如果是ip请填写端口，如 http://123.123.123.123:3000/
    port: 3000,
    db: {
        host: process.env.host || '127.0.0.1',
        port: process.env.port || 3306,
        db:  process.env.db ||'db_renrenpay',
        dialect: 'mysql',
        user: process.env.username || 'root',
        password:  process.env.password || '123'
    },
    redis: {
        host: '127.0.0.1',
        port: 6379,
    },
    websocket: {
        port: 7234
    },
    appid: process.env.appid || '15c821df1e53',
    adminPwd: process.env.adminpwd  || 'admin',
    userid: '1',
    pay_userid: process.env.pay_userid ||'123'
}

const init = () => {
    if (process.env.NODE_ENV === 'development') {
        const localConfig = {
            db: _.extend(config.db, {
                user: config.user,
                password: db.password
            })
        }
        config = _.extend(config, localConfig)
    }

    if (process.env.NODE_ENV === 'production') {
        const localConfig = {
            db: _.extend(config.db, {
                user: '',
                password: ''
            })
        }
        config = _.extend(config, localConfig)
    }

    return config
}

module.exports = init()

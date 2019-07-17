const nanoid = require('nanoid')
const _ = require('lodash')
const {
    loggerHttp
} = require('../utils/logger.js')
const ErrorCode = require('../utils/errorCode.js')
const returnJson = require('../utils/returnJson.js')
const verifyParams = require('../utils/verifyParams.js')
const orders = require('../db/models/orders.js')

const ordersController={
    getList(){//查询订单列表
        return async (ctx, next)=>{
            try {
                const data = ctx.query
                data.userid = ctx.state.user.id
                data.page = data.page || 1
                data.page_size = data.page_size || 10
    
                await verifyParams(data, 'userid').then(result => {//
                    if (!result) {
                        throw {
                            code: ErrorCode.ERRORCODE_MISSING_PARAMS,
                            message: '或者参数错误'
                        }
                    }
                })
                await orders.getList(data).then(result=>{
                    returnJson.success(ctx, result);
                })
            } catch (err) {
                console.info(`${ctx.url} -- `, err)
                if(err.code) {
                    returnJson.err(ctx, err.code, err.message);
                } else {
                    returnJson.err(ctx, ErrorCode.ERRORCODE_SERVER_INSIDE_ERROR)
                }
            }

            
        }
    },

    getDetail(){//查询订单详情
        return async(ctx,next)=>{
            try {
                const data = ctx.query
                data.userid = ctx.state.user.id
                await verifyParams(data, 'orderid').then(result => {
                    if (!result) {
                        throw {
                            code: ErrorCode.ERRORCODE_MISSING_PARAMS,
                            message: '或者参数错误'
                        }
                    }
                })

                await orders.findOne(data).then(result=>{
                    returnJson.success(ctx, result);
                })
            } catch (err) {
                console.info(`${ctx.url} -- `, err)
                if(err.code) {
                    returnJson.err(ctx, err.code, err.message);
                } else {
                    returnJson.err(ctx, ErrorCode.ERRORCODE_SERVER_INSIDE_ERROR)
                }
            }
        }
    }
}

module.exports = ordersController;
var async = require('async');
var request = require('request');
var crypto = require('crypto');

exports.sendMessage = (params, callback) => {
    async.waterfall([
        fn => {
            var access_token = `access_token=${params.accessToken}`;
            if (params.isSign) {//是否加签
                var timestamp = Math.round(Date.now());
                var timeStr = `${timestamp}\n${params.secret}`.toString('utf-8');
                var sign = crypto.createHmac('sha256', params.secret).update(timeStr).digest().toString("base64");
                access_token = `${access_token}&timestamp=${timestamp}&sign=${sign}`;
            }
            fn(null, access_token);
        },
        (access_token, fn) => {
            request.post({
                json: true,
                url: 'https://oapi.dingtalk.com/robot/send?' + access_token,
                body: {
                    msgtype: 'text',
                    text: {
                        content: params.content
                    },
                    at: {
                        atMobiles: params.atMobiles,
                        isAtAll: params.isAtAll
                    }
                }
            }, fn);
        }
    ], callback);
}

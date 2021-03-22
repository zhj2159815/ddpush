var assert = require('assert');
var dd = require('../index.js');

describe('发送消息', () => {
    it(".DoTest", done => {
        dd.sendMessage({
            accessToken: 'cc8a747656289599240c26ade09bb1aa79d1f820925fa07b6b3f3d3a2b630038',
            secret: 'SECddfd6fef12410b4391ecc1b5799d5b0cbbea2b67c4cf7ab75045b120062129cc',
            isSign: 1,
            content: '测试发送消息',
            atMobiles: ['13459015923'],
            isAtAll: false
        }, done);
    }).timeout(10000);
});


describe('发送消息@所有人', () => {
    it(".DoTest", done => {
        dd.sendMessage({
            accessToken: 'cc8a747656289599240c26ade09bb1aa79d1f820925fa07b6b3f3d3a2b630038',
            secret: 'SECddfd6fef12410b4391ecc1b5799d5b0cbbea2b67c4cf7ab75045b120062129cc',
            isSign: 1,
            content: '测试发送消息',
            atMobiles: [],
            isAtAll: true
        }, done);
    }).timeout(10000);
});
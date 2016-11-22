/**
 * Created by yuting on 2016/11/17.
 */

var Config = {
    business: {
        "query_welfare": "api/business/queryWelfare",
        "login": "api/business/queryWelfare"
    },

    host: '',
    //微信前置
    wechat_host : '',
    get: function (url) {
        if (this.host) {
            return this.host.replace(/\/$/, '') + '/' + url.replace(/^\//, '');
        }
        return url;
    }
};


if (__PROD__) {
    Config.host = 'https://client.tycredit.com/';
}

if (__DEV__) {
    Config.host = 'http://116.228.151.160:52021/';
}

if (__LOCAL__) {
    Config.get = function (url) {
        console.assert(!/^\//.test(url), "请使用相对URL");
        return url + '.json';
    };
}

module.exports = Config;
var _ = require('underscore');
var Sms = require('./sms');

var util = {
    /**
     * 发送短信
     * @param context
     * @param success_callback
     * @returns {Sms}
     * @constructor
     */
    sms: function (context, success_callback) {
        return new Sms(context, success_callback);
    },

    /**
     * 生成一个随机串码
     * @returns {string}
     */
    getUUID: function () {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    },

    /**
     * 从url中获取参数
     * @param name
     * @returns {*}
     */
    getUrlParam: function (name) {
        if(!name) return null;
        var reg = new RegExp("" + name + "=([^&]*)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) return decodeURIComponent(r[1]);
        return null;
    }
};

module.exports = util;
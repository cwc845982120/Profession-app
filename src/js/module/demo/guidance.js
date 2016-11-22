/**
 * Created by yuting on 2016/11/17.
 */
module.exports = function (app) {
    return {
        /**
         * 导入此模块所需要引用的 【service】
         */

        services: {
            testSer: require('./service/testSer')(app)
        },

        /**
         * 导入此模块所需要引用的 【controllers】
         */

        controllers: {
            testCtrl: require('./controller/testCtrl')(app),
            testCtrl2: require('./controller/testCtrl2')(app),
            pageCtrl1: require('./controller/pageCtrl1')(app),
            pageCtrl2: require('./controller/pageCtrl2')(app)
        },

        /**
         * 导入此模块所需要引用的 【templates】
         */

        templates: {
            testTpl: require('html!./template/testTpl.html'),
            testTpl2: require('html!./template/testTpl2.html'),
            page1Tpl: require('html!./template/page1.html'),
            page2Tpl: require('html!./template/page2.html'),
            page3Tpl: require('html!./template/page3.html')
        }
    }
};
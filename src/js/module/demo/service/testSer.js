/**
 * Created by yuting on 2016/11/17.
 */

var Config = require('../../../util/config');

module.exports = function(app){
    app.service('testSer',['baseService',function(bs){
        bs.setReqConfig({
            url: Config.get(Config.business.query_welfare)
        });

        this.fetch = bs.fetch;
    }]);
};

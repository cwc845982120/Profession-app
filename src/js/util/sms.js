/**
 * Created by yuting on 2016/11/21.
 */
var Sms = function (context, success_callback) {
    this.success_callback = success_callback;
    this.context = context;
    this.contextTitle = context.text();
    this.initVar();
};

Sms.prototype.initVar = function () {
    this.maxTime = 60;
    this.startTime = 60;
    this.endTime = 0;
};

Sms.prototype.start = function () {
    if (this.checkEnd()) {
        this.success_callback();
    }
};

Sms.prototype.checkEnd = function () {
    if (this.startTime === this.maxTime) {
        return true;
    }
    return false;
};

Sms.prototype.run = function () {
    var $sms = this.context;
    var _this = this;

    var cal = function cal() {
        if (_this.startTime === _this.endTime - 1) {
            _this.startTime = _this.maxTime;
            $sms.text(_this.contextTitle);
            clearInterval(time);
            return;
        }
        $sms.text(_this.startTime--);
    };

    var time;

    time = setInterval(cal, 1000);
};

module.exports = Sms;
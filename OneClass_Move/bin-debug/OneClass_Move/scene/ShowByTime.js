var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ShowByTime = (function (_super) {
    __extends(ShowByTime, _super);
    function ShowByTime() {
        var _this = _super.call(this) || this;
        _this.clickTime = 0;
        _this.ImgList = [];
        return _this;
    }
    ShowByTime.prototype.onAdd = function () {
        this.clickTime = 0;
        if (!this.back) {
            this.back = this["img_bg"];
        }
        if (this.ImgList && this.ImgList.length > 0) {
            for (var i = 0; i < this.ImgList.length; i++) {
                this.ImgList[i].visible = false;
            }
            this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
        }
    };
    ShowByTime.prototype.setGraphics = function (graphics) {
        this.graphics = graphics;
    };
    // tapback
    ShowByTime.prototype.tapBack = function () {
        if (this.clickTime < this.ImgList.length) {
            this.clickTime++;
            this.dealShow(this.clickTime);
            var obj = new Object();
            obj["index"] = (this.clickTime).toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "show", obj);
        }
        if (this.graphics) {
            this.graphics.clear();
        }
    };
    ShowByTime.prototype.dealShow = function (index) {
        for (var i = 0; i < this.ImgList.length; i++) {
            if (index - 1 === i) {
                this.ImgList[i].visible = true;
            }
            else {
                this.ImgList[i].visible = false;
            }
        }
        // this.ImgList[index - 1].visible = true;
    };
    ShowByTime.prototype.execMessage = function (data) {
        if (true) {
            return;
        }
        if (data["show"]) {
            var index = Number(data["show"]["index"]);
            this.dealShow(index);
            if (this.graphics) {
                this.graphics.clear();
            }
        }
    };
    ShowByTime.prototype.onDestroy = function () {
        this.ImgList = [];
        this.back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapBack, this);
    };
    return ShowByTime;
}(UIObject));
__reflect(ShowByTime.prototype, "ShowByTime");
//# sourceMappingURL=ShowByTime.js.map
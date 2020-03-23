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
/*

    点击图片显示再点击隐藏

* */
var ShowAndHide = (function (_super) {
    __extends(ShowAndHide, _super);
    function ShowAndHide() {
        var _this = _super.call(this) || this;
        _this.ImgList = [];
        return _this;
    }
    ShowAndHide.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        if (this.ImgList.length > 0) {
            for (var i = 0; i < this.ImgList.length; i++) {
                var imgItem = this.ImgList[i];
                imgItem.alpha = 0;
                imgItem.name = i.toString();
                imgItem.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapImg, this);
            }
        }
    };
    ShowAndHide.prototype.tapImg = function (e) {
        var target = e.target;
        // if(target === this.lastTapImg) {
        //     return;
        // }
        this.lastTapImg = target;
        var name = target.name;
        if (!target.alpha) {
            target.alpha = 1;
        }
        else {
            target.alpha = 0;
        }
        var obj = new Object();
        obj["name"] = name;
        obj["alpha"] = target.alpha.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "tapImg", obj);
    };
    // 信令操作
    ShowAndHide.prototype.execMessage = function (data) {
        if (true) {
            return;
        }
        if (data["tapImg"]) {
            var name_1 = Number(data["tapImg"]["name"]);
            var alpha = Number(data["tapImg"]["alpha"]);
            this.ImgList[name_1].alpha = alpha;
        }
    };
    ShowAndHide.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        if (this.ImgList.length > 0) {
            for (var i = 0; i < this.ImgList.length; i++) {
                var imgItem = this.ImgList[i];
                imgItem.alpha = 0;
                // imgItem.name = i.toString();
                imgItem.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapImg, this);
            }
        }
        this.ImgList = [];
    };
    return ShowAndHide;
}(UIObject));
__reflect(ShowAndHide.prototype, "ShowAndHide");
//# sourceMappingURL=ShowAndHide.js.map
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
// 点击对应的group显示对应的图片
var ClickShow = (function (_super) {
    __extends(ClickShow, _super);
    function ClickShow() {
        var _this = _super.call(this) || this;
        _this.ImgList = [];
        _this.GroupList = [];
        return _this;
    }
    /** 每次进入 */
    ClickShow.prototype.onAdd = function () {
        if (this.ImgList && this.GroupList) {
            for (var i = 0; i < this.ImgList.length; i++) {
                this.ImgList[i].visible = false;
            }
            for (var i = 0; i < this.GroupList.length; i++) {
                this.GroupList[i].name = i.toString();
                this.GroupList[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapGroup, this);
            }
        }
    };
    // 点击gorup显示对应的图片
    ClickShow.prototype.tapGroup = function (event) {
        var target = event.target;
        var name = target.name;
        var obj = new Object();
        this.showImgByName(name);
        obj["name"] = name;
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "showImg", obj);
    };
    ClickShow.prototype.showImgByName = function (name) {
        var targetImg = this.ImgList[Number(name)];
        targetImg.visible = true;
    };
    ClickShow.prototype.execMessage = function (data) {
        if (true) {
            return;
        }
        if (data["showImg"]) {
            var name_1 = data["showImg"]["name"];
            this.showImgByName(name_1);
        }
    };
    /** 这里进行移出场景的处理 **/
    ClickShow.prototype.onDestroy = function () {
        for (var i = 0; i < this.GroupList.length; i++) {
            this.GroupList[i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapGroup, this);
        }
        this.GroupList = [];
        this.ImgList = [];
    };
    return ClickShow;
}(UIObject));
__reflect(ClickShow.prototype, "ClickShow");
//# sourceMappingURL=ClickShow.js.map
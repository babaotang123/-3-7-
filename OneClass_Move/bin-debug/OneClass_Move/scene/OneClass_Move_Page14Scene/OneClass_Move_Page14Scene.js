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
var OneClass_Move_Page14Scene = (function (_super) {
    __extends(OneClass_Move_Page14Scene, _super);
    function OneClass_Move_Page14Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "OneClass_Move_Page14Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    OneClass_Move_Page14Scene.prototype.onAdd = function () {
        this.initScene();
        this.initAddEvent();
    };
    /** 这里进行移出场景的处理 **/
    OneClass_Move_Page14Scene.prototype.onDestroy = function () {
        this.resetPos();
        this.removeEvt();
        this.clearImg();
        this.curMoveIndex = -1;
        this.oldX = -1;
        this.oldY = -1;
        this.imgList = [];
        this.rectList = [];
        this.imgPosList = [];
    };
    OneClass_Move_Page14Scene.prototype.execMessage = function (data) {
        if (true) {
            return;
        }
        if (data["onToucMove"]) {
            this.curMoveIndex = data["onToucMove"]["curIndex"];
            this.isMove = data["onToucMove"]["isMove"];
            var x = data["onToucMove"]["tarX"];
            var y = data["onToucMove"]["tarY"];
            if (this.curImg) {
                this.curImg.x = x;
                this.curImg.y = y;
            }
        }
        else if (data["onToucBegin"]) {
            this.curMoveIndex = data["onToucBegin"]["curIndex"];
            this._distance.x = data["onToucBegin"]["_distanceX"];
            this._distance.y = data["onToucBegin"]["_distanceY"];
            this.oldX = data["onToucBegin"]["oldX"];
            this.oldY = data["onToucBegin"]["oldY"];
            var sx = data["onToucBegin"]["stageX"];
            var sy = data["onToucBegin"]["stageY"];
            this.curImg = this.copyImg(sx, sy);
            if (this.curImg) {
                // 设置层级
                this.setCurChildIndex();
            }
        }
        else if (data["onTouchEnd"]) {
            this.cheackHit();
        }
        else if (data["touchCopyImgBeginEvent"]) {
            this.curMoveIndex = data["touchCopyImgBeginEvent"]["curIndex"];
            this._distance.x = data["touchCopyImgBeginEvent"]["_distanceX"];
            this._distance.y = data["touchCopyImgBeginEvent"]["_distanceY"];
            this.oldX = data["touchCopyImgBeginEvent"]["oldX"];
            this.oldY = data["touchCopyImgBeginEvent"]["oldY"];
            if (this.copyImgList[this.curMoveIndex]) {
                this.curImg = this.copyImgList[this.curMoveIndex];
                this.setCurChildIndex();
            }
        }
        else if (data["resetGame"]) {
            this.resetGame();
        }
    };
    OneClass_Move_Page14Scene.prototype.getSiteIndexForGlobalPos = function (xGlobal, yGlobal) {
        var localPos = this.globalToLocal(xGlobal, yGlobal);
        var curX = localPos.x;
        var curY = localPos.y;
        for (var siteIndex in this.rectList) {
            var rectObj = this.rectList[siteIndex];
            if (rectObj) {
                if (rectObj.hitTestPoint(curX, curY)) {
                    return parseInt(siteIndex);
                }
            }
        }
        return -1;
    };
    /** 初始化场景 */
    OneClass_Move_Page14Scene.prototype.initScene = function () {
        this.imgList = [];
        this.rectList = [];
        this.imgPosList = [];
        this.copyImgList = [];
        this._distance = new egret.Point();
        this.curMoveIndex = -1;
        for (var i = 0; i < 2; i++) {
            this.imgList.push(this["img_" + i]);
        }
        this.rectList.push(this.r_1);
        this.initImgPos();
    };
    OneClass_Move_Page14Scene.prototype.initImgPos = function () {
        for (var _i = 0, _a = this.imgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj) {
                this.imgPosList.push(new egret.Point(obj.x, obj.y));
            }
        }
    };
    OneClass_Move_Page14Scene.prototype.initAddEvent = function () {
        for (var _i = 0, _a = this.imgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj) {
                obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchImgBeginEvent, this);
            }
        }
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchImgEndEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveEvent, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onToucBtnReset, this);
    };
    OneClass_Move_Page14Scene.prototype.onToucBtnReset = function (event) {
        this.resetGame();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "resetGame", 1);
    };
    OneClass_Move_Page14Scene.prototype.resetGame = function () {
        egret.Tween.removeAllTweens();
        this.resetPos();
        this.clearImg();
        this.curMoveIndex = -1;
    };
    // 结束
    OneClass_Move_Page14Scene.prototype.touchImgEndEvent = function (event) {
        if (this.curMoveIndex >= 0) {
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "onTouchEnd", 1);
            this.cheackHit();
        }
    };
    // 点击开始
    OneClass_Move_Page14Scene.prototype.touchImgBeginEvent = function (event) {
        var curIndex = this.imgList.indexOf(event.currentTarget);
        if (curIndex >= 0) {
            var img = this.imgList[curIndex];
            this.oldX = img.x;
            this.oldY = img.y;
            this._distance.x = event.stageX - img.x;
            this._distance.y = event.stageY - img.y;
            this.curMoveIndex = curIndex;
            // this.curImg = img;
            this.curImg = this.copyImg(event.stageX, event.stageY);
            this.setCurChildIndex();
            var obj = new Object();
            obj["curIndex"] = this.curMoveIndex;
            obj["_distanceX"] = this._distance.x;
            obj["_distanceY"] = this._distance.y;
            obj["oldX"] = this.oldX;
            obj["oldY"] = this.oldY;
            obj["stageX"] = event.stageX;
            obj["stageY"] = event.stageY;
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "onToucBegin", obj);
        }
    };
    // 移动
    OneClass_Move_Page14Scene.prototype.touchMoveEvent = function (event) {
        if (this.curMoveIndex >= 0) {
            this.curImg.x = event.stageX - this._distance.x;
            this.curImg.y = event.stageY - this._distance.y;
            this.isMove = true;
            var obj = new Object();
            obj["curIndex"] = this.curMoveIndex;
            obj["tarX"] = this.curImg.x;
            obj["tarY"] = this.curImg.y;
            obj["isMove"] = this.isMove;
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "onToucMove", obj);
        }
    };
    OneClass_Move_Page14Scene.prototype.touchCopyImgBeginEvent = function (event) {
        var curIndex = this.copyImgList.indexOf(event.currentTarget);
        if (curIndex >= 0) {
            var img = this.copyImgList[curIndex];
            this.oldX = img.x;
            this.oldY = img.y;
            this._distance.x = event.stageX - img.x;
            this._distance.y = event.stageY - img.y;
            this.curMoveIndex = curIndex;
            this.curImg = img;
            this.setCurChildIndex();
            var obj = new Object();
            obj["curIndex"] = this.curMoveIndex;
            obj["_distanceX"] = this._distance.x;
            obj["_distanceY"] = this._distance.y;
            obj["oldX"] = this.oldX;
            obj["oldY"] = this.oldY;
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchCopyImgBeginEvent", obj);
        }
    };
    // 设置层级
    OneClass_Move_Page14Scene.prototype.setCurChildIndex = function () {
        if (this.curMoveIndex >= 0) {
            if (this.curImg && this.curImg.parent) {
                var n = this.curImg.parent.numChildren;
                this.curImg.parent.setChildIndex(this.curImg, n - 1);
            }
        }
    };
    OneClass_Move_Page14Scene.prototype.copyImg = function (sx, sy) {
        if (!this.imgList[this.curMoveIndex])
            return;
        var obj = this.imgList[this.curMoveIndex];
        var source = obj.source;
        var img = new eui.Image(source);
        img.x = obj.x;
        img.y = obj.y;
        img.anchorOffsetX = obj.anchorOffsetX;
        img.anchorOffsetY = obj.anchorOffsetY;
        // img.rotation = 90;
        this._distance.x = sx - img.x;
        this._distance.y = sy - img.y;
        obj.parent.addChild(img);
        this.copyImgList.push(img);
        img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchCopyImgBeginEvent, this);
        return img;
    };
    OneClass_Move_Page14Scene.prototype.cheackHit = function () {
        if (!this.curImg)
            return;
        var siteIndex = this.getSiteIndexForGlobalPos(this.curImg.x, this.curImg.y);
        if (siteIndex != -1) {
        }
        else {
            if (this.curImg && this.curImg.parent) {
                this.curImg.parent.removeChild(this.curImg);
            }
        }
        this.curMoveIndex = -1;
    };
    OneClass_Move_Page14Scene.prototype.removeEvt = function () {
        for (var _i = 0, _a = this.imgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj) {
                obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchImgBeginEvent, this);
            }
        }
        for (var _b = 0, _c = this.copyImgList; _b < _c.length; _b++) {
            var obj = _c[_b];
            if (obj) {
                obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchCopyImgBeginEvent, this);
            }
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchImgEndEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveEvent, this);
        this.btn_reset.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onToucBtnReset, this);
    };
    OneClass_Move_Page14Scene.prototype.resetPos = function () {
        for (var _i = 0, _a = this.imgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            var n = this.imgList.indexOf(obj);
            if (obj) {
                obj.x = this.imgPosList[n].x;
                obj.y = this.imgPosList[n].y;
            }
        }
    };
    OneClass_Move_Page14Scene.prototype.clearImg = function () {
        for (var _i = 0, _a = this.copyImgList; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj && obj.parent) {
                obj.parent.removeChild(obj);
            }
        }
    };
    // 复制图片 图片任意拖动不限制
    OneClass_Move_Page14Scene.key = "OneClass_Move_Page14Scene";
    return OneClass_Move_Page14Scene;
}(UIObject));
__reflect(OneClass_Move_Page14Scene.prototype, "OneClass_Move_Page14Scene");
//# sourceMappingURL=OneClass_Move_Page14Scene.js.map
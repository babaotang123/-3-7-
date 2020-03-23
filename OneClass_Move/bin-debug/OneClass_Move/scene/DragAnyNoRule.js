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
/**
 *
 * 通用模板，处理拖动到任意位置没有限制规则
 *
 */
var DragAnyNoRule = (function (_super) {
    __extends(DragAnyNoRule, _super);
    function DragAnyNoRule() {
        var _this = _super.call(this) || this;
        // 设置谁的层级最高
        _this.layer = -1;
        _this.ImgList = new Array();
        _this.originPosition = new Array();
        _this._distance = new egret.Point();
        _this.layerArr = [];
        return _this;
    }
    DragAnyNoRule.prototype.onAdd = function () {
        this.initMyData();
        if (this.playBtn) {
            this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showQue, this);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.endMoveEvent, this);
    };
    DragAnyNoRule.prototype.initMyData = function () {
        if (this.ImgList.length > 0) {
            for (var i = 0; i < this.ImgList.length; i++) {
                this.ImgList[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginDragEvent, this);
                var itemPointX = this.ImgList[i].x;
                var itemPointY = this.ImgList[i].y;
                var point = new egret.Point();
                point.x = itemPointX;
                point.y = itemPointY;
                // 获得层级值
                var layerNumber = this.ImgList[i].parent.getChildIndex(this.ImgList[i]);
                this.layerArr.push(layerNumber);
                // 小人的初始点位
                this.originPosition.push(point);
            }
            if (this.layer >= 1) {
                var len = this.ImgList[this.layer - 1].parent.numChildren;
            }
        }
    };
    DragAnyNoRule.prototype.execMessage = function (data) {
        if (true) {
            return;
        }
        if (data["touchBegin"]) {
            this.curMoveIndex = Number(data["touchBegin"]["curMoveIndex"]);
            this.curMoveItemObj = this.ImgList[this.curMoveIndex];
            this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj, this.curMoveItemObj.parent.numChildren - 1);
        }
        else if (data["touchMove"]) {
            if (this.curMoveItemObj) {
                var targetX = data["touchMove"]["targetX"];
                var targetY = data["touchMove"]["targetY"];
                this.curMoveItemObj.x = targetX;
                this.curMoveItemObj.y = targetY;
            }
        }
        else if (data["touchEnd"]) {
            if (this.curMoveItemObj) {
                var targetX = data["touchEnd"]["targetX"];
                var targetY = data["touchEnd"]["targetY"];
                this.curMoveItemObj.x = targetX;
                this.curMoveItemObj.y = targetY;
                this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj, this.layerArr[this.curMoveIndex]);
                this.curMoveIndex = -1;
                this.curMoveItemObj = null;
            }
        }
        else if (data["showQUE"]) {
            var res = data["showQUE"]["showquestion"];
            this.question.visible = res;
        }
    };
    DragAnyNoRule.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.destroyEvent();
        this.resetdata();
    };
    DragAnyNoRule.prototype.moveEvent = function (event) {
        // egret.log("event is ",event);
        // let localPos = this.globalToLocal(event.target.x,event.target.y);
        if (this.curMoveItemObj) {
            this.curMoveItemObj.x = event.stageX - this._distance.x;
            this.curMoveItemObj.y = event.stageY - this._distance.y;
            var obj = new Object();
            obj["targetX"] = this.curMoveItemObj.x;
            obj["targetY"] = this.curMoveItemObj.y;
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchMove", obj);
        }
    };
    DragAnyNoRule.prototype.beginDragEvent = function (event) {
        egret.log("event is ", event);
        this.curMoveItemObj = event.target;
        this._distance.x = event.stageX - event.target.x;
        this._distance.y = event.stageY - event.target.y;
        egret.log("distance is ", this._distance);
        egret.log("event.target is ", event.target);
        this.curMoveIndex = this.ImgList.indexOf(event.target);
        this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj, this.curMoveItemObj.parent.numChildren - 1);
        var obj = new Object();
        obj["curMoveIndex"] = this.curMoveIndex.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchBegin", obj);
    };
    DragAnyNoRule.prototype.endMoveEvent = function (event) {
        // // let localPos = this.globalToLocal(event.target.x,event.target.y);
        if (this.curMoveItemObj) {
            this.curMoveItemObj.x = event.stageX - this._distance.x;
            this.curMoveItemObj.y = event.stageY - this._distance.y;
            // let index: number = this.ImgList.indexOf(this.curMoveItemObj);
            // 还原层级关系
            this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj, this.layerArr[this.curMoveIndex]);
            var obj = new Object();
            obj["targetX"] = this.curMoveItemObj.x;
            obj["targetY"] = this.curMoveItemObj.y;
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchEnd", obj);
            this.curMoveIndex = -1;
            this.curMoveItemObj = null;
        }
    };
    DragAnyNoRule.prototype.showQue = function () {
        this.question.visible = true;
        var len = this.question.parent.numChildren;
        // this.setChildIndex(this.question,len - 1);
        var obj = new Object();
        obj["showquestion"] = this.question.visible;
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "showQUE", obj);
    };
    DragAnyNoRule.prototype.resetdata = function () {
        for (var i = 0; i < this.originPosition.length; i++) {
            this["img" + ("" + i)].x = this.originPosition[i].x;
            this["img" + ("" + i)].y = this.originPosition[i].y;
        }
        if (this.question) {
            this.question.visible = false;
        }
        this.originPosition = [];
        this.ImgList = [];
    };
    DragAnyNoRule.prototype.destroyEvent = function () {
        if (this.playBtn) {
            this.playBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showQue, this);
        }
        for (var i = 0; i < this.ImgList.length; i++) {
            this.ImgList[i].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginDragEvent, this);
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.endMoveEvent, this);
    };
    return DragAnyNoRule;
}(UIObject));
__reflect(DragAnyNoRule.prototype, "DragAnyNoRule");
//# sourceMappingURL=DragAnyNoRule.js.map
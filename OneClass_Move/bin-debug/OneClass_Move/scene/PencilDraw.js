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
var PencilDraw = (function (_super) {
    __extends(PencilDraw, _super);
    function PencilDraw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 每次进入 */
    PencilDraw.prototype.onAdd = function () {
        this.pencilShape = new egret.Shape();
        this.graphics = this.pencilShape.graphics;
        this.addChild(this.pencilShape);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.tapBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.tapMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.tapEnd, this);
    };
    PencilDraw.prototype.tapBegin = function (event) {
        var tapX = event.stageX;
        var tapY = event.stageY;
        this.lineS(this.lineColor, this.lineWidth);
        // this.graphics.beginFill();
        this.graphics.moveTo(tapX, tapY);
        var obj = new Object();
        obj["tapX"] = tapX.toString();
        obj["tapY"] = tapX.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "tapBegin", obj);
    };
    PencilDraw.prototype.lineS = function (lineColor, lineWidth) {
        if (lineColor === void 0) { lineColor = 0xef0023; }
        if (lineWidth === void 0) { lineWidth = 3; }
        this.graphics.lineStyle(lineWidth, lineColor);
    };
    PencilDraw.prototype.tapMove = function (event) {
        var tapX = event.stageX;
        var tapY = event.stageY;
        this.graphics.lineTo(tapX, tapY);
        var obj = new Object();
        obj["tapX"] = tapX.toString();
        obj["tapY"] = tapX.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "tapMove", obj);
    };
    PencilDraw.prototype.tapEnd = function (event) {
        var tapX = event.stageX;
        var tapY = event.stageY;
        this.graphics.endFill();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "tapEnd", 1);
    };
    PencilDraw.prototype.execMessage = function (data) {
        if (true) {
            return;
        }
        if (data["tapBegin"]) {
            var tapX = Number(data["tapBegin"]["tapX"]);
            var tapY = Number(data["tapBegin"]["tapY"]);
            this.lineS(this.lineColor, this.lineWidth);
            // this.graphics.beginFill();
            this.graphics.moveTo(tapX, tapY);
        }
        else if (data["tapMove"]) {
            var tapX = Number(data["tapMove"]["tapX"]);
            var tapY = Number(data["tapMove"]["tapY"]);
            this.graphics.lineTo(tapX, tapY);
        }
        else if (data["tapEnd"]) {
            this.graphics.endFill();
        }
    };
    /** 这里进行移出场景的处理 **/
    PencilDraw.prototype.onDestroy = function () {
        // 清除之前绘制的线条
        this.graphics.clear();
        if (this.contains(this.pencilShape)) {
            this.removeChild(this.pencilShape);
        }
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.tapBegin, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.tapMove, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.tapEnd, this);
    };
    return PencilDraw;
}(UIObject));
__reflect(PencilDraw.prototype, "PencilDraw");
//# sourceMappingURL=PencilDraw.js.map
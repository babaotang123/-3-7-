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
var OneClass_Move_Page4Scene = (function (_super) {
    __extends(OneClass_Move_Page4Scene, _super);
    function OneClass_Move_Page4Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "OneClass_Move_Page4Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    OneClass_Move_Page4Scene.prototype.onAdd = function () {
        // this.showCom = new ClickShow();
        // this.showCom.ImgList.push(this["dc"]);
        // this.showCom.GroupList.push(this["group0"]);
        // this.showCom.onAdd();
        for (var i = 0; i < 10; i++) {
            if (i < 1) {
                this.rectCanSetList.push(this["rect" + i]);
            }
            this.countImgList.push(1);
            this.ImgList.push(this["img" + i]);
        }
        _super.prototype.onAdd.call(this);
    };
    OneClass_Move_Page4Scene.prototype.isCanSetToRect = function (indexForImgList, indexRect, obj, isNewItem) {
        return this.isCanSetToRectForReal(indexForImgList, indexRect, obj, isNewItem);
    };
    OneClass_Move_Page4Scene.prototype.isCanSetToRectForReal = function (indexForImgList, indexRect, obj, isNewItem) {
        // return true;
        return this.isCanSetToRectForRectMax(indexRect, obj, 1);
    };
    OneClass_Move_Page4Scene.prototype.refreshForListTouchEnd = function () {
        _super.prototype.refreshForListTouchEnd.call(this);
        for (var i = 0; i < this.rectCanSetList.length; i++) {
            if (this.targetDataMap[i] && this.targetDataMap[i].length > 0) {
                if (this.targetDataMap[i].length === 1) {
                    var item = this.targetDataMap[i][0];
                    item.obj.x = this.rectCanSetList[i].x;
                    item.obj.y = this.rectCanSetList[i].y;
                }
                else if (this.targetDataMap[i].length === 2) {
                    var item = this.targetDataMap[i][0];
                    var item1 = this.targetDataMap[i][1];
                    item.obj.x = this.rectCanSetList[i].x - 30;
                    item.obj.y = this.rectCanSetList[i].y;
                    item1.obj.x = this.rectCanSetList[i].x + 30;
                    item1.obj.y = this.rectCanSetList[i].y;
                }
            }
        }
    };
    OneClass_Move_Page4Scene.prototype.execMessage = function (data) {
        _super.prototype.execMessage.call(this, data);
        // this.showCom.execMessage(data);
    };
    /** 这里进行移出场景的处理 **/
    OneClass_Move_Page4Scene.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        // this.showCom.onDestroy();
    };
    OneClass_Move_Page4Scene.key = "OneClass_Move_Page4Scene";
    return OneClass_Move_Page4Scene;
}(DragAnyMakeRuleListCommonScene));
__reflect(OneClass_Move_Page4Scene.prototype, "OneClass_Move_Page4Scene");
//# sourceMappingURL=OneClass_Move_Page4Scene.js.map
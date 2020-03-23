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
var OneClass_Move_Page9Scene = (function (_super) {
    __extends(OneClass_Move_Page9Scene, _super);
    function OneClass_Move_Page9Scene() {
        var _this = _super.call(this) || this;
        _this.skinName = "OneClass_Move_Page9Scene_Skin";
        return _this;
    }
    /** 每次进入 */
    OneClass_Move_Page9Scene.prototype.onAdd = function () {
    };
    /** 这里进行移出场景的处理 **/
    OneClass_Move_Page9Scene.prototype.onDestroy = function () {
    };
    OneClass_Move_Page9Scene.key = "OneClass_Move_Page9Scene";
    return OneClass_Move_Page9Scene;
}(UIObject));
__reflect(OneClass_Move_Page9Scene.prototype, "OneClass_Move_Page9Scene");
//# sourceMappingURL=OneClass_Move_Page9Scene.js.map
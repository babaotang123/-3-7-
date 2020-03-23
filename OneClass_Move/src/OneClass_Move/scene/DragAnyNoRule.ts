/**
 *
 * 通用模板，处理拖动到任意位置没有限制规则
 *
 */
class DragAnyNoRule extends UIObject {
    // 可以拖动的图片列表
    protected ImgList: eui.Image[];
    // 图片的原始位置
    protected originPosition: egret.Point[];
    // 当前移动的对象
    protected curMoveItemObj: eui.Image;
    // 当前移动对象的图片索引
    protected curMoveIndex: number;
    protected question: eui.Image;
    // 设置谁的层级最高
    protected layer: number = -1;
    // 播放按钮
    protected playBtn: eui.Image;
    protected _distance: egret.Point;
    // 层级数组
    protected layerArr: number[];

    public constructor() {
        super();
        this.ImgList = new Array<eui.Image>();
        this.originPosition = new Array<egret.Point>();
        this._distance = new egret.Point();
        this.layerArr = [];

     }
    public onAdd(): void {
        this.initMyData();
        if(this.playBtn) {
            this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showQue, this);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.endMoveEvent, this);
    }
    public initMyData(): void {
        if (this.ImgList.length > 0) {
            for (let i = 0; i < this.ImgList.length; i++) {
                this.ImgList[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginDragEvent, this);
                const itemPointX = this.ImgList[i].x;
                const itemPointY = this.ImgList[i].y;
                const point = new egret.Point();
                point.x = itemPointX;
                point.y = itemPointY;
                // 获得层级值
                let layerNumber: number = this.ImgList[i].parent.getChildIndex(this.ImgList[i]);
                this.layerArr.push(layerNumber);
                // 小人的初始点位
                this.originPosition.push(point);
            }
            if (this.layer >= 1) {
                const len = this.ImgList[this.layer - 1].parent.numChildren;
            }
        }
    }
    public execMessage(data: any): void {
        if (DEBUG) {
            return;
        }
        if (data["touchBegin"]) {
            this.curMoveIndex = Number(data["touchBegin"]["curMoveIndex"]);
            this.curMoveItemObj = this.ImgList[this.curMoveIndex];
            this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj,this.curMoveItemObj.parent.numChildren - 1);
        } else if (data["touchMove"]) {
            if (this.curMoveItemObj) {
                const targetX = data["touchMove"]["targetX"];
                const targetY = data["touchMove"]["targetY"];
                this.curMoveItemObj.x = targetX;
                this.curMoveItemObj.y = targetY;
            }
        } else if (data["touchEnd"]) {
            if (this.curMoveItemObj) {
                const targetX = data["touchEnd"]["targetX"];
                const targetY = data["touchEnd"]["targetY"];
                this.curMoveItemObj.x = targetX;
                this.curMoveItemObj.y = targetY;

                this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj,this.layerArr[this.curMoveIndex]);

                this.curMoveIndex = -1;
                this.curMoveItemObj = null;
            }
        } else if (data["showQUE"]) {
            const res = data["showQUE"]["showquestion"];
            this.question.visible = res;
        }
    }
    public onDestroy(): void {
        super.onDestroy();
        this.destroyEvent();
        this.resetdata();
    }
    protected moveEvent(event: egret.TouchEvent) {
        // egret.log("event is ",event);
        // let localPos = this.globalToLocal(event.target.x,event.target.y);
         if (this.curMoveItemObj) {
            this.curMoveItemObj.x = event.stageX - this._distance.x;
            this.curMoveItemObj.y = event.stageY - this._distance.y;

            const obj = new Object();
            obj["targetX"] = this.curMoveItemObj.x;
            obj["targetY"] = this.curMoveItemObj.y;
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchMove", obj);
        }
    }
    private beginDragEvent(event: egret.TouchEvent) {
        egret.log("event is ", event);
        this.curMoveItemObj = event.target;
        this._distance.x = event.stageX - event.target.x;
        this._distance.y = event.stageY - event.target.y;
        egret.log("distance is ",this._distance);
        egret.log("event.target is ", event.target);
        this.curMoveIndex = this.ImgList.indexOf(event.target);
        this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj,this.curMoveItemObj.parent.numChildren - 1);
        const obj = new Object();

        obj["curMoveIndex"] = this.curMoveIndex.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchBegin", obj);
    }
    private endMoveEvent(event: egret.TouchEvent) {
        // // let localPos = this.globalToLocal(event.target.x,event.target.y);
        if (this.curMoveItemObj) {
            this.curMoveItemObj.x = event.stageX - this._distance.x;
            this.curMoveItemObj.y = event.stageY - this._distance.y;

            // let index: number = this.ImgList.indexOf(this.curMoveItemObj);
            // 还原层级关系
            this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj,this.layerArr[this.curMoveIndex]);

            const obj = new Object();
            obj["targetX"] = this.curMoveItemObj.x;
            obj["targetY"] = this.curMoveItemObj.y;
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchEnd", obj);

            this.curMoveIndex = -1;
            this.curMoveItemObj = null;
        }
    }
    private showQue(): void {
        this.question.visible = true;
        let len = this.question.parent.numChildren;
        // this.setChildIndex(this.question,len - 1);
        const obj = new Object();
        obj["showquestion"] = this.question.visible;
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "showQUE", obj);
    }
    private resetdata(): void {
        for (let i = 0; i < this.originPosition.length; i++) {
            this["img" + `${i}`].x = this.originPosition[i].x;
            this["img" + `${i}`].y = this.originPosition[i].y;
        }
        if(this.question) {
            this.question.visible = false;
        }
        this.originPosition = [];
        this.ImgList = [];
    }
    private destroyEvent(): void {
        if(this.playBtn) {
            this.playBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showQue, this);
        }
        for (let i = 0; i < this.ImgList.length; i++) {
            this.ImgList[i].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginDragEvent, this);
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.endMoveEvent, this);
    }
}

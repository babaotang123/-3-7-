class OneClass_Move_Page14Scene extends UIObject {
    // 复制图片 图片任意拖动不限制
    public static key: string = "OneClass_Move_Page14Scene";
    private rectList: eui.Rect[];
    private imgList: eui.Image[];
    private curMoveIndex: number;
    private _distance: egret.Point;
    private oldX: number;
    private oldY: number;
    private isMove: boolean;
    private imgPosList: egret.Point[];
    private r_1: eui.Rect;
    private img_0: eui.Image;
    private curImg: eui.Image;
    private copyImgList: eui.Image[];
    private btn_reset: eui.Image;
    public constructor() {
        super();
        this.skinName = "OneClass_Move_Page14Scene_Skin";
    }

    /** 每次进入 */
    public onAdd(): void {
        this.initScene();
        this.initAddEvent();
    }

    /** 这里进行移出场景的处理 **/
    public onDestroy(): void {
        this.resetPos();
        this.removeEvt();
        this.clearImg();
        this.curMoveIndex = -1;
        this.oldX = -1;
        this.oldY = -1;
        this.imgList = [];
        this.rectList = [];
        this.imgPosList = [];
    }

    public execMessage(data: any): void {
        if (DEBUG) {
            return;
        }
        if (data["onToucMove"]) {
            this.curMoveIndex = data["onToucMove"]["curIndex"];
            this.isMove = data["onToucMove"]["isMove"];
            const x = data["onToucMove"]["tarX"];
            const y = data["onToucMove"]["tarY"];
            if(this.curImg){
                this.curImg.x = x;
                this.curImg.y = y;
            }
        } else if (data["onToucBegin"]) {
            this.curMoveIndex = data["onToucBegin"]["curIndex"];
            this._distance.x = data["onToucBegin"]["_distanceX"];
            this._distance.y = data["onToucBegin"]["_distanceY"];
            this.oldX = data["onToucBegin"]["oldX"];
            this.oldY = data["onToucBegin"]["oldY"];
            const sx: number = data["onToucBegin"]["stageX"];
            const sy: number = data["onToucBegin"]["stageY"];
            this.curImg = this.copyImg(sx, sy);
            if(this.curImg){
                // 设置层级
                this.setCurChildIndex();
            }
        } else if (data["onTouchEnd"]) {
            this.cheackHit();
        } else if (data["touchCopyImgBeginEvent"]) {
            this.curMoveIndex = data["touchCopyImgBeginEvent"]["curIndex"];
            this._distance.x = data["touchCopyImgBeginEvent"]["_distanceX"];
            this._distance.y = data["touchCopyImgBeginEvent"]["_distanceY"];
            this.oldX = data["touchCopyImgBeginEvent"]["oldX"];
            this.oldY = data["touchCopyImgBeginEvent"]["oldY"];
            if(this.copyImgList[this.curMoveIndex]){
                this.curImg = this.copyImgList[this.curMoveIndex];
                this.setCurChildIndex();
            }
        } else if (data["resetGame"]) {
            this.resetGame();
        }
    }

    protected getSiteIndexForGlobalPos(xGlobal: number, yGlobal: number): number {
        const localPos = this.globalToLocal(xGlobal, yGlobal);
        const curX = localPos.x;
        const curY = localPos.y;

        for (const siteIndex in this.rectList) {
            const rectObj = this.rectList[siteIndex];
            if (rectObj) {
                if (rectObj.hitTestPoint(curX, curY)) {
                    return parseInt(siteIndex);
                }
            }
        }
        return -1;
    }

        /** 初始化场景 */
    private initScene(): void {
        this.imgList = [];
        this.rectList = [];
        this.imgPosList = [];
        this.copyImgList = [];
        this. _distance = new egret.Point();
        this.curMoveIndex = -1;
        for (let i = 0; i < 2; i++) {
            this.imgList.push(this["img_" + i]);
        }
        this.rectList.push(this.r_1);
        this.initImgPos();
    }

    private initImgPos(): void {
        for (const obj of this.imgList) {
            if (obj) {
                this.imgPosList.push(new egret.Point(obj.x, obj.y));
            }
        }
    }

    private initAddEvent(): void {
        for (const obj of this.imgList) {
            if (obj) {
                obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchImgBeginEvent, this);
            }
        }
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchImgEndEvent, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveEvent, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onToucBtnReset, this);
    }

    private onToucBtnReset(event: egret.TouchEvent): void {
        this.resetGame();
        CommunicationManager.getInstance().makePostMessage("onFileMessage", "resetGame", 1);
    }

    private resetGame(): void {
        egret.Tween.removeAllTweens();
        this.resetPos();
        this.clearImg();
        this.curMoveIndex = -1;
    }

    // 结束
    private touchImgEndEvent(event: egret.TouchEvent): void {
        if (this.curMoveIndex >= 0) {
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "onTouchEnd", 1);
            this.cheackHit();
        }
    }

    // 点击开始
    private touchImgBeginEvent(event: egret.TouchEvent): void {
        const curIndex = this.imgList.indexOf(event.currentTarget);
        if (curIndex >= 0) {
                const img: eui.Image = this.imgList[curIndex];
                this.oldX = img.x;
                this.oldY = img.y;
                this._distance.x = event.stageX - img.x;
                this._distance.y = event.stageY - img.y;
                this.curMoveIndex = curIndex;
               // this.curImg = img;

                this.curImg = this.copyImg(event.stageX, event.stageY);
                this.setCurChildIndex();

                const obj: Object = new Object();
                obj["curIndex"] = this.curMoveIndex;
                obj["_distanceX"] = this._distance.x ;
                obj["_distanceY"] = this._distance.y ;
                obj["oldX"] =  this.oldX ;
                obj["oldY"] =  this.oldY ;
                obj["stageX"] =  event.stageX ;
                obj["stageY"] =  event.stageY ;
                CommunicationManager.getInstance().makePostMessage("onFileMessage", "onToucBegin", obj);
        }
    }

    // 移动
    private touchMoveEvent(event: egret.TouchEvent): void {
        if (this.curMoveIndex >= 0) {
            this.curImg.x = event.stageX - this._distance.x;
            this.curImg.y = event.stageY - this._distance.y;
            this.isMove = true;

            const obj: Object = new Object();
            obj["curIndex"] = this.curMoveIndex;
            obj["tarX"] = this.curImg.x;
            obj["tarY"] = this.curImg.y;
            obj["isMove"] = this.isMove;
            CommunicationManager.getInstance().makePostMessage("onFileMessage", "onToucMove", obj);
        }
    }

    private touchCopyImgBeginEvent(event: egret.TouchEvent): void {
        const curIndex = this.copyImgList.indexOf(event.currentTarget);
        if (curIndex >= 0) {
                const img: eui.Image = this.copyImgList[curIndex];
                this.oldX = img.x;
                this.oldY = img.y;
                this._distance.x = event.stageX - img.x;
                this._distance.y = event.stageY - img.y;
                this.curMoveIndex = curIndex;

                this.curImg = img;
                this.setCurChildIndex();

                const obj: Object = new Object();
                obj["curIndex"] = this.curMoveIndex;
                obj["_distanceX"] = this._distance.x ;
                obj["_distanceY"] = this._distance.y ;
                obj["oldX"] =  this.oldX ;
                obj["oldY"] =  this.oldY ;
                CommunicationManager.getInstance().makePostMessage("onFileMessage", "touchCopyImgBeginEvent", obj);
        }
    }


    // 设置层级
    private setCurChildIndex(): void {
        if (this.curMoveIndex >= 0) {
            if (this.curImg && this.curImg.parent) {
                const n = this.curImg.parent.numChildren;
                this.curImg.parent.setChildIndex(this.curImg, n - 1);
            }
        }
    }

    private copyImg(sx: number, sy: number): eui.Image {
        if(!this.imgList[this.curMoveIndex])return
        const obj = this.imgList[this.curMoveIndex];
        const source = obj.source;
        const img = new eui.Image(source);
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
    }

    private cheackHit(): void {
        if(!this.curImg)return;
        const siteIndex = this.getSiteIndexForGlobalPos(this.curImg.x, this.curImg.y);
        if (siteIndex != -1) {

        } else {
           if (this.curImg && this.curImg.parent) {
               this.curImg.parent.removeChild(this.curImg);
           }
        }
        this.curMoveIndex = -1;
    }


    private removeEvt(): void {
        for (const obj of this.imgList) {
            if (obj) {
                obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchImgBeginEvent, this);
            }
        }

        for (const obj of this.copyImgList) {
            if (obj) {
                obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchCopyImgBeginEvent, this);
            }
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchImgEndEvent, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveEvent, this);

        this.btn_reset.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onToucBtnReset, this);
    }

    private resetPos(): void {
        for (const obj of this.imgList) {
            const n = this.imgList.indexOf(obj);
            if (obj) {
                obj.x = this.imgPosList[n].x;
                obj.y = this.imgPosList[n].y;
            }
        }
    }

    private clearImg(): void {
        for (const obj of this.copyImgList) {
            if (obj && obj.parent) {
                obj.parent.removeChild(obj);
            }
        }
    }

}

class ShowByTime extends UIObject {
    public back: egret.DisplayObject;
    public ImgList: eui.Image[];
    public clickTime: number = 0;
    public graphics: egret.Graphics;
    
    constructor() {
        super();
        this.ImgList = [];
    }
    public onAdd(): void {
        this.clickTime = 0;
        if(!this.back) {
            this.back = this["img_bg"];
        }
        if(this.ImgList && this.ImgList.length > 0) {
            for(let i = 0; i < this.ImgList.length; i++) {
                this.ImgList[i].visible = false;
            }
            this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapBack,this);
        }
    }
    public setGraphics(graphics: egret.Graphics): void {
        this.graphics = graphics;
    }
    // tapback
    protected tapBack(): void {
        if(this.clickTime < this.ImgList.length) {
            this.clickTime++;
            this.dealShow(this.clickTime);
            let obj = new Object();
            obj["index"] = (this.clickTime).toString();
            CommunicationManager.getInstance().makePostMessage("onFileMessage","show",obj);
        }
        if(this.graphics) {
            this.graphics.clear();
        }
    }
    protected dealShow(index: number): void {
        for(let i = 0; i < this.ImgList.length; i++) {
            if(index - 1 === i) {
                this.ImgList[i].visible = true;
            } else {
                this.ImgList[i].visible = false;
            }
        }
        // this.ImgList[index - 1].visible = true;

        
    }
    public execMessage(data: any): void {
        if(DEBUG) {
            return;
        }
        if(data["show"]) {
            let index = Number(data["show"]["index"]);
            this.dealShow(index);
            if(this.graphics) {
                this.graphics.clear();
            }
        }
    }
    public onDestroy(): void {
        this.ImgList = [];
        this.back.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapBack,this);
    }
}
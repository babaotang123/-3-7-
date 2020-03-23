class PencilDraw extends UIObject {

    protected back: eui.Image;
    private pencilShape: egret.Shape;
    private graphics: egret.Graphics;
    protected lineColor: number;
    protected lineWidth: number;
    /** 每次进入 */
    public onAdd(): void {
        this.pencilShape = new egret.Shape();
        this.graphics = this.pencilShape.graphics;
        this.addChild(this.pencilShape);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tapBegin,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.tapMove,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.tapEnd,this);
        
    }
    protected tapBegin(event: egret.TouchEvent): void {
        let tapX: number = event.stageX;
        let tapY: number = event.stageY;
        this.lineS(this.lineColor,this.lineWidth);
        // this.graphics.beginFill();
        this.graphics.moveTo(tapX,tapY);
        let obj = new Object();
        obj["tapX"] = tapX.toString();
        obj["tapY"] = tapX.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage","tapBegin",obj);
    }
    protected lineS(lineColor:number = 0xef0023,lineWidth:number = 3) {
        this.graphics.lineStyle(lineWidth,lineColor);
    }
    protected tapMove(event: egret.TouchEvent): void {
        let tapX: number = event.stageX;
        let tapY: number = event.stageY;
        this.graphics.lineTo(tapX,tapY);
        let obj = new Object();
        obj["tapX"] = tapX.toString();
        obj["tapY"] = tapX.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage","tapMove",obj);
    }
    protected tapEnd(event: egret.TouchEvent): void {
        let tapX: number = event.stageX;
        let tapY: number = event.stageY;
        this.graphics.endFill();
        CommunicationManager.getInstance().makePostMessage("onFileMessage","tapEnd",1);
    }
    public execMessage(data: any): void {
        if(DEBUG) {
            return;
        }
        if(data["tapBegin"]) {
            let tapX = Number(data["tapBegin"]["tapX"]);
            let tapY = Number(data["tapBegin"]["tapY"]);
            this.lineS(this.lineColor,this.lineWidth);
            // this.graphics.beginFill();
            this.graphics.moveTo(tapX,tapY);
        } else if(data["tapMove"]) {
            let tapX = Number(data["tapMove"]["tapX"]);
            let tapY = Number(data["tapMove"]["tapY"]);
            this.graphics.lineTo(tapX,tapY);
        } else if(data["tapEnd"]) {
            this.graphics.endFill();
        }
    }
    /** 这里进行移出场景的处理 **/
    public onDestroy(): void {
        // 清除之前绘制的线条
        this.graphics.clear();
        if(this.contains(this.pencilShape)) {
            this.removeChild(this.pencilShape);
        }
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tapBegin,this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.tapMove,this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.tapEnd,this);
    }
}

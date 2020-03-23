/*

    点击图片显示再点击隐藏

* */
class ShowAndHide extends UIObject {
    
    public ImgList: eui.Image[];
    constructor() {
        super();
        this.ImgList = [];
    }
    private lastTapImg: eui.Image;
    public onAdd(): void {
        
        super.onAdd();
        if(this.ImgList.length > 0) {
            for(let i = 0; i < this.ImgList.length; i++)  {
                let imgItem: eui.Image = this.ImgList[i];
                imgItem.alpha = 0;
                imgItem.name = i.toString();
                imgItem.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapImg,this);
            }
        }
    }
    private tapImg(e: egret.TouchEvent): void {
        let target = e.target as eui.Image;
        // if(target === this.lastTapImg) {
        //     return;
        // }
        this.lastTapImg = target;
        let name = target.name;
        if(!target.alpha) {
            target.alpha = 1;
        } else {
            target.alpha = 0;
        }
        let obj = new Object();
        obj["name"] = name;
        obj["alpha"] = target.alpha.toString();
        CommunicationManager.getInstance().makePostMessage("onFileMessage","tapImg",obj);
    }
    // 信令操作
    public execMessage(data: any): void {
        if(DEBUG) {
            return;
        }
        if(data["tapImg"]) {
            let name = Number(data["tapImg"]["name"]);
            let alpha = Number(data["tapImg"]["alpha"]);
            this.ImgList[name].alpha = alpha;   
        }
    }
    public onDestroy(): void {
        super.onDestroy();
        if(this.ImgList.length > 0) {
            for(let i = 0; i < this.ImgList.length; i++)  {
                let imgItem: eui.Image = this.ImgList[i];
                imgItem.alpha = 0;
                // imgItem.name = i.toString();
                imgItem.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapImg,this);
            }
        }
        this.ImgList = [];
    }

}
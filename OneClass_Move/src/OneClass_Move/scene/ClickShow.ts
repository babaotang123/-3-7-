// 点击对应的group显示对应的图片
class ClickShow extends UIObject {
    
    public ImgList: egret.DisplayObject[];
    public GroupList: egret.DisplayObject[];
    constructor() {
        super();
        this.ImgList = [];
        this.GroupList = [];
    }
    /** 每次进入 */
    public onAdd(): void {
        if(this.ImgList && this.GroupList) {
            for(let i = 0; i < this.ImgList.length; i++) {
                this.ImgList[i].visible = false;
            }
            for(let i = 0; i < this.GroupList.length; i++) {
                this.GroupList[i].name = i.toString();
                this.GroupList[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapGroup,this);
            }
        }
    }
    // 点击gorup显示对应的图片
    protected tapGroup(event: egret.TouchEvent): void {
        let target = event.target as egret.DisplayObject;
        let name = target.name;
        let obj = new Object();
        this.showImgByName(name);
        obj["name"] = name;
        CommunicationManager.getInstance().makePostMessage("onFileMessage","showImg",obj);
    }
    protected showImgByName(name: string): void {
        let targetImg = this.ImgList[Number(name)];
        targetImg.visible = true;
    }
    public execMessage(data: any): void {
        if(DEBUG) {
            return;
        }
        if(data["showImg"]) {
            let name = data["showImg"]["name"];
            this.showImgByName(name);
        }
    }
    /** 这里进行移出场景的处理 **/
    public onDestroy(): void {
        for(let i = 0; i < this.GroupList.length; i++) {
            this.GroupList[i].removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapGroup,this);
        }
        this.GroupList = [];
        this.ImgList = [];
    }
}
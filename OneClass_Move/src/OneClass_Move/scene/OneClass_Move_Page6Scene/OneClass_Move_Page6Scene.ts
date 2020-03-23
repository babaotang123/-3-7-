class OneClass_Move_Page6Scene extends DragAnyMakeRuleListCommonScene {

    static key:string = "OneClass_Move_Page6Scene";

    public constructor() {
        super();
        this.skinName = "OneClass_Move_Page6Scene_Skin";
    }
    private showCom: ClickShow;
    /** 每次进入 */
    public onAdd(): void {
        // this.showCom = new ClickShow();
        // this.showCom.ImgList.push(this["dc"]);
        // this.showCom.GroupList.push(this["group0"]);
        // this.showCom.onAdd();
        for(let i = 0; i < 10; i++) {
            if(i < 1) {
                this.rectCanSetList.push(this["rect" + i]);
            } 
            this.ImgList.push(this["img" + i]);
        }
        super.onAdd();
    }   
    protected isCanSetToRect(indexForImgList: number, indexRect: number, obj: eui.Image, isNewItem: boolean): boolean {
        return this.isCanSetToRectForReal(indexForImgList,indexRect,obj,isNewItem);
    }
    protected isCanSetToRectForReal(indexForImgList: number, indexRect: number, obj: eui.Image, isNewItem: boolean): boolean {
        // return true;
        return this.isCanSetToRectForRectMax(indexRect,obj,1);
    }
    public refreshForListTouchEnd(): void {
        super.refreshForListTouchEnd();
        for(let i = 0; i < this.rectCanSetList.length; i++) {
            if(this.targetDataMap[i] && this.targetDataMap[i].length > 0) {
                if(this.targetDataMap[i].length === 1) {
                    let item: {obj: eui.Image,index: number} = this.targetDataMap[i][0];
                    item.obj.x = this.rectCanSetList[i].x;
                    item.obj.y = this.rectCanSetList[i].y;
                   
                } else if(this.targetDataMap[i].length === 2) {
                    let item: {obj: eui.Image,index: number} = this.targetDataMap[i][0];
                    let item1: {obj: eui.Image,index: number} = this.targetDataMap[i][1];
                    item.obj.x = this.rectCanSetList[i].x - 30;
                    item.obj.y = this.rectCanSetList[i].y;
                    
                    item1.obj.x = this.rectCanSetList[i].x + 30;
                    item1.obj.y = this.rectCanSetList[i].y;
                    
                }
            }
        }
    }
    public execMessage(data: any): void {
        super.execMessage(data);
        // this.showCom.execMessage(data);
        
    }
    /** 这里进行移出场景的处理 **/
    public onDestroy(): void {
        super.onDestroy();
        // this.showCom.onDestroy();
    }
}

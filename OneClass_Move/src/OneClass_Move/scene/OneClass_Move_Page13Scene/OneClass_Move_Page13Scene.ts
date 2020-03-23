class OneClass_Move_Page13Scene extends DragAnyNoRule {
    static key:string = "OneClass_Move_Page13Scene";
    public constructor() {
        super();
        this.skinName = "OneClass_Move_Page13Scene_Skin";
    }

    /** 每次进入 */
    public onAdd(): void {
        for(let i = 0; i < 6; i++) {
            this.ImgList.push(this["img" + i]);
        }
        super.onAdd();
    }

    /** 这里进行移出场景的处理 **/
    public onDestroy(): void {
        super.onDestroy();
    }
}

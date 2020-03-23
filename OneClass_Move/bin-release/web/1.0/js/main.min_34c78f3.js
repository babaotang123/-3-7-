var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(s,o){function a(t){try{h(n.next(t))}catch(e){o(e)}}function r(t){try{h(n["throw"](t))}catch(e){o(e)}}function h(t){t.done?s(t.value):new i(function(e){e(t.value)}).then(a,r)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(s)throw new TypeError("Generator is already executing.");for(;h;)try{if(s=1,o&&(a=o[2&i[0]?"return":i[0]?"throw":"next"])&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[0,a.value]),i[0]){case 0:case 1:a=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,o=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){h.label=i[1];break}if(6===i[0]&&h.label<a[1]){h.label=a[1],a=i;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(i);break}a[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],o=0}finally{s=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var s,o,a,r,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},DragAnyNoRule=function(t){function e(){var e=t.call(this)||this;return e.layer=-1,e.ImgList=new Array,e.originPosition=new Array,e._distance=new egret.Point,e.layerArr=[],e}return __extends(e,t),e.prototype.onAdd=function(){this.initMyData(),this.playBtn&&this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showQue,this),this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveEvent,this),this.addEventListener(egret.TouchEvent.TOUCH_END,this.endMoveEvent,this)},e.prototype.initMyData=function(){if(this.ImgList.length>0){for(var t=0;t<this.ImgList.length;t++){this.ImgList[t].addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.beginDragEvent,this);var e=this.ImgList[t].x,i=this.ImgList[t].y,n=new egret.Point;n.x=e,n.y=i;var s=this.ImgList[t].parent.getChildIndex(this.ImgList[t]);this.layerArr.push(s),this.originPosition.push(n)}if(this.layer>=1){this.ImgList[this.layer-1].parent.numChildren}}},e.prototype.execMessage=function(t){if(t.touchBegin)this.curMoveIndex=Number(t.touchBegin.curMoveIndex),this.curMoveItemObj=this.ImgList[this.curMoveIndex],this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj,this.curMoveItemObj.parent.numChildren-1);else if(t.touchMove){if(this.curMoveItemObj){var e=t.touchMove.targetX,i=t.touchMove.targetY;this.curMoveItemObj.x=e,this.curMoveItemObj.y=i}}else if(t.touchEnd){if(this.curMoveItemObj){var e=t.touchEnd.targetX,i=t.touchEnd.targetY;this.curMoveItemObj.x=e,this.curMoveItemObj.y=i,this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj,this.layerArr[this.curMoveIndex]),this.curMoveIndex=-1,this.curMoveItemObj=null}}else if(t.showQUE){var n=t.showQUE.showquestion;this.question.visible=n}},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this),this.destroyEvent(),this.resetdata()},e.prototype.moveEvent=function(t){if(this.curMoveItemObj){this.curMoveItemObj.x=t.stageX-this._distance.x,this.curMoveItemObj.y=t.stageY-this._distance.y;var e=new Object;e.targetX=this.curMoveItemObj.x,e.targetY=this.curMoveItemObj.y,CommunicationManager.getInstance().makePostMessage("onFileMessage","touchMove",e)}},e.prototype.beginDragEvent=function(t){egret.log("event is ",t),this.curMoveItemObj=t.target,this._distance.x=t.stageX-t.target.x,this._distance.y=t.stageY-t.target.y,egret.log("distance is ",this._distance),egret.log("event.target is ",t.target),this.curMoveIndex=this.ImgList.indexOf(t.target),this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj,this.curMoveItemObj.parent.numChildren-1);var e=new Object;e.curMoveIndex=this.curMoveIndex.toString(),CommunicationManager.getInstance().makePostMessage("onFileMessage","touchBegin",e)},e.prototype.endMoveEvent=function(t){if(this.curMoveItemObj){this.curMoveItemObj.x=t.stageX-this._distance.x,this.curMoveItemObj.y=t.stageY-this._distance.y,this.curMoveItemObj.parent.setChildIndex(this.curMoveItemObj,this.layerArr[this.curMoveIndex]);var e=new Object;e.targetX=this.curMoveItemObj.x,e.targetY=this.curMoveItemObj.y,CommunicationManager.getInstance().makePostMessage("onFileMessage","touchEnd",e),this.curMoveIndex=-1,this.curMoveItemObj=null}},e.prototype.showQue=function(){this.question.visible=!0;var t=(this.question.parent.numChildren,new Object);t.showquestion=this.question.visible,CommunicationManager.getInstance().makePostMessage("onFileMessage","showQUE",t)},e.prototype.resetdata=function(){for(var t=0;t<this.originPosition.length;t++)this["img"+t].x=this.originPosition[t].x,this["img"+t].y=this.originPosition[t].y;this.question&&(this.question.visible=!1),this.originPosition=[],this.ImgList=[]},e.prototype.destroyEvent=function(){this.playBtn&&this.playBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.showQue,this);for(var t=0;t<this.ImgList.length;t++)this.ImgList[t].removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.beginDragEvent,this);this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveEvent,this),this.removeEventListener(egret.TouchEvent.TOUCH_END,this.endMoveEvent,this)},e}(UIObject);__reflect(DragAnyNoRule.prototype,"DragAnyNoRule");var ShowAndHide=function(t){function e(){var e=t.call(this)||this;return e.ImgList=[],e}return __extends(e,t),e.prototype.onAdd=function(){if(t.prototype.onAdd.call(this),this.ImgList.length>0)for(var e=0;e<this.ImgList.length;e++){var i=this.ImgList[e];i.alpha=0,i.name=e.toString(),i.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapImg,this)}},e.prototype.tapImg=function(t){var e=t.target;this.lastTapImg=e;var i=e.name;e.alpha?e.alpha=0:e.alpha=1;var n=new Object;n.name=i,n.alpha=e.alpha.toString(),CommunicationManager.getInstance().makePostMessage("onFileMessage","tapImg",n)},e.prototype.execMessage=function(t){if(t.tapImg){var e=Number(t.tapImg.name),i=Number(t.tapImg.alpha);this.ImgList[e].alpha=i}},e.prototype.onDestroy=function(){if(t.prototype.onDestroy.call(this),this.ImgList.length>0)for(var e=0;e<this.ImgList.length;e++){var i=this.ImgList[e];i.alpha=0,i.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapImg,this)}this.ImgList=[]},e}(UIObject);__reflect(ShowAndHide.prototype,"ShowAndHide");var CommonMovieDlg=function(t){function e(){var e=t.call(this)||this;return e.skinName="Dlg_CommonMovie_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){null!=this.data&&(this._movieName=this.data.movie,this._movieCount=this.data.movieCount,this._soundName=this.data.sound,this._soundType=Number(this.data.soundType),this._playCount=Number(this.data.playCount),this._playCount<=0||0/0===this._playCount?this.playAction():(this._playIndex=0,this.playActionByCount()))},e.prototype.onDestroy=function(){},e.prototype.playAction=function(){this.act=LN.getInstance().getMovieClip(this._movieName,this._movieCount),this.act.isLoop=!0,this.act.gotoAndPlay(0),this.act.x=781-this.act.width/2,this.act.y=674-this.act.height/2,this.addChild(this.act),egret.Tween.get(this.act).to({alpha:1},1e3),this._soundName?GM.sound.playEffect(this._soundName):this.randomSoundEffect(this._soundType)},e.prototype.playActionByCount=function(){var t=App.RandomUtils.limitInteger(1,3),e="";switch(t){case 1:e="effect_bingo_1_mp3";break;case 2:e="effect_bingo_2_mp3";break;case 3:e="effect_bingo_3_mp3"}GM.sound.playEffect(e),this.act=LN.getInstance().getMovieClip(this._movieName,this._movieCount),this.act.gotoAndPlay(0),this._playIndex++,this.act.x=781-this.act.width/2,this.act.y=674-this.act.height/2,this.addChild(this.act),this.act.addEventListener(zmovie.ZMovieClip.EVENT_FRAME_COMPLETE,this.oveZmovieActCount,this)},e.prototype.oveZmovieActCount=function(){this._playIndex>=this._playCount?(this.act.stop(),this.act.hasEventListener(zmovie.ZMovieClip.EVENT_FRAME_COMPLETE)&&this.act.removeEventListener(zmovie.ZMovieClip.EVENT_FRAME_COMPLETE,this.overZmovieAct,this),this.contains(this.act)&&this.removeChild(this.act),this.closeFunc()):(this.act.gotoAndPlay(0),this._playIndex++)},e.prototype.completeZmovieAct=function(){this.act.stop(),this.act.hasEventListener(zmovie.ZMovieClip.EVENT_FRAME_COMPLETE)&&this.act.removeEventListener(zmovie.ZMovieClip.EVENT_FRAME_COMPLETE,this.overZmovieAct,this),this.contains(this.act)&&this.removeChild(this.act)},e.prototype.overZmovieAct=function(t){var e=t.currentTarget;this.act&&(e.stop(),e.hasEventListener(egret.Event.SOUND_COMPLETE)&&e.removeEventListener(egret.Event.SOUND_COMPLETE,this.overZmovieAct,this)),egret.Tween.get(this.act).to({alpha:0},1e3).call(this.completeZmovieAct,this).call(this.closeFunc,this)},e.prototype.overAct=function(){egret.Tween.get(this.act).to({alpha:0},1e3).call(this.completeZmovieAct,this).call(this.closeFunc,this)},e.prototype.randomSoundEffect=function(t){var e=1==t?App.RandomUtils.limitInteger(1,3):App.RandomUtils.limitInteger(1,2),i="";if(1==t)switch(e){case 1:i="effect_bingo_1_mp3";break;case 2:i="effect_bingo_2_mp3";break;case 3:i="effect_bingo_3_mp3"}else if(2==t)switch(e){case 1:i="effect_error_1_mp3";break;case 2:i="effect_error_2_mp3"}if(""==i)return void this.overAct();var n=RES.getRes(i);if(!n)return void this.overAct();var s=n.play(0,1);s.addEventListener(egret.Event.SOUND_COMPLETE,this.overZmovieAct,this)},e.prototype.closeFunc=function(){this.onDlgClose(e.key)},e.key="CommonMovieDlg",e}(UIObject);__reflect(CommonMovieDlg.prototype,"CommonMovieDlg");var WaitPanel=function(t){function e(e){void 0===e&&(e=!1);var i=t.call(this)||this;return i.w=0,i.h=0,i.createView(),i}return __extends(e,t),e.prototype.destory=function(){EffectUtils.removeRotationEffect(this.imgRotatDragon)},e.prototype.createView=function(){this.w=egret.MainContext.instance.stage.stageWidth,this.h=egret.MainContext.instance.stage.stageHeight,this.addMask(),this.spGroup=new egret.Sprite,this.spGroup.width=150,this.spGroup.height=150,this.addChild(this.spGroup),this.spGroup.x=this.w/2,this.spGroup.y=this.h/2,this.spGroup.anchorOffsetX=this.spGroup.width/2,this.spGroup.anchorOffsetY=this.spGroup.height/2,this.touchEnabled=!1,this.imgRotatDragon=new egret.Bitmap,this.imgRotatDragon.texture=RES.getRes("dolphin_png"),this.spGroup.addChild(this.imgRotatDragon),this.imgRotatDragon.x=this.spGroup.width/2,this.imgRotatDragon.y=this.spGroup.height/2,this.imgRotatDragon.anchorOffsetX=this.imgRotatDragon.width/2,this.imgRotatDragon.anchorOffsetY=this.imgRotatDragon.height/2,this.addGroupCont("bg_ball_png"),this.addGroupCont("font_loading_png"),this.imgHand=new egret.Bitmap,this.imgHand.texture=RES.getRes("dolphin_arm_png"),this.spGroup.addChild(this.imgHand),this.imgHand.x=this.spGroup.width/2,this.imgHand.y=this.spGroup.height/2,this.imgHand.anchorOffsetX=this.imgHand.width/2,this.imgHand.anchorOffsetY=this.imgHand.height/2,EffectUtils.rotationEffect(this.imgHand,1e3),EffectUtils.rotationEffect(this.imgRotatDragon,1e3)},e.prototype.addMask=function(){this.bg=new egret.Sprite,this.bg.x=0,this.bg.y=0,this.bg.graphics.beginFill(0),this.bg.graphics.drawRect(0,0,this.w,this.h),this.bg.graphics.endFill(),this.addChild(this.bg),this.bg.alpha=0},e.prototype.addGroupCont=function(t){var e=new egret.Bitmap;e.texture=RES.getRes(t),this.spGroup.addChild(e),e.x=this.spGroup.width/2,e.y=this.spGroup.height/2,e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2},e}(egret.Sprite);__reflect(WaitPanel.prototype,"WaitPanel");var Version=function(){function t(){}return t.courseware_name="courseware_测试",t.VERSION="0.0.1",t}();__reflect(Version.prototype,"Version");var CommonMovieManager=function(){function t(){}return t.getInstance=function(){return t.instance||(t.instance=new t),t.instance},t.prototype.init=function(){lcp.LListener.getInstance().addEventListener("show_commonmovie",this.showCommonMovie,this)},t.prototype.showCommonMovie=function(t){t&&t.param&&GM.dlg.popDlg(CommonMovieDlg,"",null,t.param)},t.prototype.showSuccess=function(){GM.dlg.popDlg(CommonMovieDlg,"successCaiDai",null,{movie:"caidai",movieCount:7,playCount:2})},t}();__reflect(CommonMovieManager.prototype,"CommonMovieManager");var WaitManager=function(){function t(){}return t.getInstance=function(){return t.instance||(t.instance=new t),t.instance},t.prototype.init=function(){this.waitPanel=null,lcp.LListener.getInstance().addEventListener("show_wait",this.showWaritPanel,this),lcp.LListener.getInstance().addEventListener("hide_wait",this.hideWaritPanel,this)},t.prototype.showWaritPanel=function(){this.waitPanel||(this.waitPanel=new WaitPanel),GameLayerManager.gameLayer().maskLayer.removeChildren(),GameLayerManager.gameLayer().maskLayer.addChild(this.waitPanel)},t.prototype.hideWaritPanel=function(){this.waitPanel&&GameLayerManager.gameLayer().maskLayer.contains(this.waitPanel)&&GameLayerManager.gameLayer().maskLayer.removeChild(this.waitPanel)},t}();__reflect(WaitManager.prototype,"WaitManager");var GetStarScene=function(t){function e(){var e=t.call(this)||this;return e.skinName="GetStarScene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){this.initScene(),this.initAddEvent(),this.data&&this.data.starName&&(this.starImg.source=this.data.starName)},e.prototype.onDestroy=function(){this.goImg.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.doGoBackDolphinLandHandle,this)},e.prototype.execMessage=function(t){t.backDolphin&&this.backDolphinFunc()},e.prototype.initScene=function(){egret.Tween.get(this.lightImg,{loop:!0}).to({scaleX:.7,scaleY:.7},500).to({scaleX:1,scaleY:1},500)},e.prototype.initAddEvent=function(){this.goImg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.doGoBackDolphinLandHandle,this)},e.prototype.doGoBackDolphinLandHandle=function(){this.backDolphinFunc(),CommunicationManager.getInstance().makePostMessage("onFileMessage","backDolphin",1)},e.prototype.backDolphinFunc=function(){this.data&&this.data.backIndex?CommunicationManager.getInstance().goTargetPageHandle(this.data.backIndex):CommunicationManager.getInstance().goTargetPageHandle(3)},e.key="GetStarScene",e}(UIObject);__reflect(GetStarScene.prototype,"GetStarScene");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var s=RES.getRes(t);s?n(s):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function s(t){e.call(n,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),i.call(n))}"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,s,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var CoursewareVersion=function(){function t(){}return t.courseware_name="1年级11月份正课第5讲巧妙移动",t.VERSION="0.0.1",t}();__reflect(CoursewareVersion.prototype,"CoursewareVersion");var ClickShow=function(t){function e(){var e=t.call(this)||this;return e.ImgList=[],e.GroupList=[],e}return __extends(e,t),e.prototype.onAdd=function(){if(this.ImgList&&this.GroupList){for(var t=0;t<this.ImgList.length;t++)this.ImgList[t].visible=!1;for(var t=0;t<this.GroupList.length;t++)this.GroupList[t].name=t.toString(),this.GroupList[t].addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapGroup,this)}},e.prototype.tapGroup=function(t){var e=t.target,i=e.name,n=new Object;this.showImgByName(i),n.name=i,CommunicationManager.getInstance().makePostMessage("onFileMessage","showImg",n)},e.prototype.showImgByName=function(t){var e=this.ImgList[Number(t)];e.visible=!0},e.prototype.execMessage=function(t){if(t.showImg){var e=t.showImg.name;this.showImgByName(e)}},e.prototype.onDestroy=function(){for(var t=0;t<this.GroupList.length;t++)this.GroupList[t].removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapGroup,this);this.GroupList=[],this.ImgList=[]},e}(UIObject);__reflect(ClickShow.prototype,"ClickShow");var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),this.coursewareName="OneClass_Move",this.resIndex=0,this.initEgretConfig(),GM.init(),Log.trace("version","模板库的版本号："+CoursewareDefines.version),this.addChild(GameLayerManager.gameLayer()),this.runGame()["catch"](function(t){Log.trace("msg",t)})},e.prototype.initEgretConfig=function(){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){},egret.lifecycle.onResume=function(){},egret.ImageLoader.crossOrigin="anonymous",RES.setMaxLoadingThread(8);var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter)},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,5,,6]),[4,RES.loadConfig("resource/gamemain/default.res.json","/resource")];case 1:return e.sent(),[4,RES.loadConfig("resource/"+this.coursewareName+"/"+this.coursewareName+".res.json","/resource")];case 2:return e.sent(),[4,this.loadTheme()];case 3:return e.sent(),[4,this.loadCoursewareTheme()];case 4:return e.sent(),ResLoad.getInstance().LoadRes("preload",new Handler(this,this.onResourceLoadComplete)),ResLoad.getInstance().LoadRes(this.coursewareName+"_preload",new Handler(this,this.onResourceLoadComplete)),[3,6];case 5:return t=e.sent(),console.error(t),[3,6];case 6:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var n=new eui.Theme("resource/gamemain/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.loadCoursewareTheme=function(){var t=this;return new Promise(function(e,i){var n=new eui.Theme("resource/"+t.coursewareName+"/"+t.coursewareName+".thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.onResourceLoadComplete=function(){this.resIndex++,this.resIndex>=2&&(CommunicationManager.getInstance().init(this.coursewareName),this.createGameScene())},e.prototype.createGameScene=function(){},e.prototype.beforePage=function(){this.current--,this.current<=1&&(this.current=1),Log.trace("debug","跳转页:"+this.current),CommunicationManager.getInstance().goTargetPageHandle(this.current)},e.prototype.afterPage=function(){this.current++,this.current>=CommunicationManager.getInstance().coursewareArray.length&&(this.current=CommunicationManager.getInstance().coursewareArray.length),Log.trace("debug","跳转页:"+this.current),CommunicationManager.getInstance().goTargetPageHandle(this.current)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var PencilDraw=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.onAdd=function(){this.pencilShape=new egret.Shape,this.graphics=this.pencilShape.graphics,this.addChild(this.pencilShape),this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tapBegin,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.tapMove,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.tapEnd,this)},e.prototype.tapBegin=function(t){var e=t.stageX,i=t.stageY;this.lineS(this.lineColor,this.lineWidth),this.graphics.moveTo(e,i);var n=new Object;n.tapX=e.toString(),n.tapY=e.toString(),CommunicationManager.getInstance().makePostMessage("onFileMessage","tapBegin",n)},e.prototype.lineS=function(t,e){void 0===t&&(t=15663139),void 0===e&&(e=3),this.graphics.lineStyle(e,t)},e.prototype.tapMove=function(t){var e=t.stageX,i=t.stageY;this.graphics.lineTo(e,i);var n=new Object;n.tapX=e.toString(),n.tapY=e.toString(),CommunicationManager.getInstance().makePostMessage("onFileMessage","tapMove",n)},e.prototype.tapEnd=function(t){t.stageX,t.stageY;this.graphics.endFill(),CommunicationManager.getInstance().makePostMessage("onFileMessage","tapEnd",1)},e.prototype.execMessage=function(t){if(t.tapBegin){var e=Number(t.tapBegin.tapX),i=Number(t.tapBegin.tapY);this.lineS(this.lineColor,this.lineWidth),this.graphics.moveTo(e,i)}else if(t.tapMove){var e=Number(t.tapMove.tapX),i=Number(t.tapMove.tapY);this.graphics.lineTo(e,i)}else t.tapEnd&&this.graphics.endFill()},e.prototype.onDestroy=function(){this.graphics.clear(),this.contains(this.pencilShape)&&this.removeChild(this.pencilShape),this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tapBegin,this),this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.tapMove,this),this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.tapEnd,this)},e}(UIObject);__reflect(PencilDraw.prototype,"PencilDraw");var CommonButton=function(t){function e(){var e=t.call(this)||this;return e.skinName="CommonButton_Skin",e}return __extends(e,t),e.prototype.setSrcName=function(t){this.imgSrcName.source=t},e.prototype.setConfig=function(){this.imgSrcName.anchorOffsetX=this.imgSrcName.width/2,this.imgSrcName.anchorOffsetY=this.imgSrcName.height/2},e}(eui.Button);__reflect(CommonButton.prototype,"CommonButton");var ShowByTime=function(t){function e(){var e=t.call(this)||this;return e.clickTime=0,e.ImgList=[],e}return __extends(e,t),e.prototype.onAdd=function(){if(this.clickTime=0,this.back||(this.back=this.img_bg),this.ImgList&&this.ImgList.length>0){for(var t=0;t<this.ImgList.length;t++)this.ImgList[t].visible=!1;this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapBack,this)}},e.prototype.setGraphics=function(t){this.graphics=t},e.prototype.tapBack=function(){if(this.clickTime<this.ImgList.length){this.clickTime++,this.dealShow(this.clickTime);var t=new Object;t.index=this.clickTime.toString(),CommunicationManager.getInstance().makePostMessage("onFileMessage","show",t)}this.graphics&&this.graphics.clear()},e.prototype.dealShow=function(t){for(var e=0;e<this.ImgList.length;e++)t-1===e?this.ImgList[e].visible=!0:this.ImgList[e].visible=!1},e.prototype.execMessage=function(t){if(t.show){var e=Number(t.show.index);this.dealShow(e),this.graphics&&this.graphics.clear()}},e.prototype.onDestroy=function(){this.ImgList=[],this.back.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapBack,this)},e}(UIObject);__reflect(ShowByTime.prototype,"ShowByTime");var OneClass_Move_Page10Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page10Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){},e.prototype.onDestroy=function(){},e.key="OneClass_Move_Page10Scene",e}(UIObject);__reflect(OneClass_Move_Page10Scene.prototype,"OneClass_Move_Page10Scene");var OneClass_Move_Page11Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page11Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){for(var e=0;11>e;e++)1>e&&this.rectCanSetList.push(this["rect"+e]),10===e?this.countImgList.push(9999):this.countImgList.push(1),this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.execMessage=function(e){t.prototype.execMessage.call(this,e)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this)},e.key="OneClass_Move_Page11Scene",e}(DragAnyMakeRuleListCommonScene);__reflect(OneClass_Move_Page11Scene.prototype,"OneClass_Move_Page11Scene");var OneClass_Move_Page12Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page12Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){for(var e=0;8>e;e++)2>e&&this.rectCanSetList.push(this["rect"+e]),this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.execMessage=function(e){t.prototype.execMessage.call(this,e)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this)},e.key="OneClass_Move_Page12Scene",e}(DragAnyMakeRuleListCommonScene);__reflect(OneClass_Move_Page12Scene.prototype,"OneClass_Move_Page12Scene");var OneClass_Move_Page13Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page13Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){for(var e=0;6>e;e++)this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this)},e.key="OneClass_Move_Page13Scene",e}(DragAnyNoRule);__reflect(OneClass_Move_Page13Scene.prototype,"OneClass_Move_Page13Scene");var OneClass_Move_Page1Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page1Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){},e.prototype.onDestroy=function(){},e.key="OneClass_Move_Page1Scene",e}(UIObject);__reflect(OneClass_Move_Page1Scene.prototype,"OneClass_Move_Page1Scene");var OneClass_Move_Page2Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page2Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){this.showCom=new ClickShow,this.showCom.ImgList.push(this.dc),this.showCom.GroupList.push(this.group0),this.showCom.onAdd();for(var e=0;7>e;e++)2>e&&this.rectCanSetList.push(this["rect"+e]),this.countImgList.push(1),this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.isCanSetToRect=function(t,e,i,n){return this.isCanSetToRectForReal(t,e,i,n)},e.prototype.isCanSetToRectForReal=function(t,e,i,n){return this.isCanSetToRectForRectMax(e,i,1)},e.prototype.refreshForListTouchEnd=function(){t.prototype.refreshForListTouchEnd.call(this);for(var e=0;e<this.rectCanSetList.length;e++)if(this.targetDataMap[e]&&this.targetDataMap[e].length>0)if(1===this.targetDataMap[e].length){var i=this.targetDataMap[e][0];i.obj.x=this.rectCanSetList[e].x,i.obj.y=this.rectCanSetList[e].y}else if(2===this.targetDataMap[e].length){var i=this.targetDataMap[e][0],n=this.targetDataMap[e][1];i.obj.x=this.rectCanSetList[e].x-30,i.obj.y=this.rectCanSetList[e].y,n.obj.x=this.rectCanSetList[e].x+30,n.obj.y=this.rectCanSetList[e].y}},e.prototype.execMessage=function(e){t.prototype.execMessage.call(this,e),this.showCom.execMessage(e)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this),this.showCom.onDestroy()},e.key="OneClass_Move_Page2Scene",e}(DragAnyMakeRuleListCommonScene);__reflect(OneClass_Move_Page2Scene.prototype,"OneClass_Move_Page2Scene");var OneClass_Move_Page3Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page3Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){this.showCom=new ClickShow,this.showCom.ImgList.push(this.dc),this.showCom.GroupList.push(this.group0),this.showCom.onAdd();for(var e=0;10>e;e++)3>e&&this.rectCanSetList.push(this["rect"+e]),this.countImgList.push(1),this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.isCanSetToRect=function(t,e,i,n){return this.isCanSetToRectForReal(t,e,i,n)},e.prototype.isCanSetToRectForReal=function(t,e,i,n){return this.isCanSetToRectForRectMax(e,i,1)},e.prototype.refreshForListTouchEnd=function(){t.prototype.refreshForListTouchEnd.call(this);for(var e=0;e<this.rectCanSetList.length;e++)if(this.targetDataMap[e]&&this.targetDataMap[e].length>0)if(1===this.targetDataMap[e].length){var i=this.targetDataMap[e][0];i.obj.x=this.rectCanSetList[e].x,i.obj.y=this.rectCanSetList[e].y}else if(2===this.targetDataMap[e].length){var i=this.targetDataMap[e][0],n=this.targetDataMap[e][1];i.obj.x=this.rectCanSetList[e].x-30,i.obj.y=this.rectCanSetList[e].y,n.obj.x=this.rectCanSetList[e].x+30,n.obj.y=this.rectCanSetList[e].y}},e.prototype.execMessage=function(e){t.prototype.execMessage.call(this,e),this.showCom.execMessage(e)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this),this.showCom.onDestroy()},e.key="OneClass_Move_Page3Scene",e}(DragAnyMakeRuleListCommonScene);__reflect(OneClass_Move_Page3Scene.prototype,"OneClass_Move_Page3Scene");var OneClass_Move_Page4Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page4Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){for(var e=0;10>e;e++)1>e&&this.rectCanSetList.push(this["rect"+e]),this.countImgList.push(1),this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.isCanSetToRect=function(t,e,i,n){return this.isCanSetToRectForReal(t,e,i,n)},e.prototype.isCanSetToRectForReal=function(t,e,i,n){return this.isCanSetToRectForRectMax(e,i,1)},e.prototype.refreshForListTouchEnd=function(){t.prototype.refreshForListTouchEnd.call(this);for(var e=0;e<this.rectCanSetList.length;e++)if(this.targetDataMap[e]&&this.targetDataMap[e].length>0)if(1===this.targetDataMap[e].length){var i=this.targetDataMap[e][0];i.obj.x=this.rectCanSetList[e].x,i.obj.y=this.rectCanSetList[e].y}else if(2===this.targetDataMap[e].length){var i=this.targetDataMap[e][0],n=this.targetDataMap[e][1];i.obj.x=this.rectCanSetList[e].x-30,i.obj.y=this.rectCanSetList[e].y,n.obj.x=this.rectCanSetList[e].x+30,n.obj.y=this.rectCanSetList[e].y}},e.prototype.execMessage=function(e){t.prototype.execMessage.call(this,e)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this)},e.key="OneClass_Move_Page4Scene",e}(DragAnyMakeRuleListCommonScene);__reflect(OneClass_Move_Page4Scene.prototype,"OneClass_Move_Page4Scene");var OneClass_Move_Page5Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page5Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){this.showCom=new ClickShow,this.showCom.ImgList.push(this.dc),this.showCom.GroupList.push(this.group0),this.showCom.onAdd();for(var e=0;11>e;e++)3>e&&this.rectCanSetList.push(this["rect"+e]),this.countImgList.push(1),this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.isCanSetToRect=function(t,e,i,n){return this.isCanSetToRectForReal(t,e,i,n)},e.prototype.isCanSetToRectForReal=function(t,e,i,n){return this.isCanSetToRectForRectMax(e,i,1)},e.prototype.refreshForListTouchEnd=function(){t.prototype.refreshForListTouchEnd.call(this);for(var e=0;e<this.rectCanSetList.length;e++)if(this.targetDataMap[e]&&this.targetDataMap[e].length>0)if(1===this.targetDataMap[e].length){var i=this.targetDataMap[e][0];i.obj.x=this.rectCanSetList[e].x,i.obj.y=this.rectCanSetList[e].y}else if(2===this.targetDataMap[e].length){var i=this.targetDataMap[e][0],n=this.targetDataMap[e][1];i.obj.x=this.rectCanSetList[e].x-30,i.obj.y=this.rectCanSetList[e].y,n.obj.x=this.rectCanSetList[e].x+30,n.obj.y=this.rectCanSetList[e].y}},e.prototype.execMessage=function(e){t.prototype.execMessage.call(this,e),this.showCom.execMessage(e)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this),this.showCom.onDestroy()},e.key="OneClass_Move_Page5Scene",e}(DragAnyMakeRuleListCommonScene);__reflect(OneClass_Move_Page5Scene.prototype,"OneClass_Move_Page5Scene");var OneClass_Move_Page6Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page6Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){for(var e=0;10>e;e++)1>e&&this.rectCanSetList.push(this["rect"+e]),this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.isCanSetToRect=function(t,e,i,n){return this.isCanSetToRectForReal(t,e,i,n)},e.prototype.isCanSetToRectForReal=function(t,e,i,n){return this.isCanSetToRectForRectMax(e,i,1)},e.prototype.refreshForListTouchEnd=function(){t.prototype.refreshForListTouchEnd.call(this);
for(var e=0;e<this.rectCanSetList.length;e++)if(this.targetDataMap[e]&&this.targetDataMap[e].length>0)if(1===this.targetDataMap[e].length){var i=this.targetDataMap[e][0];i.obj.x=this.rectCanSetList[e].x,i.obj.y=this.rectCanSetList[e].y}else if(2===this.targetDataMap[e].length){var i=this.targetDataMap[e][0],n=this.targetDataMap[e][1];i.obj.x=this.rectCanSetList[e].x-30,i.obj.y=this.rectCanSetList[e].y,n.obj.x=this.rectCanSetList[e].x+30,n.obj.y=this.rectCanSetList[e].y}},e.prototype.execMessage=function(e){t.prototype.execMessage.call(this,e)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this)},e.key="OneClass_Move_Page6Scene",e}(DragAnyMakeRuleListCommonScene);__reflect(OneClass_Move_Page6Scene.prototype,"OneClass_Move_Page6Scene");var OneClass_Move_Page7Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page7Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){for(var e=0;1>e;e++)1>e&&this.rectCanSetList.push(this["rect"+e]),this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.execMessage=function(e){t.prototype.execMessage.call(this,e)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this)},e.key="OneClass_Move_Page7Scene",e}(DragAnyMakeRuleListCommonScene);__reflect(OneClass_Move_Page7Scene.prototype,"OneClass_Move_Page7Scene");var OneClass_Move_Page8Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page8Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){for(var e=0;1>e;e++)1>e&&this.rectCanSetList.push(this["rect"+e]),this.ImgList.push(this["img"+e]);t.prototype.onAdd.call(this)},e.prototype.execMessage=function(e){t.prototype.execMessage.call(this,e)},e.prototype.onDestroy=function(){t.prototype.onDestroy.call(this)},e.key="OneClass_Move_Page8Scene",e}(DragAnyMakeRuleListCommonScene);__reflect(OneClass_Move_Page8Scene.prototype,"OneClass_Move_Page8Scene");var OneClass_Move_Page9Scene=function(t){function e(){var e=t.call(this)||this;return e.skinName="OneClass_Move_Page9Scene_Skin",e}return __extends(e,t),e.prototype.onAdd=function(){},e.prototype.onDestroy=function(){},e.key="OneClass_Move_Page9Scene",e}(UIObject);__reflect(OneClass_Move_Page9Scene.prototype,"OneClass_Move_Page9Scene");
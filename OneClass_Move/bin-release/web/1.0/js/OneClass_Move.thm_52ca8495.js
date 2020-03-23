
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/gamemain/game_skins/ClassOverScene/GetStarScene_Skin.exml'] = window.GetStarScene_Skin = (function (_super) {
	__extends(GetStarScene_Skin, _super);
	function GetStarScene_Skin() {
		_super.call(this);
		this.skinParts = ["lightImg","starImg","goImg"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GetStarScene_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this.lightImg_i(),this.starImg_i(),this.goImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lightImg_i = function () {
		var t = new eui.Image();
		this.lightImg = t;
		t.anchorOffsetX = 599;
		t.anchorOffsetY = 510;
		t.source = "star_light_png";
		t.x = 781;
		t.y = 549.51;
		return t;
	};
	_proto.starImg_i = function () {
		var t = new eui.Image();
		this.starImg = t;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.goImg_i = function () {
		var t = new eui.Image();
		this.goImg = t;
		t.source = "main_btn_out_png";
		t.x = 1394.88;
		t.y = 1177.88;
		return t;
	};
	return GetStarScene_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/CommonButton_Skin.exml'] = window.CommonButton_Skin = (function (_super) {
	__extends(CommonButton_Skin, _super);
	function CommonButton_Skin() {
		_super.call(this);
		this.skinParts = ["imgSrcName"];
		
		this.currentState = "up";
		this.elementsContent = [this.imgSrcName_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("imgSrcName","scaleX",1.1),
					new eui.SetProperty("imgSrcName","scaleY",1.1)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("imgSrcName","x",0),
					new eui.SetProperty("imgSrcName","y",0)
				])
		];
	}
	var _proto = CommonButton_Skin.prototype;

	_proto.imgSrcName_i = function () {
		var t = new eui.Image();
		this.imgSrcName = t;
		t.source = "showBtn_png";
		return t;
	};
	return CommonButton_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/Dlg_CommonMovie_Skin.exml'] = window.Dlg_CommonMovie_Skin = (function (_super) {
	__extends(Dlg_CommonMovie_Skin, _super);
	function Dlg_CommonMovie_Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Dlg_CommonMovie_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 1348;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1562;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Dlg_CommonMovie_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page10Scene/OneClass_Move_Page10Scene_Skin.exml'] = window.OneClass_Move_Page10Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page10Scene_Skin, _super);
	function OneClass_Move_Page10Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page10Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg10_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return OneClass_Move_Page10Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page11Scene/OneClass_Move_Page11Scene_Skin.exml'] = window.OneClass_Move_Page11Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page11Scene_Skin, _super);
	function OneClass_Move_Page11Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page11Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img10_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg11_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 340.85;
		t.y = 379.45;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 453.84;
		t.y = 379.45;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 565.99;
		t.y = 379.45;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 678.98;
		t.y = 379.45;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 788.71;
		t.y = 379.45;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 901.7;
		t.y = 379.45;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 1013.85;
		t.y = 379.45;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 1126.84;
		t.y = 379.45;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 1237.48;
		t.y = 379.45;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 56.06;
		t.anchorOffsetY = 56.06;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-1";
		t.x = 1350.47;
		t.y = 379.45;
		return t;
	};
	_proto.img10_i = function () {
		var t = new eui.Image();
		this.img10 = t;
		t.anchorOffsetX = 59.09;
		t.anchorOffsetY = 59.09;
		t.source = "OneClass_Move_big_page_scene11_json.OneClass_Move_11-2";
		t.x = 782.09;
		t.y = 1009.48;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 148.79;
		t.width = 1141.21;
		t.x = 273;
		t.y = 448;
		return t;
	};
	return OneClass_Move_Page11Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page12Scene/OneClass_Move_Page12Scene_Skin.exml'] = window.OneClass_Move_Page12Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page12Scene_Skin, _super);
	function OneClass_Move_Page12Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","rect0","rect1","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page12Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.rect0_i(),this.rect1_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg12_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 37.33;
		t.anchorOffsetY = 92;
		t.source = "OneClass_Move_big_page_scene12_json.OneClass_Move_12-1";
		t.x = 347.33;
		t.y = 398;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 37.33;
		t.anchorOffsetY = 92;
		t.source = "OneClass_Move_big_page_scene12_json.OneClass_Move_12-1";
		t.x = 445.21;
		t.y = 398;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 37.33;
		t.anchorOffsetY = 92;
		t.source = "OneClass_Move_big_page_scene12_json.OneClass_Move_12-1";
		t.x = 545.21;
		t.y = 398;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 37.33;
		t.anchorOffsetY = 92;
		t.source = "OneClass_Move_big_page_scene12_json.OneClass_Move_12-1";
		t.x = 643.09;
		t.y = 398;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 37.33;
		t.anchorOffsetY = 92;
		t.source = "OneClass_Move_big_page_scene12_json.OneClass_Move_12-1";
		t.x = 737.02;
		t.y = 398;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 37.33;
		t.anchorOffsetY = 92;
		t.source = "OneClass_Move_big_page_scene12_json.OneClass_Move_12-1";
		t.x = 837.02;
		t.y = 398;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 37.33;
		t.anchorOffsetY = 92;
		t.source = "OneClass_Move_big_page_scene12_json.OneClass_Move_12-1";
		t.x = 934.9;
		t.y = 398;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 39.39;
		t.anchorOffsetY = 89.39;
		t.source = "OneClass_Move_big_page_scene12_json.OneClass_Move_12-2";
		t.x = 782.41;
		t.y = 1016.77;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 192.72;
		t.width = 436.66;
		t.x = 964.85;
		t.y = 305.85;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 186.66;
		t.width = 1119.99;
		t.x = 289.55;
		t.y = 498.57;
		return t;
	};
	return OneClass_Move_Page12Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page13Scene/OneClass_Move_Page13Scene_Skin.exml'] = window.OneClass_Move_Page13Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page13Scene_Skin, _super);
	function OneClass_Move_Page13Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img3","img4","img5","img2","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page13Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img2_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg13_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 157.33;
		t.anchorOffsetY = 44;
		t.source = "OneClass_Move_big_page_scene13_json.OneClass_Move_13-1";
		t.x = 477.33;
		t.y = 596;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 157.33;
		t.anchorOffsetY = 44;
		t.source = "OneClass_Move_big_page_scene13_json.OneClass_Move_13-1";
		t.x = 807.34;
		t.y = 597.33;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 157.33;
		t.anchorOffsetY = 44;
		t.source = "OneClass_Move_big_page_scene13_json.OneClass_Move_13-1";
		t.x = 477.33;
		t.y = 749.92;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 157.33;
		t.anchorOffsetY = 44;
		t.source = "OneClass_Move_big_page_scene13_json.OneClass_Move_13-1";
		t.x = 807.34;
		t.y = 751.25;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 157.33;
		t.anchorOffsetY = 44;
		t.source = "OneClass_Move_big_page_scene13_json.OneClass_Move_13-1";
		t.x = 479.22;
		t.y = 879.42;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 157.33;
		t.anchorOffsetY = 44;
		t.source = "OneClass_Move_big_page_scene13_json.OneClass_Move_13-1";
		t.x = 1212.76;
		t.y = 597.33;
		return t;
	};
	return OneClass_Move_Page13Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page1Scene/OneClass_Move_Page1Scene_Skin.exml'] = window.OneClass_Move_Page1Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page1Scene_Skin, _super);
	function OneClass_Move_Page1Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page1Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return OneClass_Move_Page1Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page2Scene/OneClass_Move_Page2Scene_Skin.exml'] = window.OneClass_Move_Page2Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page2Scene_Skin, _super);
	function OneClass_Move_Page2Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","dc","img0","img1","img2","img3","img4","img5","img6","rect0","rect1","group0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page2Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.dc_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.rect0_i(),this.rect1_i(),this.group0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg2_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dc_i = function () {
		var t = new eui.Image();
		this.dc = t;
		t.source = "OneClass_Move_big_page_scene2_json.OneClass_Move_2-1";
		t.x = 668;
		t.y = 142;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene2_json.OneClass_Move_2-2";
		t.x = 322;
		t.y = 324;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene2_json.OneClass_Move_2-2";
		t.x = 474;
		t.y = 324;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene2_json.OneClass_Move_2-2";
		t.x = 616;
		t.y = 326;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene2_json.OneClass_Move_2-2";
		t.x = 780;
		t.y = 328;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene2_json.OneClass_Move_2-2";
		t.x = 930;
		t.y = 326;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene2_json.OneClass_Move_2-2";
		t.x = 1084;
		t.y = 324;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene2_json.OneClass_Move_2-2";
		t.x = 1238;
		t.y = 324;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 158;
		t.width = 158;
		t.x = 778;
		t.y = 824;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 158;
		t.width = 158;
		t.x = 934;
		t.y = 824;
		return t;
	};
	_proto.group0_i = function () {
		var t = new eui.Group();
		this.group0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 142;
		t.x = 1326;
		t.y = 978;
		return t;
	};
	return OneClass_Move_Page2Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page3Scene/OneClass_Move_Page3Scene_Skin.exml'] = window.OneClass_Move_Page3Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page3Scene_Skin, _super);
	function OneClass_Move_Page3Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","dc","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","rect1","rect2","group0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page3Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.dc_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i(),this.rect1_i(),this.rect2_i(),this.group0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg3_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dc_i = function () {
		var t = new eui.Image();
		this.dc = t;
		t.source = "OneClass_Move_big_page_scene2_json.OneClass_Move_2-1";
		t.x = 761;
		t.y = 276;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 310;
		t.y = 834;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 440;
		t.y = 834;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 571;
		t.y = 832;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 705;
		t.y = 832;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 860;
		t.y = 832;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 982;
		t.y = 832;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 1105;
		t.y = 832;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 1225;
		t.y = 832;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 1346;
		t.y = 830;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.source = "OneClass_Move_big_page_scene3_json.OneClass_Move_3-2";
		t.x = 1468;
		t.y = 830;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 68.86;
		t.anchorOffsetY = 75.95;
		t.fillAlpha = 0;
		t.height = 150;
		t.width = 136;
		t.x = 866.86;
		t.y = 531.95;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 68.86;
		t.anchorOffsetY = 75.95;
		t.fillAlpha = 0;
		t.height = 150;
		t.width = 136;
		t.x = 986.86;
		t.y = 529.95;
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.anchorOffsetX = 68.86;
		t.anchorOffsetY = 75.95;
		t.fillAlpha = 0;
		t.height = 150;
		t.width = 136;
		t.x = 1110.86;
		t.y = 527.95;
		return t;
	};
	_proto.group0_i = function () {
		var t = new eui.Group();
		this.group0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.width = 142;
		t.x = 1326;
		t.y = 978;
		return t;
	};
	return OneClass_Move_Page3Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page4Scene/OneClass_Move_Page4Scene_Skin.exml'] = window.OneClass_Move_Page4Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page4Scene_Skin, _super);
	function OneClass_Move_Page4Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page4Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg4_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-1";
		t.x = 205.52;
		t.y = 1111.08;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 86;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-2";
		t.x = 326.94;
		t.y = 1112.23;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-3";
		t.x = 457.96;
		t.y = 1111.08;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 62.12;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-4";
		t.x = 583.5;
		t.y = 1111.08;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-5";
		t.x = 715.52;
		t.y = 1111.08;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 84;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-6";
		t.x = 838.94;
		t.y = 1110.23;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-7";
		t.x = 967.96;
		t.y = 1111.08;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 84;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-8";
		t.x = 1091.38;
		t.y = 1110.23;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-9";
		t.x = 1217.36;
		t.y = 1111.08;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 84;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-10";
		t.x = 1342.78;
		t.y = 1110.23;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 102;
		t.fillAlpha = 0;
		t.height = 204;
		t.width = 204;
		t.x = 410;
		t.y = 906;
		return t;
	};
	return OneClass_Move_Page4Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page5Scene/OneClass_Move_Page5Scene_Skin.exml'] = window.OneClass_Move_Page5Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page5Scene_Skin, _super);
	function OneClass_Move_Page5Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","dc","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","rect0","rect1","rect2","group0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page5Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.dc_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img10_i(),this.rect0_i(),this.rect1_i(),this.rect2_i(),this.group0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg5_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dc_i = function () {
		var t = new eui.Image();
		this.dc = t;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-1";
		t.x = 868.67;
		t.y = 297.18;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 366;
		t.y = 455;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 478;
		t.y = 455;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 591;
		t.y = 455;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 703;
		t.y = 455;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 820.67;
		t.y = 457;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 956;
		t.y = 459;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 1068;
		t.y = 459;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 1173;
		t.y = 461;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 1285;
		t.y = 461;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 1400.67;
		t.y = 465;
		return t;
	};
	_proto.img10_i = function () {
		var t = new eui.Image();
		this.img10 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 100;
		t.source = "OneClass_Move_big_page_scene5_json.OneClass_Move_5-2";
		t.x = 1504.67;
		t.y = 467;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 51.76;
		t.anchorOffsetY = 98;
		t.fillAlpha = 0;
		t.height = 186;
		t.width = 110;
		t.x = 953.76;
		t.y = 906;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 51.76;
		t.anchorOffsetY = 98;
		t.fillAlpha = 0;
		t.height = 186;
		t.width = 110;
		t.x = 1064.76;
		t.y = 906;
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.anchorOffsetX = 51.76;
		t.anchorOffsetY = 98;
		t.fillAlpha = 0;
		t.height = 186;
		t.width = 110;
		t.x = 1177.76;
		t.y = 906;
		return t;
	};
	_proto.group0_i = function () {
		var t = new eui.Group();
		this.group0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.width = 152;
		t.x = 1318;
		t.y = 998;
		return t;
	};
	return OneClass_Move_Page5Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page6Scene/OneClass_Move_Page6Scene_Skin.exml'] = window.OneClass_Move_Page6Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page6Scene_Skin, _super);
	function OneClass_Move_Page6Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page6Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg6_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-1";
		t.x = 191.52;
		t.y = 1207.08;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 86;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-2";
		t.x = 312.94;
		t.y = 1208.23;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-3";
		t.x = 443.96;
		t.y = 1207.08;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 62.12;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-4";
		t.x = 569.5;
		t.y = 1207.08;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-5";
		t.x = 701.52;
		t.y = 1207.08;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 84;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-6";
		t.x = 824.94;
		t.y = 1206.23;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-7";
		t.x = 953.96;
		t.y = 1207.08;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 84;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-8";
		t.x = 1077.38;
		t.y = 1206.23;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 57.58;
		t.anchorOffsetY = 84.85;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-9";
		t.x = 1203.36;
		t.y = 1207.08;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 84;
		t.source = "OneClass_Move_big_page_scene4_json.OneClass_Move_4-10";
		t.x = 1328.78;
		t.y = 1206.23;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 95.5;
		t.anchorOffsetY = 91.39;
		t.fillAlpha = 0;
		t.height = 182.79;
		t.width = 187.33;
		t.x = 602.82;
		t.y = 1041.9;
		return t;
	};
	return OneClass_Move_Page6Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page7Scene/OneClass_Move_Page7Scene_Skin.exml'] = window.OneClass_Move_Page7Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page7Scene_Skin, _super);
	function OneClass_Move_Page7Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page7Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg7_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 122;
		t.source = "OneClass_Move_big_page_scene7_json.OneClass_Move_7-1";
		t.x = 1352;
		t.y = 1146;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 254;
		t.width = 1370;
		t.x = 192;
		t.y = 702;
		return t;
	};
	return OneClass_Move_Page7Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page8Scene/OneClass_Move_Page8Scene_Skin.exml'] = window.OneClass_Move_Page8Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page8Scene_Skin, _super);
	function OneClass_Move_Page8Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page8Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg8_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 106;
		t.source = "OneClass_Move_big_page_scene8_json.OneClass_Move_8-1";
		t.x = 1478;
		t.y = 1014;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 262;
		t.width = 1374;
		t.x = 186;
		t.y = 678;
		return t;
	};
	return OneClass_Move_Page8Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/OneClass_Move/game_skins/OneClass_Move_Page9Scene/OneClass_Move_Page9Scene_Skin.exml'] = window.OneClass_Move_Page9Scene_Skin = (function (_super) {
	__extends(OneClass_Move_Page9Scene_Skin, _super);
	function OneClass_Move_Page9Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = OneClass_Move_Page9Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1352;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "OneClass_Move_page_scene_bg9_jpg";
		t.width = 1563;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return OneClass_Move_Page9Scene_Skin;
})(eui.Skin);
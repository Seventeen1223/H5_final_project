(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"qh_atlas_", frames: [[0,0,787,597],[789,502,759,482],[789,0,764,500],[0,1430,640,400],[823,986,796,348],[0,599,779,359],[0,986,821,442],[823,1336,778,356],[642,1694,772,320]]},
		{name:"qh_atlas_2", frames: [[424,951,200,200],[626,951,200,200],[424,764,488,185],[0,683,422,319],[642,0,320,319],[0,362,524,319],[526,362,400,400],[0,0,640,360]]}
];


// symbols:



(lib.向右 = function() {
	this.initialize(ss["qh_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.向左1 = function() {
	this.initialize(ss["qh_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["qh_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["qh_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["qh_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["qh_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.位图19复制 = function() {
	this.initialize(ss["qh_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.位图20复制 = function() {
	this.initialize(ss["qh_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.位图21复制 = function() {
	this.initialize(ss["qh_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.位图22 = function() {
	this.initialize(ss["qh_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.位图23 = function() {
	this.initialize(ss["qh_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.位图24 = function() {
	this.initialize(ss["qh_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.位图28 = function() {
	this.initialize(ss["qh_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.位图29 = function() {
	this.initialize(ss["qh_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.位图30 = function() {
	this.initialize(ss["qh_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.位图31 = function() {
	this.initialize(ss["qh_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.位图32 = function() {
	this.initialize(ss["qh_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2753,0.2753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.2,87.8);


(lib.元件_12_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(-70.65,-37.3,0.2753,0.2753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件_12_图层_1, null, null);


(lib.元件_11_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(-70.65,-44.05,0.2753,0.2753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件_11_图层_1, null, null);


(lib.元件_8_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.向右();
	this.instance.parent = this;
	this.instance.setTransform(-33,-33,0.7249,0.7249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件_8_图层_1, null, null);


(lib.元件_7_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.向左1();
	this.instance.parent = this;
	this.instance.setTransform(-700,801,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件_7_图层_1, null, null);


(lib.场景_1_标题 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 标题
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(354.75,16.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

}).prototype = p = new cjs.MovieClip();


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.元件_12_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(1.4,6.6,1,1,0,0,0,1.4,6.6);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(-70.6,-37.3,144.2,87.8), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.元件_11_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(-26.6,-0.1,1,1,0,0,0,-26.6,-0.1);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(-70.6,-44,88.1,87.8), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.元件_8_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(39.5,39.5,1,1,0,0,0,39.5,39.5);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-33,-33,145,145), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.元件_7_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(-627.5,873.5,1,1,0,0,0,-627.5,873.5);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-700,801,145,145), null);


(lib.元件_6_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.movieClip_3 = new lib.元件8();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件_6_图层_1, null, null);


(lib.元件_5_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(20.3,118.65);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.元件3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.3,240.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.元件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,36.4,40.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件_5_图层_1, null, null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.movieClip_3 = this.图层_1.movieClip_3;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1_obj_
	this.图层_1 = new lib.元件_6_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(39.5,39.5,1,1,0,0,0,39.5,39.5);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-33,-33,145,145), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.元件_5_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(21.7,100.1,1,1,0,0,0,21.7,100.1);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-36.4,-40.5,116.19999999999999,87.8), null);


(lib.元件_4_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,181.95,1.8163,1.8163,0,0,0,0,100.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件_4_图层_1, null, null);


(lib.场景_1_ppt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ppt
	this.instance = new lib.位图30();
	this.instance.parent = this;
	this.instance.setTransform(281,274);

	this.movieClip_2 = new lib.元件6();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(897,766.7,1.0001,1.0001);

	this.instance_1 = new lib.位图31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(260,310);

	this.movieClip_4 = new lib.元件7();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(382.1,827.5,1,1,0,0,0,-609.6,873.5);

	this.movieClip_5 = new lib.元件8();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.parent = this;
	this.movieClip_5.setTransform(897,788,1.0001,1.0001);

	this.instance_2 = new lib.位图32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(317,284);

	this.movieClip_6 = new lib.元件7();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.parent = this;
	this.movieClip_6.setTransform(378.5,827.5,1,1,0,0,0,-627.5,873.5);

	this.movieClip_7 = new lib.元件8();
	this.movieClip_7.name = "movieClip_7";
	this.movieClip_7.parent = this;
	this.movieClip_7.setTransform(936.5,827.5,1,1,0,0,0,39.5,39.5);

	this.instance_3 = new lib.位图19复制();
	this.instance_3.parent = this;
	this.instance_3.setTransform(281,141);

	this.movieClip_8 = new lib.元件7();
	this.movieClip_8.name = "movieClip_8";
	this.movieClip_8.parent = this;
	this.movieClip_8.setTransform(361.8,827.5,1,1,0,0,0,-627.5,873.5);

	this.movieClip_9 = new lib.元件8();
	this.movieClip_9.name = "movieClip_9";
	this.movieClip_9.parent = this;
	this.movieClip_9.setTransform(919.8,827.5,1,1,0,0,0,39.5,39.5);

	this.instance_4 = new lib.位图20复制();
	this.instance_4.parent = this;
	this.instance_4.setTransform(295,227);

	this.movieClip_10 = new lib.元件7();
	this.movieClip_10.name = "movieClip_10";
	this.movieClip_10.parent = this;
	this.movieClip_10.setTransform(367.75,827.5,1,1,0,0,0,-627.5,873.5);

	this.movieClip_11 = new lib.元件8();
	this.movieClip_11.name = "movieClip_11";
	this.movieClip_11.parent = this;
	this.movieClip_11.setTransform(925.75,827.5,1,1,0,0,0,39.5,39.5);

	this.instance_5 = new lib.位图21复制();
	this.instance_5.parent = this;
	this.instance_5.setTransform(281,218);

	this.movieClip_12 = new lib.元件7();
	this.movieClip_12.name = "movieClip_12";
	this.movieClip_12.parent = this;
	this.movieClip_12.setTransform(367.8,827.5,1,1,0,0,0,-627.5,873.5);

	this.movieClip_13 = new lib.元件8();
	this.movieClip_13.name = "movieClip_13";
	this.movieClip_13.parent = this;
	this.movieClip_13.setTransform(925.8,827.5,1,1,0,0,0,39.5,39.5);

	this.instance_6 = new lib.位图22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(423,242);

	this.movieClip_14 = new lib.元件7();
	this.movieClip_14.name = "movieClip_14";
	this.movieClip_14.parent = this;
	this.movieClip_14.setTransform(378.5,823.5,1,1,0,0,0,-627.5,873.5);

	this.movieClip_15 = new lib.元件8();
	this.movieClip_15.name = "movieClip_15";
	this.movieClip_15.parent = this;
	this.movieClip_15.setTransform(936.5,823.5,1,1,0,0,0,39.5,39.5);

	this.instance_7 = new lib.位图23();
	this.instance_7.parent = this;
	this.instance_7.setTransform(330,259);

	this.movieClip_16 = new lib.元件7();
	this.movieClip_16.name = "movieClip_16";
	this.movieClip_16.parent = this;
	this.movieClip_16.setTransform(378.5,825.5,1,1,0,0,0,-627.5,873.5);

	this.movieClip_17 = new lib.元件8();
	this.movieClip_17.name = "movieClip_17";
	this.movieClip_17.parent = this;
	this.movieClip_17.setTransform(936.5,825.5,1,1,0,0,0,39.5,39.5);

	this.instance_8 = new lib.位图24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(262,283);

	this.movieClip_18 = new lib.元件7();
	this.movieClip_18.name = "movieClip_18";
	this.movieClip_18.parent = this;
	this.movieClip_18.setTransform(378.5,823.5,1,1,0,0,0,-627.5,873.5);

	this.movieClip_19 = new lib.元件8();
	this.movieClip_19.name = "movieClip_19";
	this.movieClip_19.parent = this;
	this.movieClip_19.setTransform(936.5,823.5,1,1,0,0,0,39.5,39.5);

	this.instance_9 = new lib.位图28();
	this.instance_9.parent = this;
	this.instance_9.setTransform(249,272);

	this.movieClip_20 = new lib.元件7();
	this.movieClip_20.name = "movieClip_20";
	this.movieClip_20.parent = this;
	this.movieClip_20.setTransform(378.5,820.7,1,1,0,0,0,-627.5,873.5);

	this.movieClip_21 = new lib.元件8();
	this.movieClip_21.name = "movieClip_21";
	this.movieClip_21.parent = this;
	this.movieClip_21.setTransform(936.5,820.7,1,1,0,0,0,39.5,39.5);

	this.instance_10 = new lib.位图29();
	this.instance_10.parent = this;
	this.instance_10.setTransform(249,259);

	this.movieClip_22 = new lib.元件7();
	this.movieClip_22.name = "movieClip_22";
	this.movieClip_22.parent = this;
	this.movieClip_22.setTransform(378.5,822.75,1,1,0,0,0,-627.5,873.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_2},{t:this.instance}]}).to({state:[{t:this.movieClip_5},{t:this.movieClip_4},{t:this.instance_1}]},1).to({state:[{t:this.movieClip_7},{t:this.movieClip_6},{t:this.instance_2}]},1).to({state:[{t:this.movieClip_9},{t:this.movieClip_8},{t:this.instance_3}]},1).to({state:[{t:this.movieClip_11},{t:this.movieClip_10},{t:this.instance_4}]},1).to({state:[{t:this.movieClip_13},{t:this.movieClip_12},{t:this.instance_5}]},1).to({state:[{t:this.movieClip_15},{t:this.movieClip_14},{t:this.instance_6}]},1).to({state:[{t:this.movieClip_17},{t:this.movieClip_16},{t:this.instance_7}]},1).to({state:[{t:this.movieClip_19},{t:this.movieClip_18},{t:this.instance_8}]},1).to({state:[{t:this.movieClip_21},{t:this.movieClip_20},{t:this.instance_9}]},1).to({state:[{t:this.movieClip_22},{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.元件_4_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(39.4,181.8,1,1,0,0,0,39.4,181.8);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(-66.1,-73.6,211,159.5), null);


(lib.场景_1_目录 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 目录
	this.movieClip_1 = new lib.元件4();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(104.2,458.4,1,1,0,0,0,0,181.8);

	this.movieClip_8 = new lib.元件12();
	this.movieClip_8.name = "movieClip_8";
	this.movieClip_8.parent = this;
	this.movieClip_8.setTransform(147.2,769,1.8163,1.8163);
	new cjs.ButtonHelper(this.movieClip_8, 0, 1, 1);

	this.movieClip_7 = new lib.元件11();
	this.movieClip_7.name = "movieClip_7";
	this.movieClip_7.parent = this;
	this.movieClip_7.setTransform(166.5,532.5,1.8163,1.8163);
	new cjs.ButtonHelper(this.movieClip_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_7},{t:this.movieClip_8},{t:this.movieClip_1}]}).wait(11));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.qh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.movieClip_2 = this.ppt.movieClip_2;
		this.movieClip_7 = this.目录.movieClip_7;
		this.movieClip_8 = this.目录.movieClip_8;
		this.movieClip_1 = this.目录.movieClip_1;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7() {
			this.gotoAndStop(0);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8() {
			this.gotoAndStop(3);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_8.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9() {
			this.gotoAndStop(7);
		}
		
		
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12() {
			this.gotoAndStop(1);
		}
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		this.movieClip_2 = undefined;this.movieClip_5 = this.ppt.movieClip_5;
		this.movieClip_4 = this.ppt.movieClip_4;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(0);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_5.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.movieClip_5 = undefined;this.movieClip_4 = undefined;this.movieClip_7 = this.ppt.movieClip_7;
		this.movieClip_6 = this.ppt.movieClip_6;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_6.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			this.gotoAndStop(1);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_7.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.movieClip_7 = undefined;this.movieClip_6 = undefined;this.movieClip_9 = this.ppt.movieClip_9;
		this.movieClip_8 = this.ppt.movieClip_8;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_8.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_17()
		{
			this.gotoAndStop(2);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_9.addEventListener("click", fl_ClickToGoToAndStopAtFrame_18.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_18()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		this.movieClip_9 = undefined;this.movieClip_8 = undefined;this.movieClip_11 = this.ppt.movieClip_11;
		this.movieClip_10 = this.ppt.movieClip_10;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_19()
		{
			this.gotoAndStop(3);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_11.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.movieClip_11 = undefined;this.movieClip_10 = undefined;this.movieClip_13 = this.ppt.movieClip_13;
		this.movieClip_12 = this.ppt.movieClip_12;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_12.addEventListener("click", fl_ClickToGoToAndStopAtFrame_21.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_21()
		{
			this.gotoAndStop(4);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_13.addEventListener("click", fl_ClickToGoToAndStopAtFrame_22.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_22()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_6 = function() {
		this.movieClip_13 = undefined;this.movieClip_12 = undefined;this.movieClip_15 = this.ppt.movieClip_15;
		this.movieClip_14 = this.ppt.movieClip_14;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_14.addEventListener("click", fl_ClickToGoToAndStopAtFrame_23.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_23()
		{
			this.gotoAndStop(5);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_15.addEventListener("click", fl_ClickToGoToAndStopAtFrame_24.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_24()
		{
			this.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		this.movieClip_15 = undefined;this.movieClip_14 = undefined;this.movieClip_17 = this.ppt.movieClip_17;
		this.movieClip_16 = this.ppt.movieClip_16;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_16.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_25()
		{
			this.gotoAndStop(6);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_17.addEventListener("click", fl_ClickToGoToAndStopAtFrame_26.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_26()
		{
			this.gotoAndStop(8);
		}
	}
	this.frame_8 = function() {
		this.movieClip_17 = undefined;this.movieClip_16 = undefined;this.movieClip_19 = this.ppt.movieClip_19;
		this.movieClip_18 = this.ppt.movieClip_18;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_18.addEventListener("click", fl_ClickToGoToAndStopAtFrame_27.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_27()
		{
			this.gotoAndStop(7);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_19.addEventListener("click", fl_ClickToGoToAndStopAtFrame_28.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_28()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		this.movieClip_19 = undefined;this.movieClip_18 = undefined;this.movieClip_21 = this.ppt.movieClip_21;
		this.movieClip_20 = this.ppt.movieClip_20;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_20.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(8);
		}
		
		
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_21.addEventListener("click", fl_ClickToGoToAndStopAtFrame_30.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_30()
		{
			this.gotoAndStop(10);
		}
	}
	this.frame_10 = function() {
		this.movieClip_21 = undefined;this.movieClip_20 = undefined;this.movieClip_22 = this.ppt.movieClip_22;
		this.___loopingOver___ = true;
		/* 单击以转到帧并停止
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并停止影片。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		
		this.movieClip_22.addEventListener("click", fl_ClickToGoToAndStopAtFrame_31.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_31()
		{
			this.gotoAndStop(9);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// ppt_obj_
	this.ppt = new lib.场景_1_ppt();
	this.ppt.name = "ppt";
	this.ppt.parent = this;
	this.ppt.setTransform(670,576.4,1,1,0,0,0,670,576.4);
	this.ppt.depth = 0;
	this.ppt.isAttachedToCamera = 0
	this.ppt.isAttachedToMask = 0
	this.ppt.layerDepth = 0
	this.ppt.layerIndex = 0
	this.ppt.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ppt).wait(11));

	// 目录_obj_
	this.目录 = new lib.场景_1_目录();
	this.目录.name = "目录";
	this.目录.parent = this;
	this.目录.setTransform(149.9,531.9,1,1,0,0,0,149.9,531.9);
	this.目录.depth = 0;
	this.目录.isAttachedToCamera = 0
	this.目录.isAttachedToMask = 0
	this.目录.layerDepth = 0
	this.目录.layerIndex = 1
	this.目录.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.目录).wait(11));

	// 标题_obj_
	this.标题 = new lib.场景_1_标题();
	this.标题.name = "标题";
	this.标题.parent = this;
	this.标题.setTransform(476.8,62.5,1,1,0,0,0,476.8,62.5);
	this.标题.depth = 0;
	this.标题.isAttachedToCamera = 0
	this.标题.isAttachedToMask = 0
	this.标题.layerDepth = 0
	this.标题.layerIndex = 2
	this.标题.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.标题).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(558.9,466.2,511.1,433.8);
// library properties:
lib.properties = {
	id: 'AB39DD05D445410A996F4CEFF464D367',
	width: 1080,
	height: 900,
	fps: 24,
	color: "#996633",
	opacity: 1.00,
	manifest: [
		{src:"images/qh_atlas_.png", id:"qh_atlas_"},
		{src:"images/qh_atlas_2.png", id:"qh_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AB39DD05D445410A996F4CEFF464D367'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
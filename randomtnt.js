(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"randomtnt_atlas_", frames: [[0,0,1500,1499]]},
		{name:"randomtnt_atlas_2", frames: [[0,1501,640,480],[1296,1501,200,150],[1282,1713,213,176],[858,1713,210,217],[1070,1713,210,217],[858,1501,217,210],[1077,1501,217,210],[1502,0,502,386],[1502,892,502,386],[1502,388,386,502],[1502,1280,386,502],[642,1501,214,394],[0,0,1500,1499],[1497,1784,200,150],[1699,1784,200,150]]}
];


// symbols:



(lib.die = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.drew = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.explosion = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mach1 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mach2 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mach3 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.mach4 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.R1 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.R2 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.R3 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.R4 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.score_background1 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.tnt1 = function() {
	this.initialize(ss["randomtnt_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.tnt2 = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.winner = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.wtf = function() {
	this.initialize(ss["randomtnt_atlas_2"]);
	this.gotoAndStop(14);
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


(lib.tnt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{explore:0,shing:10});

	// timeline functions:
	this.frame_8 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.gotoAndPlay("shing");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1).call(this.frame_9).wait(19).call(this.frame_28).wait(1));

	// 圖層_1
	this.instance = new lib.explosion();
	this.instance.parent = this;
	this.instance.setTransform(-36,-29,0.3287,0.3284);

	this.instance_1 = new lib.explosion();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15,-29,0.2388,0.2891);

	this.instance_2 = new lib.explosion();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-26,-16,0.2388,0.2891);

	this.instance_3 = new lib.explosion();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26,-39,0.2388,0.2891);

	this.instance_4 = new lib.explosion();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-38,-29,0.2388,0.2891);

	this.instance_5 = new lib.explosion();
	this.instance_5.parent = this;
	this.instance_5.setTransform(8,-29,0.2388,0.2891);

	this.instance_6 = new lib.explosion();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-26,0,0.2388,0.2891);

	this.instance_7 = new lib.explosion();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-26,-58,0.2388,0.2891);

	this.instance_8 = new lib.explosion();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-64,-29,0.2388,0.2891);

	this.instance_9 = new lib.tnt1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-25,-26,0.0333,0.0334);
	this.instance_9._off = true;

	this.instance_10 = new lib.tnt2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-25,-26,0.0334,0.0334);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.3287,scaleY:0.3284,x:-36}}]}).to({state:[{t:this.instance_4,p:{x:-38,y:-29}},{t:this.instance_3,p:{y:-39}},{t:this.instance_2,p:{y:-16,x:-26}},{t:this.instance_1,p:{x:-15,y:-29}},{t:this.instance,p:{scaleX:0.2388,scaleY:0.2891,x:-26}}]},1).to({state:[{t:this.instance_4,p:{x:-43,y:-29}},{t:this.instance_3,p:{y:-39}},{t:this.instance_2,p:{y:-14,x:-26}},{t:this.instance_1,p:{x:-9,y:-29}},{t:this.instance,p:{scaleX:0.2388,scaleY:0.2891,x:-26}}]},1).to({state:[{t:this.instance_4,p:{x:-52,y:-28}},{t:this.instance_3,p:{y:-56}},{t:this.instance_2,p:{y:-7,x:-27}},{t:this.instance_1,p:{x:-3,y:-29}},{t:this.instance,p:{scaleX:0.2388,scaleY:0.2891,x:-26}}]},1).to({state:[{t:this.instance_8,p:{x:-64}},{t:this.instance_7,p:{y:-58}},{t:this.instance_6,p:{y:0}},{t:this.instance_5,p:{x:8}},{t:this.instance_4,p:{x:-51,y:-29}},{t:this.instance_3,p:{y:-18}},{t:this.instance_2,p:{y:-29,x:0}},{t:this.instance_1,p:{x:-26,y:-43}},{t:this.instance,p:{scaleX:0.2388,scaleY:0.2891,x:-26}}]},1).to({state:[{t:this.instance_8,p:{x:-77}},{t:this.instance_7,p:{y:-74}},{t:this.instance_6,p:{y:13}},{t:this.instance_5,p:{x:25}},{t:this.instance_4,p:{x:-51,y:-29}},{t:this.instance_3,p:{y:-12}},{t:this.instance_2,p:{y:-29,x:0}},{t:this.instance_1,p:{x:-26,y:-49}},{t:this.instance,p:{scaleX:0.2388,scaleY:0.2891,x:-26}}]},1).to({state:[{t:this.instance_8,p:{x:-77}},{t:this.instance_7,p:{y:-74}},{t:this.instance_6,p:{y:13}},{t:this.instance_5,p:{x:25}},{t:this.instance_4,p:{x:-51,y:-29}},{t:this.instance_3,p:{y:-12}},{t:this.instance_2,p:{y:-29,x:0}},{t:this.instance_1,p:{x:-26,y:-49}},{t:this.instance,p:{scaleX:0.2388,scaleY:0.2891,x:-26}}]},1).to({state:[{t:this.instance_8,p:{x:-77}},{t:this.instance_7,p:{y:-74}},{t:this.instance_6,p:{y:13}},{t:this.instance_5,p:{x:25}},{t:this.instance_4,p:{x:-51,y:-29}},{t:this.instance_3,p:{y:-12}},{t:this.instance_2,p:{y:-29,x:0}},{t:this.instance_1,p:{x:-26,y:-49}},{t:this.instance,p:{scaleX:0.2388,scaleY:0.2891,x:-26}}]},1).to({state:[{t:this.instance_8,p:{x:-77}},{t:this.instance_7,p:{y:-74}},{t:this.instance_6,p:{y:13}},{t:this.instance_5,p:{x:25}},{t:this.instance_4,p:{x:-51,y:-29}},{t:this.instance_3,p:{y:-12}},{t:this.instance_2,p:{y:-29,x:0}},{t:this.instance_1,p:{x:-26,y:-49}},{t:this.instance,p:{scaleX:0.2388,scaleY:0.2891,x:-26}}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).wait(9).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-74,152.9,137.9);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{winner:0,drew:1,wtf:2,none:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 圖層_1
	this.instance = new lib.winner();
	this.instance.parent = this;
	this.instance.setTransform(-100,-75);

	this.instance_1 = new lib.drew();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100,-75);

	this.instance_2 = new lib.wtf();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-100,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-75,200,150);


(lib.roboter2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,down:2,right:4,left:6,"explore":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(20).call(this.frame_27).wait(1));

	// 圖層_1
	this.instance = new lib.mach1();
	this.instance.parent = this;
	this.instance.setTransform(-25,-23,0.238,0.2304);

	this.instance_1 = new lib.mach2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25,-27,0.2381,0.2304);

	this.instance_2 = new lib.mach3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27,-25,0.2304,0.2381);

	this.instance_3 = new lib.mach4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-24,-25,0.2304,0.2381);

	this.instance_4 = new lib.die();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-26,-28,0.0781,0.1042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-28,53,55);


(lib.roboter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"up":0,"down":2,"right":4,"left":6,"explore":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(20).call(this.frame_27).wait(1));

	// 圖層_1
	this.instance = new lib.R1();
	this.instance.parent = this;
	this.instance.setTransform(-24,-19,0.0996,0.0996);

	this.instance_1 = new lib.R2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26,-19,0.0996,0.0996);

	this.instance_2 = new lib.R3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20,-25,0.0997,0.0996);

	this.instance_3 = new lib.R4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-19,-25,0.0995,0.0996);

	this.instance_4 = new lib.die();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-25,-28,0.0781,0.1042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:-26}}]},1).to({state:[{t:this.instance_1,p:{x:-25}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.0997,x:-20,y:-25}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.0995,x:-19,y:-24}}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-28,52,54);


(lib.場景_1_圖層_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.score_background1();
	this.instance.parent = this;
	this.instance.setTransform(600,0,1.1215,1.5228);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.場景_1_圖層_1, null, null);


// stage content:
(lib.randomtnt = function(mode,startPosition,loop) {
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

	// 圖層_1_obj_
	this.圖層_1 = new lib.場景_1_圖層_1();
	this.圖層_1.name = "圖層_1";
	this.圖層_1.parent = this;
	this.圖層_1.setTransform(720,300,1,1,0,0,0,720,300);
	this.圖層_1.depth = 0;
	this.圖層_1.isAttachedToCamera = 0
	this.圖層_1.isAttachedToMask = 0
	this.圖層_1.layerDepth = 0
	this.圖層_1.layerIndex = 0
	this.圖層_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.圖層_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1020,300,-180,300);
// library properties:
lib.properties = {
	id: '3A878DA777B9B2498894A507960B3148',
	width: 840,
	height: 600,
	fps: 24,
	color: "#FFCC99",
	opacity: 1.00,
	manifest: [
		{src:"images/randomtnt_atlas_.png?1593238775844", id:"randomtnt_atlas_"},
		{src:"images/randomtnt_atlas_2.png?1593238775845", id:"randomtnt_atlas_2"}
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
an.compositions['3A878DA777B9B2498894A507960B3148'] = {
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
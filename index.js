var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
window.onload = function () {
	init();
}
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp = AdobeAn.getComposition("3A878DA777B9B2498894A507960B3148");
	var lib = comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
	loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
	var lib = comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images = comp.getImages();
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt, comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib = comp.getLibrary();
	var ss = comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for (i = 0; i < ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
	}
	exportRoot = new lib.randomtnt();
	stage = new lib.Stage(canvas);

	const STEP = 50;
	const TNT = 2;
	let canplay = false;
	let step = 1;
	let isKeyDown = false;
	var blocks = [1213];
	let end = false;
	let delay = 500;

	//Player1
	let p1die = false;
	let udlr = true;
	var robot = new lib.roboter();
	var player1_x = 12;
	var player1_y = 1;
	robot.x = 575;
	robot.y = 25;
	exportRoot.addChild(robot);
	robot.gotoAndPlay("down");

	//Player2
	let p2die = false;
	let step2 = 1;
	let udlr2 = true;
	var robot2 = new lib.roboter2();
	var player2_x = 1;
	var player2_y = 12;
	robot2.x = 25;
	robot2.y = 575;
	exportRoot.addChild(robot2);
	robot2.gotoAndPlay("up");

	var end_title = new lib.text();
	exportRoot.addChild(end_title);
	end_title.gotoAndPlay("none");
	let endtitle = false;

	var loadpoint = 0;
	var sounds = [
		{ src: "./assets/bgm1.mp3", id: "bg1" },
		{ src: "./assets/bgm4.mp3", id: "bg4" },
		{ src: "./assets/bgm6.mp3", id: "bg6" },
		{ src: "./assets/bgm8.mp3", id: "bg8" },
		{ src: "./assets/explode1.mp3", id: "exp1" },
		{ src: "./assets/explode2.mp3", id: "exp2" },
		{ src: "./assets/explode3.mp3", id: "exp3" },
		{ src: "./assets/explode4.mp3", id: "exp4" },
		{ src: "./assets/fuse.mp3", id: "fuse" },
		{ src: "./assets/point.mp3", id: "point" },
		{ src: "./assets/dead.mp3", id: "dead" },
	];
	createjs.Sound.alternateExtensions = ["mp3"];
	createjs.Sound.addEventListener("fileload", (e) => {
		loadpoint++;
		document.getElementById("reload_back").innerHTML = "載入中(" + parseInt(loadpoint / (sounds.length - 1) * 100) + "%)";
		document.getElementById("reload").innerHTML = "載入中(" + parseInt(loadpoint / (sounds.length - 1) * 100) + "%)";
		if (loadpoint === sounds.length) {
			// This is fired for each sound that is registered.
			end = true;
			document.querySelector(".gamePlayBtn").style.display = 'block';
			document.getElementById("reload_back").style.display = "none";
			document.getElementById("reload").style.display = "none";
		}
	})
	createjs.Sound.registerSounds(sounds);

	window.addEventListener("keydown", keydownMoveFn)
	window.addEventListener("keyup", keyupMoveFn)

	document.querySelector(".left1").addEventListener("touchstart", function () { touchdownMove(37) })
	document.querySelector(".up1").addEventListener("touchstart", function () { touchdownMove(38) })
	document.querySelector(".right1").addEventListener("touchstart", function () { touchdownMove(39) })
	document.querySelector(".down1").addEventListener("touchstart", function () { touchdownMove(40) })
	document.querySelector(".tnt1").addEventListener("touchstart", function () { touchdownMove(191) })
	document.querySelector(".left2").addEventListener("touchstart", function () { touchdownMove(65) })
	document.querySelector(".up2").addEventListener("touchstart", function () { touchdownMove(87) })
	document.querySelector(".right2").addEventListener("touchstart", function () { touchdownMove(68) })
	document.querySelector(".down2").addEventListener("touchstart", function () { touchdownMove(83) })
	document.querySelector(".tnt2").addEventListener("touchstart", function () { touchdownMove(71) })


	document.querySelector(".gamePlayBtn").addEventListener("click", () => {
		document.querySelector(".gamePlayBtn").style.display = 'none';
		document.querySelector("#loading").style.display = 'none';
		bgAudio = createjs.Sound.play(bgm(), { loop: -1 });
		bgAudio.volume = 0.3;
		end = false;
		canplay = true;
		summon();
		function summon() {
			if (!canplay) return;
			setTimeout(() => {
					random_tnt();
					summon();
					if (delay > 100) delay -= 1;
			}, delay);
		}
	})

	function bgm() {
		let exp = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		if (exp === 1) return "bg1";
		if (exp === 2) return "bg4";
		if (exp === 3) return "bg6";
		if (exp === 4) return "bg8";
	}

	function reset() {
		document.getElementById("reload_back").style.display = "none";
		document.getElementById("reload").style.display = "none";
		document.querySelector(".gamePlayBtn").style.display = 'block';

		if (endtitle) end_title.gotoAndPlay("none");
		endtitle = false;

		//Player1
		p1die = false;
		udlr = true;
		player1_x = 12;
		player1_y = 1;
		robot.x = 575;
		robot.y = 25;
		robot.gotoAndPlay("down");

		//Player2
		p2die = false;
		step2 = 1;
		udlr2 = true;
		player2_x = 1;
		player2_y = 12;
		robot2.x = 25;
		robot2.y = 575;
		robot2.gotoAndPlay("up");
		delay=550;
		createjs.Sound.play("point");
	}

	//手機版
	function touchdownMove(e) {
		keyed(e);
	}
	//電腦版
	function keydownMoveFn(e) {
		keyed(e.keyCode);
	}

	function explore_sound() {
		let exp = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		if (exp === 1) return "exp1";
		if (exp === 2) return "exp2";
		if (exp === 3) return "exp3";
		if (exp === 4) return "exp4";
	}

	function keyed(keyEvt) {
		if (end) return reset();
		//Player1
		if (!canplay) return;
		if (keyEvt === 37) control1(true, -1, "left");
		if (keyEvt === 38) control1(false, -1, "up");
		if (keyEvt === 39) control1(true, 1, "right");
		if (keyEvt === 40) control1(false, 1, "down");
		if (keyEvt === 191 && blocks[(player1_x) * 100 + (player1_y)] != TNT) tnt1();
		//Player2
		if (keyEvt === 65) control2(true, -1, "left");
		if (keyEvt === 87) control2(false, -1, "up");
		if (keyEvt === 68) control2(true, 1, "right");
		if (keyEvt === 83) control2(false, 1, "down");
		if (keyEvt === 71 && blocks[(player2_x) * 100 + (player2_y)] != TNT) tnt2();
	}
	function tnt2() {
		var tnt2 = new lib.tnt();
		tnt2.x = robot2.x;
		tnt2.y = robot2.y;
		let data2 = [];
		data2.push((player2_x) * 100 + (player2_y));
		blocks[(player2_x) * 100 + (player2_y)] = TNT;
		tnt2.gotoAndPlay("shing");
		exportRoot.addChild(tnt2);
		createjs.Sound.play("fuse");
		setTimeout(function () {
			let location2 = data2.shift();
			tnt2.gotoAndPlay("explore");
			blocks[location2] = 0;
			createjs.Sound.play(explore_sound());
			setTimeout(function () { exportRoot.removeChild(tnt2); }, 500);
			if (!canplay) return;
			explore_detect(location);
		}, 2500);
	}
	function random_tnt() {
		var tnts = new lib.tnt();
		let tnts_x = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
		let tnts_y = (Math.floor(Math.random() * (12 - 1 + 1) + 1));
		tnts.x = (tnts_x - 1) * 50 + 25;
		tnts.y = (tnts_y - 1) * 50 + 25;
		let data = [];
		const result = data.find(data => data === (tnts_x) * 100 + (tnts_y));
		if(result) return random_tnt();
		data.push((tnts_x) * 100 + (tnts_y));
		blocks[(tnts_x) * 100 + (tnts_y)] = TNT;
		tnts.gotoAndPlay("shing");
		exportRoot.addChild(tnts);
		createjs.Sound.play("fuse");
		setTimeout(function () {
			let location = data.shift();
			tnts.gotoAndPlay("explore");
			blocks[location] = 0;
			createjs.Sound.play(explore_sound());
			setTimeout(function () { exportRoot.removeChild(tnts); }, 500);
			if (!canplay) return;
			explore_detect(location);
		}, 2500);
	}
	function tnt1() {
		var tnt = new lib.tnt();
		tnt.x = robot.x;
		tnt.y = robot.y;
		let data = [];
		data.push((player1_x) * 100 + (player1_y));
		blocks[(player1_x) * 100 + (player1_y)] = TNT;
		tnt.gotoAndPlay("shing");
		exportRoot.addChild(tnt);
		createjs.Sound.play("fuse");
		setTimeout(function () {
			let location = data.shift();
			tnt.gotoAndPlay("explore");
			blocks[location] = 0;
			createjs.Sound.play(explore_sound());
			setTimeout(function () { exportRoot.removeChild(tnt); }, 500);
			if (!canplay) return;
			explore_detect(location);
		}, 2500);
	}
	function control1(oudlr, ostep, direct) {
		udlr = oudlr;
		step = STEP * ostep;
		isKeyDown = true;
		robot.gotoAndPlay(direct);
		if (player1_x === 1 && direct === "left") return;
		if (player1_x === 12 && direct === "right") return;
		if (player1_y === 1 && direct === "up") return;
		if (player1_y === 12 && direct === "down") return;
		moveFn();
	}
	function control2(oudlr, ostep, direct) {
		udlr2 = oudlr;
		step2 = STEP * ostep;
		isKeyDown = true;
		robot2.gotoAndPlay(direct);
		if (player2_x === 1 && direct === "left") return;
		if (player2_x === 12 && direct === "right") return;
		if (player2_y === 1 && direct === "up") return;
		if (player2_y === 12 && direct === "down") return;
		moveFn2();
	}
	function explore_detect(olocation) {
		let u = olocation - 1;
		let d = olocation + 1;
		let l = olocation - 100;
		let r = olocation + 100;
		if (olocation === (player1_x) * 100 + (player1_y)) p1die++;
		if (olocation === (player2_x) * 100 + (player2_y)) p2die++;
		if (u === (player1_x) * 100 + (player1_y)) p1die++;
		if (u === (player2_x) * 100 + (player2_y)) p2die++;
		if (d === (player1_x) * 100 + (player1_y)) p1die++;
		if (d === (player2_x) * 100 + (player2_y)) p2die++;
		if (l === (player1_x) * 100 + (player1_y)) p1die++;
		if (l === (player2_x) * 100 + (player2_y)) p2die++;
		if (r === (player1_x) * 100 + (player1_y)) p1die++;
		if (r === (player2_x) * 100 + (player2_y)) p2die++;
		die_detect();
	}

	function keyupMoveFn(e) {
		isKeyDown = false;
	}

	//createjs.Ticker.addEventListener("tick", tickFn)
	function moveFn() {
		if (!isKeyDown) return;
		if (udlr) {
			player1_x += step / 50
			robot.x += step;
		} else {
			player1_y += step / 50
			robot.y += step;
		}
		//console.log("("+player1_x+","+player1_y+")");
	}
	function moveFn2() {

		if (!isKeyDown) return;
		if (udlr2) {
			player2_x += step2 / 50
			robot2.x += step2;
		} else {
			player2_y += step2 / 50
			robot2.y += step2;
		}
		//console.log("(" + player2_x + "," + player2_y + ")");
	}

	function die_detect() {
		if (!canplay) return;
		if (p1die && p2die) {
			canplay = false;
			robot.gotoAndPlay("explore");
			robot2.gotoAndPlay("explore");
			end_title.gotoAndPlay("drew");
			end_title.x = 720;
			end_title.y = 380;
			end_detect();
			return;
		} else if (p1die) {
			canplay = false;
			robot.gotoAndPlay("explore");
			end_title.gotoAndPlay("winner");
			end_title.x = 720;
			end_title.y = 500;
			end_detect();
			return;
		} else if (p2die) {
			canplay = false;
			robot2.gotoAndPlay("explore");
			end_title.gotoAndPlay("winner");
			end_title.x = 720;
			end_title.y = 120;
			end_detect();
			return;
		}


	}
	function end_detect() {
		if (!canplay) {
			document.getElementById("reload_back").innerHTML = "遊戲結束";
			document.getElementById("reload").innerHTML = "遊戲結束";
			document.getElementById("reload_back").style.display = "block";
			document.getElementById("reload").style.display = "block";
			setTimeout(() => {
				document.getElementById("reload_back").innerHTML = "按任意鍵重置遊戲";
				document.getElementById("reload").innerHTML = "按任意鍵重置遊戲";
				end = true;
				endtitle = true;
				bgAudio.stop();
			}, 2000);
		}
	}




	//Registers the "tick" event listener.
	fnStartAnimation = function () {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage)
		stage.addEventListener("tick", handleTick)
		function getProjectionMatrix(container, totalDepth) {
			var focalLength = 528.25;
			var projectionCenter = { x: lib.properties.width / 2, y: lib.properties.height / 2 };
			var scale = (totalDepth + focalLength) / focalLength;
			var scaleMat = new createjs.Matrix2D;
			scaleMat.a = 1 / scale;
			scaleMat.d = 1 / scale;
			var projMat = new createjs.Matrix2D;
			projMat.tx = -projectionCenter.x;
			projMat.ty = -projectionCenter.y;
			projMat = projMat.prependMatrix(scaleMat);
			projMat.tx += projectionCenter.x;
			projMat.ty += projectionCenter.y;
			return projMat;
		}
		function handleTick(event) {
			var cameraInstance = exportRoot.___camera___instance;
			if (cameraInstance !== undefined && cameraInstance.pinToObject !== undefined) {
				cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
				cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
				if (cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
					cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
			}
			applyLayerZDepth(exportRoot);
		}
		function applyLayerZDepth(parent) {
			var cameraInstance = parent.___camera___instance;
			var focalLength = 528.25;
			var projectionCenter = { 'x': 0, 'y': 0 };
			if (parent === exportRoot) {
				var stageCenter = { 'x': lib.properties.width / 2, 'y': lib.properties.height / 2 };
				projectionCenter.x = stageCenter.x;
				projectionCenter.y = stageCenter.y;
			}
			for (child in parent.children) {
				var layerObj = parent.children[child];
				if (layerObj == cameraInstance)
					continue;
				applyLayerZDepth(layerObj, cameraInstance);
				if (layerObj.layerDepth === undefined)
					continue;
				if (layerObj.currentFrame != layerObj.parent.currentFrame) {
					layerObj.gotoAndPlay(layerObj.parent.currentFrame);
				}
				var matToApply = new createjs.Matrix2D;
				var cameraMat = new createjs.Matrix2D;
				var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
				var cameraDepth = 0;
				if (cameraInstance && !layerObj.isAttachedToCamera) {
					var mat = cameraInstance.getMatrix();
					mat.tx -= projectionCenter.x;
					mat.ty -= projectionCenter.y;
					cameraMat = mat.invert();
					cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
					cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
					if (cameraInstance.depth)
						cameraDepth = cameraInstance.depth;
				}
				if (layerObj.depth) {
					totalDepth = layerObj.depth;
				}
				//Offset by camera depth
				totalDepth -= cameraDepth;
				if (totalDepth < -focalLength) {
					matToApply.a = 0;
					matToApply.d = 0;
				}
				else {
					if (layerObj.layerDepth) {
						var sizeLockedMat = getProjectionMatrix(parent, layerObj.layerDepth);
						if (sizeLockedMat) {
							sizeLockedMat.invert();
							matToApply.prependMatrix(sizeLockedMat);
						}
					}
					matToApply.prependMatrix(cameraMat);
					var projMat = getProjectionMatrix(parent, totalDepth);
					if (projMat) {
						matToApply.prependMatrix(projMat);
					}
				}
				layerObj.transformMatrix = matToApply;
			}
		}
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
			if (isResp) {
				if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
					sRatio = lastS;
				}
				else if (!isScale) {
					if (iw < w || ih < h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas.width = w * pRatio * sRatio;
			canvas.height = h * pRatio * sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	}
	makeResponsive(false, 'both', false, 1);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_1", frames: [[0,0,1746,1042],[0,1044,2020,575]]},
		{name:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_2", frames: [[0,0,2020,575],[0,577,1846,560],[0,1560,1653,410],[0,1139,1873,419]]},
		{name:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_3", frames: [[0,1606,1844,267],[0,712,1848,354],[0,356,1853,354],[0,1337,1848,267],[0,1068,1852,267],[0,0,1863,354]]},
		{name:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4", frames: [[0,1559,1546,240],[0,1076,1546,272],[0,0,1844,267],[0,269,1844,267],[0,538,1844,267],[0,807,1810,267],[0,1801,2000,167],[0,1350,1998,207]]},
		{name:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5", frames: [[0,1673,787,291],[789,1637,914,249],[0,169,937,287],[503,1172,787,291],[503,1465,1342,170],[0,0,1977,167],[0,1173,501,498],[1458,169,500,500],[502,632,657,380],[1161,671,499,499],[0,671,500,500],[0,458,1456,172]]},
		{name:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6", frames: [[744,1652,735,143],[744,1505,764,145],[1336,275,594,310],[0,0,1108,205],[816,367,429,231],[1457,587,389,335],[1488,1049,545,181],[1336,0,692,273],[0,610,1455,129],[0,207,1334,158],[0,367,814,241],[1072,924,907,123],[0,955,742,150],[744,1049,742,150],[0,1107,742,150],[744,1201,742,150],[0,1259,742,150],[0,1411,742,150],[0,1563,742,150],[0,1715,742,150],[0,1867,742,150],[744,1797,1050,97],[744,1353,742,150],[0,741,1070,105],[744,1896,1050,97],[0,848,1070,105]]},
		{name:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7", frames: [[0,362,589,101],[403,1426,94,94],[767,160,829,101],[1598,142,438,108],[0,263,784,97],[250,1326,151,151],[1101,447,383,118],[306,1139,318,86],[876,567,494,86],[1391,0,537,140],[591,447,508,108],[793,0,596,158],[1738,450,308,97],[306,1227,276,97],[1815,252,196,196],[499,1426,87,97],[1545,1390,126,97],[1977,766,61,119],[128,1416,96,97],[814,1359,175,97],[0,1416,126,97],[1930,95,114,25],[441,843,364,106],[446,557,428,106],[681,362,42,71],[1926,983,117,117],[591,362,44,78],[446,465,50,89],[637,362,42,78],[1902,1312,130,130],[991,1359,128,128],[1902,1171,139,139],[1121,1359,126,126],[1738,339,59,86],[1327,766,323,121],[1652,766,323,121],[1249,1359,475,29],[0,123,765,122],[786,339,713,106],[1008,1077,304,92],[0,570,443,92],[1314,1077,304,92],[0,0,791,121],[1620,1077,304,92],[0,1134,304,92],[1372,578,443,92],[0,852,409,92],[807,860,409,92],[876,655,443,92],[0,664,443,92],[1218,889,409,92],[1321,672,439,92],[445,749,439,92],[0,758,439,92],[1629,889,409,92],[886,766,439,92],[0,946,372,92],[374,951,372,92],[748,954,372,92],[1122,983,372,92],[1496,983,334,92],[0,1040,334,92],[336,1045,334,92],[672,1048,334,92],[1762,672,282,92],[0,1228,282,92],[584,1236,282,92],[868,1265,282,92],[1152,1265,248,92],[1402,1265,248,92],[1652,1265,248,92],[0,1322,248,92],[626,1142,293,92],[921,1171,293,92],[1216,1171,293,92],[1511,1171,293,92],[1726,1359,146,93],[1249,1390,146,93],[1397,1390,146,93],[1930,0,111,93],[635,1330,177,98],[403,1330,230,94],[1817,549,193,105],[0,465,444,103],[1501,339,235,237],[786,263,1027,74]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_143 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_150 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_144 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_146 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_145 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_136 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_147 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_120 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(img.CachedBmp_123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2137,666);


(lib.CachedBmp_110 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(img.CachedBmp_112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2576,210);


(lib.CachedBmp_109 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_164 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(img.CachedBmp_99);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2668,442);


(lib.CachedBmp_102 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(img.CachedBmp_79);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2376,300);


(lib.CachedBmp_78 = function() {
	this.initialize(img.CachedBmp_78);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2118,291);


(lib.CachedBmp_87 = function() {
	this.initialize(img.CachedBmp_87);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2482,1238);


(lib.CachedBmp_75 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(img.CachedBmp_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2093,467);


(lib.CachedBmp_15 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.guru = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ikon = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ikon2 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sedih = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.senang = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2145,589);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4"]);
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_150();
	this.instance.setTransform(-23.6,-23.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-23.6,47,47);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_150();
	this.instance.setTransform(-23.6,-23.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-23.6,47,47);


(lib.Toquis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_148();
	this.instance.setTransform(81.35,-1.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_147();
	this.instance_1.setTransform(-11.5,-11.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-11.5,311.9,79);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.sumbuy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_146();
	this.instance.setTransform(-37.55,3.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_145();
	this.instance_1.setTransform(-26.1,-5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-5,392,71.5);


(lib.sumbux = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_144();
	this.instance.setTransform(-45.95,-0.6,0.4787,0.4787);

	this.instance_1 = new lib.CachedBmp_143();
	this.instance_1.setTransform(7,-24.6,0.4787,0.4787);

	this.instance_2 = new lib.CachedBmp_142();
	this.instance_2.setTransform(-31.75,-5.95,0.4787,0.4787);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-24.6,396.79999999999995,88.1);


(lib.silang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_141();
	this.instance.setTransform(106.5,6.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106.5,6.6,75.5,75.5);


(lib.salah = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sedih();
	this.instance.setTransform(342,6,0.24,0.24);

	this.instance_1 = new lib.CachedBmp_140();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.salah, new cjs.Rectangle(0,0,462,145.5), null);


(lib.rumusbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_139();
	this.instance.setTransform(18.05,5.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_138();
	this.instance_1.setTransform(-2.5,-2.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,191.5,59);


(lib.rumus3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_137();
	this.instance.setTransform(28.05,9.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_136();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rumus3, new cjs.Rectangle(-0.5,-0.5,275.6,70), null);


(lib.rumus2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_135();
	this.instance.setTransform(23.05,12.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_134();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rumus2, new cjs.Rectangle(-0.5,-0.5,480.6,155), null);


(lib.rumus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_133();
	this.instance.setTransform(-45.9,13.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_132();
	this.instance_1.setTransform(-2.5,-2.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rumus, new cjs.Rectangle(-45.9,-2.5,554,143.5), null);


(lib.ready = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_131();
	this.instance.setTransform(54.05,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_147();
	this.instance_1.setTransform(-11.5,-11.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-11.5,319.6,79);


(lib.nextbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_129();
	this.instance.setTransform(-5,-5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nextbtn, new cjs.Rectangle(-5,-5,98,98), null);


(lib.muncul3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_128();
	this.instance.setTransform(13.1,-48.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_127();
	this.instance_1.setTransform(-46.75,22.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_126();
	this.instance_2.setTransform(-15.95,-12.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.muncul3, new cjs.Rectangle(-46.7,-48.3,245.3,150.89999999999998), null);


(lib.muncul2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_125();
	this.instance.setTransform(576.95,693.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_124();
	this.instance_1.setTransform(655.4,481.4,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_123();
	this.instance_2.setTransform(114.65,389.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.muncul2, new cjs.Rectangle(114.7,389.5,1068.5,352.29999999999995), null);


(lib.muncul1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_122();
	this.instance.setTransform(56.45,124.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_121();
	this.instance_1.setTransform(48.3,74.4,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_120();
	this.instance_2.setTransform(57.45,9.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_119();
	this.instance_3.setTransform(-60,35.95,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_118();
	this.instance_4.setTransform(-2,-25.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.muncul1, new cjs.Rectangle(-60,-25.4,252.5,198.8), null);


(lib.masuk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_117();
	this.instance.setTransform(27.05,13.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_172();
	this.instance_1.setTransform(-5,-5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,272.5,90.5);


(lib.login = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_115();
	this.instance.setTransform(40.05,13.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_172();
	this.instance_1.setTransform(-5,-5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_113();
	this.instance_2.setTransform(54.35,68.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,272.5,90.5);


(lib.lantai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_112();
	this.instance.setTransform(0,39.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lantai, new cjs.Rectangle(0,39.2,1288,104.99999999999999), null);


(lib.kakipapantulis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_111();
	this.instance.setTransform(19.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kakipapantulis, new cjs.Rectangle(19.1,0,346,136.5), null);


(lib.fisika = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ikon2();
	this.instance.setTransform(100,0,0.2739,0.2632,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fisika, new cjs.Rectangle(0,0,100,180), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.btnD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_110();
	this.instance.setTransform(17,8.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_109();
	this.instance_1.setTransform(-2.5,-2.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,58.5,58.5);


(lib.btnC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_108();
	this.instance.setTransform(18,8.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_107();
	this.instance_1.setTransform(-2.5,-2.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,63,63);


(lib.btnB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_106();
	this.instance.setTransform(19,9.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_105();
	this.instance_1.setTransform(-2.5,-2.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,64,64);


(lib.btnA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_104();
	this.instance.setTransform(17.8,5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_103();
	this.instance_1.setTransform(-2.5,-2.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,65,65);


(lib.bola = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_101();
	this.instance.setTransform(-2,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bola, new cjs.Rectangle(-2,-2,69.5,69.5), null);


(lib.benar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.senang();
	this.instance.setTransform(306,-11,0.6511,0.6287);

	this.instance_1 = new lib.CachedBmp_100();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.benar, new cjs.Rectangle(0,-11,459,156.5), null);


(lib.animasi2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_99();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.animasi2, new cjs.Rectangle(-0.5,-0.5,1334,221), null);


(lib.animasi1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_170();
	this.instance.setTransform(88.3,221.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_169();
	this.instance_1.setTransform(66.1,659.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_170();
	this.instance_2.setTransform(109.7,470.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_167();
	this.instance_3.setTransform(129.85,407.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_166();
	this.instance_4.setTransform(113.75,534.6,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_166();
	this.instance_5.setTransform(40.45,98.95,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_164();
	this.instance_6.setTransform(113.95,357.35,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_167();
	this.instance_7.setTransform(122.5,289.25,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_166();
	this.instance_8.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,887.3,779.6);


(lib.bolabergerak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(34.95,451.45);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(791.1,452.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},22).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,guide:{path:[35.1,451.4,368.5,-180.2,721.1,333,757.3,385.7,793.8,450.5]}},22).wait(1));

	// Layer_5
	this.instance_2 = new lib.CachedBmp_102();
	this.instance_2.setTransform(-20.1,-18.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-18.1,873,521);


// stage content:
(lib.UASPBK4RhisaAdikaPutri191401119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{home1:0,materi1:1,materi2:2,materi3:3,materi4:4,materi5:5,materi6:6,home2:7,soal1:8,soal2:9,soal3:10,soal4:11,soal5:12,soal6:13,soal7:14,soal8:15,soal9:16,soal10:17,masuk:18,finished:19,name:7});

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		playSound("happyclappyukulele");
		this.stop();
		var _this = this;
		
		_this.Tomateri.on('click', onTomateri.bind(this));
		
		function onTomateri(e){
			createjs.Sound.play("Next");
			_this.gotoAndStop('materi1');
		}
		
		_this.Toquis.on('click', onToquis.bind(this));
		
		function onToquis(e){
			createjs.Sound.play("Next");
			_this.gotoAndStop('home2');
		}
		
		this.addEventListener("tick",fl_RotateContinuously_6.bind(this));
		
		function fl_RotateContinuously_6(){
			this.fisik1.rotation+=10;
		}
		
		this.addEventListener("tick",fl_RotateContinuously_7.bind(this));
		
		function fl_RotateContinuously_7(){
			this.fisik2.rotation+=10;
		}
	}
	this.frame_1 = function() {
		this.muncul1.visible = false;
		this.muncul2.visible = false;
		this.muncul3.visible = false;
		this.bola2.mouseEnabled=false;
		this.bola3.mouseEnabled=false;
		this.next1.visible = false;
		
		var _this = this;
		
		_this.bola1.on('click', function(){
			_this.muncul1.visible = true;
			_this.muncul2.visible = false;
			_this.muncul3.visible = false;
			_this.bola1.mouseEnabled=false;
			_this.bola2.mouseEnabled=true;
		});
		
		_this.bola2.on('click', function(){
			_this.muncul1.visible = true;
			_this.muncul2.visible = true;
			_this.muncul3.visible = false;
			_this.bola1.mouseEnabled=false;
			_this.bola2.mouseEnabled=false;
			_this.bola3.mouseEnabled=true;
		});
		
		_this.bola3.on('click', function(){
			_this.muncul1.visible = true;
			_this.muncul2.visible = true;
			_this.muncul3.visible = true;
			_this.bola1.mouseEnabled=false;
			_this.bola2.mouseEnabled=false;
			_this.bola3.mouseEnabled=false;
			_this.next1.visible = true;
		});
		
		this.next1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			createjs.Sound.play("Next");
			this.gotoAndStop('materi2');
		}
	}
	this.frame_2 = function() {
		var _this = this;
		
		_this.back1.on('click', onback1.bind(this));
		
		function onback1(e){
			createjs.Sound.play("Next");
			_this.gotoAndStop('home1');
		}
		
		_this.sumbuy.on('click', onsumbuy.bind(this));
		
		function onsumbuy(e){
			createjs.Sound.play("Next");
			_this.gotoAndStop('materi3');
		}
		
		_this.sumbux.on('click', onsumbux.bind(this));
		
		function onsumbux(e){
			createjs.Sound.play("Next");
			_this.gotoAndStop('materi5');
		}
	}
	this.frame_3 = function() {
		this.rumus1.visible = false;
		this.next3.visible = false;
		
		var _this = this;
		
		_this.btnrumus.on('click', function(){
			createjs.Sound.play("Next");
			_this.rumus1.visible = true;
			_this.rumus1.mouseEnabled=false;
			_this.next3.visible = true;
		});
		
		this.next3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			createjs.Sound.play("Next");
			this.gotoAndStop('materi4');
		}
	}
	this.frame_4 = function() {
		var _this = this;
		
		_this.back2.on('click', onback2.bind(this));
		
		function onback2(e){
			createjs.Sound.play("Next");
			_this.gotoAndStop('materi2');
		}
	}
	this.frame_5 = function() {
		this.rumus2.visible = false;
		this.text2.visible = false;
		this.rumus3.visible = false;
		this.next4.visible = false;
		
		var _this = this;
		
		_this.btnrumus2.on('click', function(){
			createjs.Sound.play("Next");
			_this.rumus2.visible = true;
			_this.text2.visible = true;
			_this.rumus3.visible = true;
			_this.rumus2.mouseEnabled=false;
			_this.next4.visible = true;
		});
		
		this.next4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			createjs.Sound.play("Next");
			this.gotoAndStop('materi6');
		}
	}
	this.frame_6 = function() {
		var _this = this;
		
		_this.back3.on('click', onback3.bind(this));
		
		function onback3(e){
			createjs.Sound.play("Next");
			_this.gotoAndStop('materi2');
		}
	}
	this.frame_7 = function() {
		var _this = this;
		
		_this.enter.on('click', onEnter.bind(this));
		
		function onEnter(e){
			var name = document.getElementById("txtname").value;
			createjs.Sound.play("Next");
			_this.gotoAndStop('masuk');
		}
	}
	this.frame_8 = function() {
		//soal ke-1
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw1a.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw1a.mouseEnabled=false;
			_this.jw1b.mouseEnabled=false;
			_this.jw1c.mouseEnabled=false;
			_this.jw1d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw1b.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw1a.mouseEnabled=false;
			_this.jw1b.mouseEnabled=false;
			_this.jw1c.mouseEnabled=false;
			_this.jw1d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw1c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw1a.mouseEnabled=false;
			_this.jw1b.mouseEnabled=false;
			_this.jw1c.mouseEnabled=false;
			_this.jw1d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw1d.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw1a.mouseEnabled=false;
			_this.jw1b.mouseEnabled=false;
			_this.jw1c.mouseEnabled=false;
			_this.jw1d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_1.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_1()
		{
			this.gotoAndStop('soal2');
			createjs.Sound.play("Next");
		}
		
		this.addEventListener("tick",fl_RotateContinuously.bind(this));
		
		function fl_RotateContinuously(){
			this.gerak.rotation+=10;
		}
	}
	this.frame_9 = function() {
		//soal ke-2
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw2a.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw2a.mouseEnabled=false;
			_this.jw2b.mouseEnabled=false;
			_this.jw2c.mouseEnabled=false;
			_this.jw2d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw2b.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw2a.mouseEnabled=false;
			_this.jw2b.mouseEnabled=false;
			_this.jw2c.mouseEnabled=false;
			_this.jw2d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw2c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw2a.mouseEnabled=false;
			_this.jw2b.mouseEnabled=false;
			_this.jw2c.mouseEnabled=false;
			_this.jw2d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw2d.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw2a.mouseEnabled=false;
			_this.jw2b.mouseEnabled=false;
			_this.jw2c.mouseEnabled=false;
			_this.jw2d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('soal3');
			createjs.Sound.play("Next");
		}
	}
	this.frame_10 = function() {
		//soal ke-3
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw3a.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw3a.mouseEnabled=false;
			_this.jw3b.mouseEnabled=false;
			_this.jw3c.mouseEnabled=false;
			_this.jw3d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw3b.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw3a.mouseEnabled=false;
			_this.jw3b.mouseEnabled=false;
			_this.jw3c.mouseEnabled=false;
			_this.jw3d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw3c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw3a.mouseEnabled=false;
			_this.jw3b.mouseEnabled=false;
			_this.jw3c.mouseEnabled=false;
			_this.jw3d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw3d.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw3a.mouseEnabled=false;
			_this.jw3b.mouseEnabled=false;
			_this.jw3c.mouseEnabled=false;
			_this.jw3d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop('soal4');
			createjs.Sound.play("Next");
		}
	}
	this.frame_11 = function() {
		//soal ke-4
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw4a.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw4a.mouseEnabled=false;
			_this.jw4b.mouseEnabled=false;
			_this.jw4c.mouseEnabled=false;
			_this.jw4d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw4b.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw4a.mouseEnabled=false;
			_this.jw4b.mouseEnabled=false;
			_this.jw4c.mouseEnabled=false;
			_this.jw4d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw4c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw4a.mouseEnabled=false;
			_this.jw4b.mouseEnabled=false;
			_this.jw4c.mouseEnabled=false;
			_this.jw4d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw4d.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw4a.mouseEnabled=false;
			_this.jw4b.mouseEnabled=false;
			_this.jw4c.mouseEnabled=false;
			_this.jw4d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop('soal5');
			createjs.Sound.play("Next");
		}
	}
	this.frame_12 = function() {
		//soal ke-5
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw5a.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw5a.mouseEnabled=false;
			_this.jw5b.mouseEnabled=false;
			_this.jw5c.mouseEnabled=false;
			_this.jw5d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw5b.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw5a.mouseEnabled=false;
			_this.jw5b.mouseEnabled=false;
			_this.jw5c.mouseEnabled=false;
			_this.jw5d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw5c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw5a.mouseEnabled=false;
			_this.jw5b.mouseEnabled=false;
			_this.jw5c.mouseEnabled=false;
			_this.jw5d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw5d.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw5a.mouseEnabled=false;
			_this.jw5b.mouseEnabled=false;
			_this.jw5c.mouseEnabled=false;
			_this.jw5d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop('soal6');
			createjs.Sound.play("Next");
		}
	}
	this.frame_13 = function() {
		//soal ke-6
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw6a.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw6a.mouseEnabled=false;
			_this.jw6b.mouseEnabled=false;
			_this.jw6c.mouseEnabled=false;
			_this.jw6d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw6b.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw6a.mouseEnabled=false;
			_this.jw6b.mouseEnabled=false;
			_this.jw6c.mouseEnabled=false;
			_this.jw6d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw6c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw6a.mouseEnabled=false;
			_this.jw6b.mouseEnabled=false;
			_this.jw6c.mouseEnabled=false;
			_this.jw6d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw6d.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw6a.mouseEnabled=false;
			_this.jw6b.mouseEnabled=false;
			_this.jw6c.mouseEnabled=false;
			_this.jw6d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop('soal7');
			createjs.Sound.play("Next");
		}
	}
	this.frame_14 = function() {
		//soal ke-7
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw7a.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw7a.mouseEnabled=false;
			_this.jw7b.mouseEnabled=false;
			_this.jw7c.mouseEnabled=false;
			_this.jw7d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw7b.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw7a.mouseEnabled=false;
			_this.jw7b.mouseEnabled=false;
			_this.jw7c.mouseEnabled=false;
			_this.jw7d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw7c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw7a.mouseEnabled=false;
			_this.jw7b.mouseEnabled=false;
			_this.jw7c.mouseEnabled=false;
			_this.jw7d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw7d.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw7a.mouseEnabled=false;
			_this.jw7b.mouseEnabled=false;
			_this.jw7c.mouseEnabled=false;
			_this.jw7d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop('soal8');
			createjs.Sound.play("Next");
		}
	}
	this.frame_15 = function() {
		//soal ke-8
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw8a.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw8a.mouseEnabled=false;
			_this.jw8b.mouseEnabled=false;
			_this.jw8c.mouseEnabled=false;
			_this.jw8d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw8b.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw8a.mouseEnabled=false;
			_this.jw8b.mouseEnabled=false;
			_this.jw8c.mouseEnabled=false;
			_this.jw8d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw8c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw8a.mouseEnabled=false;
			_this.jw8b.mouseEnabled=false;
			_this.jw8c.mouseEnabled=false;
			_this.jw8d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw8d.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw8a.mouseEnabled=false;
			_this.jw8b.mouseEnabled=false;
			_this.jw8c.mouseEnabled=false;
			_this.jw8d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop('soal9');
			createjs.Sound.play("Next");
		}
	}
	this.frame_16 = function() {
		//soal ke-9
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw9a.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw9a.mouseEnabled=false;
			_this.jw9b.mouseEnabled=false;
			_this.jw9c.mouseEnabled=false;
			_this.jw9d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw9b.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw9a.mouseEnabled=false;
			_this.jw9b.mouseEnabled=false;
			_this.jw9c.mouseEnabled=false;
			_this.jw9d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw9c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw9a.mouseEnabled=false;
			_this.jw9b.mouseEnabled=false;
			_this.jw9c.mouseEnabled=false;
			_this.jw9d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw9d.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw9a.mouseEnabled=false;
			_this.jw9b.mouseEnabled=false;
			_this.jw9c.mouseEnabled=false;
			_this.jw9d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop('soal10');
			createjs.Sound.play("Next");
		}
	}
	this.frame_17 = function() {
		//soal ke-10
		this.benarbtn.visible = false;
		this.salahbtn.visible = false;
		
		var _this = this;
		
		//tombol a
		_this.jw10a.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw10b.mouseEnabled=false;
			_this.jw10c.mouseEnabled=false;
			_this.jw10d.mouseEnabled=false;
		});
		
		//tombol b
		_this.jw10b.on('click', function(){
			jlscore();
			_this.scoretotal.text = score;
			_this.benarbtn.visible = true;
			_this.salahbtn.visible = false;
			createjs.Sound.play("Right");
			_this.jw10a.mouseEnabled=false;
			_this.jw10b.mouseEnabled=false;
			_this.jw10c.mouseEnabled=false;
			_this.jw10d.mouseEnabled=false;
		});
		
		//tombol c
		_this.jw10c.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw10a.mouseEnabled=false;
			_this.jw10b.mouseEnabled=false;
			_this.jw10c.mouseEnabled=false;
			_this.jw10d.mouseEnabled=false;
		});
		
		//tombol d
		_this.jw10d.on('click', function(){
			_this.benarbtn.visible = false;
			_this.salahbtn.visible = true;
			createjs.Sound.play("Wrong");
			_this.jw10a.mouseEnabled=false;
			_this.jw10b.mouseEnabled=false;
			_this.jw10c.mouseEnabled=false;
			_this.jw10d.mouseEnabled=false;
		});
		
		//tombol next
		this.next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop('finished');
			createjs.Sound.play("Next");
		}
	}
	this.frame_18 = function() {
		var _this = this;
		
		_this.start.on('click', onStart.bind(this));
		
		function onStart(e){
			_this.gotoAndStop('soal1');
			createjs.Sound.play("Next");
		}
		
		this.addEventListener("tick",fl_RotateContinuously_4.bind(this));
		
		function fl_RotateContinuously_4(){
			this.gerak3.rotation+=10;
		}
		
		this.addEventListener("tick",fl_RotateContinuously_5.bind(this));
		
		function fl_RotateContinuously_5(){
			this.gerak4.rotation+=10;
		}
	}
	this.frame_19 = function() {
		var _this = this;
		
		_this.lastback.on('click', onlastback.bind(this));
		
		function onlastback(e){
			createjs.Sound.play("Next");
			_this.gotoAndStop('home1');
		}
		
		this.addEventListener("tick",fl_RotateContinuously_10.bind(this));
		
		function fl_RotateContinuously_10(){
			this.gerak1.rotation+=10;
		}
		
		this.addEventListener("tick",fl_RotateContinuously_11.bind(this));
		
		function fl_RotateContinuously_11(){
			this.gerak2.rotation+=10;
		}
		
		_this.scoretotal.text = score;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(2));

	// Actions
	this.start = new lib.login();
	this.start.name = "start";
	this.start.setTransform(548.95,574.3);
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(166.65,403.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(265.9,152.55,0.5,0.5);

	this.lastback = new lib.silang();
	this.lastback.name = "lastback";
	this.lastback.setTransform(1028.9,491.35);
	new cjs.ButtonHelper(this.lastback, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.start}]},18).to({state:[{t:this.lastback}]},1).to({state:[]},1).wait(1));

	// Soal
	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(412.45,683.2,0.5,0.5);

	this.Toquis = new lib.Toquis();
	this.Toquis.name = "Toquis";
	this.Toquis.setTransform(885.6,476.4,1,1,0,0,0,135.7,25.5);
	new cjs.ButtonHelper(this.Toquis, 0, 1, 1);

	this.Tomateri = new lib.ready();
	this.Tomateri.name = "Tomateri";
	this.Tomateri.setTransform(305.1,449);
	new cjs.ButtonHelper(this.Tomateri, 0, 1, 1);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(430,267.05,0.5,0.5);

	this.next1 = new lib.nextbtn();
	this.next1.name = "next1";
	this.next1.setTransform(1189.6,285.1,0.8523,0.8523,0,0,0,44.1,44);
	new cjs.ButtonHelper(this.next1, 0, 1, 1);

	this.muncul3 = new lib.muncul3();
	this.muncul3.name = "muncul3";
	this.muncul3.setTransform(1027.9,478.2,1,1,0,0,0,75.9,27.1);

	this.bola3 = new lib.bola();
	this.bola3.name = "bola3";
	this.bola3.setTransform(1150.95,618.5,0.9174,0.9174,0,0,0,32.7,32.8);
	new cjs.ButtonHelper(this.bola3, 0, 1, 1);

	this.bola2 = new lib.bola();
	this.bola2.name = "bola2";
	this.bola2.setTransform(654.65,352.7,0.9174,0.9174,0,0,0,32.7,32.8);
	new cjs.ButtonHelper(this.bola2, 0, 1, 1);

	this.muncul2 = new lib.muncul2();
	this.muncul2.name = "muncul2";
	this.muncul2.setTransform(655.95,498.3,1,1,0,0,0,642.3,521.9);

	this.muncul1 = new lib.muncul1();
	this.muncul1.name = "muncul1";
	this.muncul1.setTransform(159.45,573.95,1,1,0,0,0,48.8,70);

	this.instance_4 = new lib.animasi2();
	this.instance_4.setTransform(636.55,-32.75,1,1,0,0,0,666.5,110.1);

	this.bola1 = new lib.bola();
	this.bola1.name = "bola1";
	this.bola1.setTransform(124.55,628.95,0.9174,0.9174,0,0,0,32.8,32.8);
	new cjs.ButtonHelper(this.bola1, 0, 1, 1);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(174.95,88.7,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_5();
	this.instance_6.setTransform(117,351.5,0.5,0.5);

	this.back1 = new lib.silang();
	this.back1.name = "back1";
	this.back1.setTransform(208.55,156.1,1,1,180);
	new cjs.ButtonHelper(this.back1, 0, 1, 1);

	this.instance_7 = new lib.animasi2();
	this.instance_7.setTransform(642.3,-28.85,1,1,0,0,0,666.5,110.1);

	this.bolabergerak = new lib.bolabergerak();
	this.bolabergerak.name = "bolabergerak";
	this.bolabergerak.setTransform(387.4,89.75);

	this.sumbuy = new lib.sumbuy();
	this.sumbuy.name = "sumbuy";
	this.sumbuy.setTransform(49.8,274.05);
	new cjs.ButtonHelper(this.sumbuy, 0, 1, 1);

	this.sumbux = new lib.sumbux();
	this.sumbux.name = "sumbux";
	this.sumbux.setTransform(641.35,575.45,1.0446,1);
	new cjs.ButtonHelper(this.sumbux, 0, 1, 1);

	this.next3 = new lib.nextbtn();
	this.next3.name = "next3";
	this.next3.setTransform(1110.85,656.75,0.8523,0.8523,0,0,0,44.1,44);

	this.instance_8 = new lib.CachedBmp_8();
	this.instance_8.setTransform(178.8,137.35,0.5,0.5);

	this.btnrumus = new lib.rumusbtn();
	this.btnrumus.name = "btnrumus";
	this.btnrumus.setTransform(414.3,530.8,1,1,0,0,0,93.3,26.9);
	new cjs.ButtonHelper(this.btnrumus, 0, 1, 1);

	this.rumus1 = new lib.rumus();
	this.rumus1.name = "rumus1";
	this.rumus1.setTransform(785.15,536.55,1,1,0,0,0,231.7,69.2);

	this.instance_9 = new lib.CachedBmp_7();
	this.instance_9.setTransform(415.35,35.45,0.5,0.5);

	this.back2 = new lib.silang();
	this.back2.name = "back2";
	this.back2.setTransform(1097,654.35,1,1,0,0,0,144.2,44.3);
	new cjs.ButtonHelper(this.back2, 0, 1, 1);

	this.instance_10 = new lib.Bitmap16();
	this.instance_10.setTransform(469,598);

	this.instance_11 = new lib.CachedBmp_11();
	this.instance_11.setTransform(124.95,484.15,0.5,0.5);

	this.instance_12 = new lib.Bitmap15();
	this.instance_12.setTransform(275,363);

	this.instance_13 = new lib.CachedBmp_10();
	this.instance_13.setTransform(124.95,104.7,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_9();
	this.instance_14.setTransform(121.1,28.4,0.5,0.5);

	this.next4 = new lib.nextbtn();
	this.next4.name = "next4";
	this.next4.setTransform(1110.85,656.75,0.8523,0.8523,0,0,0,44.1,44);
	new cjs.ButtonHelper(this.next4, 0, 1, 1);

	this.rumus3 = new lib.rumus3();
	this.rumus3.name = "rumus3";
	this.rumus3.setTransform(799.1,669.25,1,1,0,0,0,133.7,34.6);

	this.text2 = new cjs.Text("Meskipun kecepatan pada arah horisontal besarnya konstan, namun resultan vektor kecepatan objek di setiap waktu t selalu mengalami perubahan karena kecepatan pada sumbu y selalu mengalami perubahan. Resultan vektor kecepatannya dapat dituliskan dengan :", "35px 'Times New Roman'");
	this.text2.name = "text2";
	this.text2.lineHeight = 41;
	this.text2.lineWidth = 1106;
	this.text2.parent = this;
	this.text2.setTransform(85.65,502.75);

	this.instance_15 = new lib.CachedBmp_13();
	this.instance_15.setTransform(98.25,114.15,0.5,0.5);

	this.rumus2 = new lib.rumus2();
	this.rumus2.name = "rumus2";
	this.rumus2.setTransform(841.3,409.15,1,1,0,0,0,252.8,76.9);

	this.btnrumus2 = new lib.rumusbtn();
	this.btnrumus2.name = "btnrumus2";
	this.btnrumus2.setTransform(370.3,388.8);
	new cjs.ButtonHelper(this.btnrumus2, 0, 1, 1);

	this.instance_16 = new lib.CachedBmp_12();
	this.instance_16.setTransform(415.35,35.45,0.5,0.5);

	this.back3 = new lib.silang();
	this.back3.name = "back3";
	this.back3.setTransform(1097,654.35,1,1,0,0,0,144.2,44.3);
	new cjs.ButtonHelper(this.back3, 0, 1, 1);

	this.instance_17 = new lib.Bitmap18();
	this.instance_17.setTransform(580,591);

	this.instance_18 = new lib.CachedBmp_16();
	this.instance_18.setTransform(124.95,534.15,0.5,0.5);

	this.instance_19 = new lib.Bitmap17();
	this.instance_19.setTransform(492,413);

	this.instance_20 = new lib.CachedBmp_15();
	this.instance_20.setTransform(124.95,104.7,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_14();
	this.instance_21.setTransform(121.1,28.4,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_22();
	this.instance_22.setTransform(152.8,422.05,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_21();
	this.instance_23.setTransform(152.8,481,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_20();
	this.instance_24.setTransform(152.8,361.2,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_19();
	this.instance_25.setTransform(156.75,303.6,0.5,0.5);

	this.jw1d = new lib.btnD();
	this.jw1d.name = "jw1d";
	this.jw1d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw1d, 0, 1, 1);

	this.jw1c = new lib.btnC();
	this.jw1c.name = "jw1c";
	this.jw1c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw1c, 0, 1, 1);

	this.jw1b = new lib.btnB();
	this.jw1b.name = "jw1b";
	this.jw1b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw1b, 0, 1, 1);

	this.jw1a = new lib.btnA();
	this.jw1a.name = "jw1a";
	this.jw1a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw1a, 0, 1, 1);

	this.instance_26 = new lib.CachedBmp_18();
	this.instance_26.setTransform(458.9,8.4,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_17();
	this.instance_27.setTransform(84.2,111.15,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_28();
	this.instance_28.setTransform(166.65,481,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_27();
	this.instance_29.setTransform(166.65,419.95,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_26();
	this.instance_30.setTransform(166.65,363,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_25();
	this.instance_31.setTransform(166.65,302.55,0.5,0.5);

	this.jw2d = new lib.btnD();
	this.jw2d.name = "jw2d";
	this.jw2d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw2d, 0, 1, 1);

	this.jw2c = new lib.btnC();
	this.jw2c.name = "jw2c";
	this.jw2c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw2c, 0, 1, 1);

	this.jw2b = new lib.btnB();
	this.jw2b.name = "jw2b";
	this.jw2b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw2b, 0, 1, 1);

	this.jw2a = new lib.btnA();
	this.jw2a.name = "jw2a";
	this.jw2a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw2a, 0, 1, 1);

	this.instance_32 = new lib.CachedBmp_24();
	this.instance_32.setTransform(458.9,8.4,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_23();
	this.instance_33.setTransform(83.6,126.15,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_34();
	this.instance_34.setTransform(165.65,477.05,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_33();
	this.instance_35.setTransform(165.65,418.1,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_32();
	this.instance_36.setTransform(165.65,360.9,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_31();
	this.instance_37.setTransform(165.65,302.55,0.5,0.5);

	this.jw3d = new lib.btnD();
	this.jw3d.name = "jw3d";
	this.jw3d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw3d, 0, 1, 1);

	this.jw3c = new lib.btnC();
	this.jw3c.name = "jw3c";
	this.jw3c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw3c, 0, 1, 1);

	this.jw3b = new lib.btnB();
	this.jw3b.name = "jw3b";
	this.jw3b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw3b, 0, 1, 1);

	this.jw3a = new lib.btnA();
	this.jw3a.name = "jw3a";
	this.jw3a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw3a, 0, 1, 1);

	this.instance_38 = new lib.CachedBmp_30();
	this.instance_38.setTransform(458.9,8.4,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_29();
	this.instance_39.setTransform(86.8,130.05,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_40();
	this.instance_40.setTransform(155.5,481,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_39();
	this.instance_41.setTransform(155.5,418.1,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_38();
	this.instance_42.setTransform(155.5,360.9,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_37();
	this.instance_43.setTransform(155.5,302.55,0.5,0.5);

	this.jw4d = new lib.btnD();
	this.jw4d.name = "jw4d";
	this.jw4d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw4d, 0, 1, 1);

	this.jw4c = new lib.btnC();
	this.jw4c.name = "jw4c";
	this.jw4c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw4c, 0, 1, 1);

	this.jw4b = new lib.btnB();
	this.jw4b.name = "jw4b";
	this.jw4b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw4b, 0, 1, 1);

	this.jw4a = new lib.btnA();
	this.jw4a.name = "jw4a";
	this.jw4a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw4a, 0, 1, 1);

	this.instance_44 = new lib.CachedBmp_36();
	this.instance_44.setTransform(458.9,8.4,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_35();
	this.instance_45.setTransform(87.55,134.75,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_46();
	this.instance_46.setTransform(153.7,475.2,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_45();
	this.instance_47.setTransform(153.7,416.25,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_44();
	this.instance_48.setTransform(153.7,359.05,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_43();
	this.instance_49.setTransform(153.7,304.4,0.5,0.5);

	this.jw5d = new lib.btnD();
	this.jw5d.name = "jw5d";
	this.jw5d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw5d, 0, 1, 1);

	this.jw5c = new lib.btnC();
	this.jw5c.name = "jw5c";
	this.jw5c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw5c, 0, 1, 1);

	this.jw5b = new lib.btnB();
	this.jw5b.name = "jw5b";
	this.jw5b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw5b, 0, 1, 1);

	this.jw5a = new lib.btnA();
	this.jw5a.name = "jw5a";
	this.jw5a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw5a, 0, 1, 1);

	this.instance_50 = new lib.CachedBmp_42();
	this.instance_50.setTransform(458.9,8.4,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_41();
	this.instance_51.setTransform(81.85,124.4,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_52();
	this.instance_52.setTransform(155.55,479.15,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_51();
	this.instance_53.setTransform(155.55,419.95,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_50();
	this.instance_54.setTransform(155.55,359.05,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_49();
	this.instance_55.setTransform(155.55,302.55,0.5,0.5);

	this.jw6d = new lib.btnD();
	this.jw6d.name = "jw6d";
	this.jw6d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw6d, 0, 1, 1);

	this.jw6c = new lib.btnC();
	this.jw6c.name = "jw6c";
	this.jw6c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw6c, 0, 1, 1);

	this.jw6b = new lib.btnB();
	this.jw6b.name = "jw6b";
	this.jw6b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw6b, 0, 1, 1);

	this.jw6a = new lib.btnA();
	this.jw6a.name = "jw6a";
	this.jw6a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw6a, 0, 1, 1);

	this.instance_56 = new lib.CachedBmp_48();
	this.instance_56.setTransform(458.9,8.4,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_47();
	this.instance_57.setTransform(87.65,107.75,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_58();
	this.instance_58.setTransform(154.5,475.2,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_57();
	this.instance_59.setTransform(154.5,416.25,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_56();
	this.instance_60.setTransform(154.5,359.05,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_55();
	this.instance_61.setTransform(154.5,302.55,0.5,0.5);

	this.jw7d = new lib.btnD();
	this.jw7d.name = "jw7d";
	this.jw7d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw7d, 0, 1, 1);

	this.jw7c = new lib.btnC();
	this.jw7c.name = "jw7c";
	this.jw7c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw7c, 0, 1, 1);

	this.jw7b = new lib.btnB();
	this.jw7b.name = "jw7b";
	this.jw7b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw7b, 0, 1, 1);

	this.jw7a = new lib.btnA();
	this.jw7a.name = "jw7a";
	this.jw7a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw7a, 0, 1, 1);

	this.instance_62 = new lib.CachedBmp_54();
	this.instance_62.setTransform(458.9,8.4,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_53();
	this.instance_63.setTransform(85.6,120.75,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_64();
	this.instance_64.setTransform(148.05,475.2,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_63();
	this.instance_65.setTransform(148.05,416.25,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_62();
	this.instance_66.setTransform(148.05,364.85,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_61();
	this.instance_67.setTransform(148.05,302.55,0.5,0.5);

	this.jw8d = new lib.btnD();
	this.jw8d.name = "jw8d";
	this.jw8d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw8d, 0, 1, 1);

	this.jw8c = new lib.btnC();
	this.jw8c.name = "jw8c";
	this.jw8c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw8c, 0, 1, 1);

	this.jw8b = new lib.btnB();
	this.jw8b.name = "jw8b";
	this.jw8b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw8b, 0, 1, 1);

	this.jw8a = new lib.btnA();
	this.jw8a.name = "jw8a";
	this.jw8a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw8a, 0, 1, 1);

	this.instance_68 = new lib.CachedBmp_60();
	this.instance_68.setTransform(458.9,8.4,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_59();
	this.instance_69.setTransform(85.6,110,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_70();
	this.instance_70.setTransform(158.15,475.2,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_69();
	this.instance_71.setTransform(158.15,416.25,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_68();
	this.instance_72.setTransform(158.15,359.05,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_67();
	this.instance_73.setTransform(158.15,302.55,0.5,0.5);

	this.jw9d = new lib.btnD();
	this.jw9d.name = "jw9d";
	this.jw9d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw9d, 0, 1, 1);

	this.jw9c = new lib.btnC();
	this.jw9c.name = "jw9c";
	this.jw9c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw9c, 0, 1, 1);

	this.jw9b = new lib.btnB();
	this.jw9b.name = "jw9b";
	this.jw9b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw9b, 0, 1, 1);

	this.jw9a = new lib.btnA();
	this.jw9a.name = "jw9a";
	this.jw9a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw9a, 0, 1, 1);

	this.instance_74 = new lib.CachedBmp_66();
	this.instance_74.setTransform(458.9,8.4,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_65();
	this.instance_75.setTransform(83.35,129.45,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_76();
	this.instance_76.setTransform(151.75,475.2,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_75();
	this.instance_77.setTransform(151.75,416.25,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_74();
	this.instance_78.setTransform(151.75,359.05,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_73();
	this.instance_79.setTransform(151.75,302.55,0.5,0.5);

	this.jw10d = new lib.btnD();
	this.jw10d.name = "jw10d";
	this.jw10d.setTransform(92.35,481,0.7491,0.7491);
	new cjs.ButtonHelper(this.jw10d, 0, 1, 1);

	this.jw10c = new lib.btnC();
	this.jw10c.name = "jw10c";
	this.jw10c.setTransform(92.35,422.05,0.6885,0.6885);
	new cjs.ButtonHelper(this.jw10c, 0, 1, 1);

	this.jw10b = new lib.btnB();
	this.jw10b.name = "jw10b";
	this.jw10b.setTransform(92.35,364.85,0.678,0.678);
	new cjs.ButtonHelper(this.jw10b, 0, 1, 1);

	this.jw10a = new lib.btnA();
	this.jw10a.name = "jw10a";
	this.jw10a.setTransform(92.35,308.35,0.6667,0.6667);
	new cjs.ButtonHelper(this.jw10a, 0, 1, 1);

	this.instance_80 = new lib.CachedBmp_72();
	this.instance_80.setTransform(458.9,8.4,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_71();
	this.instance_81.setTransform(92.35,130.65,0.5,0.5);

	this.gerak4 = new lib.fisika();
	this.gerak4.name = "gerak4";
	this.gerak4.setTransform(905.8,80.05,1,1,0,0,0,50,90);

	this.gerak3 = new lib.fisika();
	this.gerak3.name = "gerak3";
	this.gerak3.setTransform(420.15,76.65,1,1,0,0,0,50,90);

	this.instance_82 = new lib.CachedBmp_77();
	this.instance_82.setTransform(470.15,60.75,0.5,0.5);

	this.instance_83 = new lib.animasi1();
	this.instance_83.setTransform(249.05,758.35,1,1,180);
	new cjs.ButtonHelper(this.instance_83, 0, 1, 1);

	this.instance_84 = new lib.animasi1();
	this.instance_84.setTransform(1052.05,-20.15);
	new cjs.ButtonHelper(this.instance_84, 0, 1, 1);

	this.gerak2 = new lib.fisika();
	this.gerak2.name = "gerak2";
	this.gerak2.setTransform(1108,199.25,1,1,0,0,0,50,90);

	this.gerak1 = new lib.fisika();
	this.gerak1.name = "gerak1";
	this.gerak1.setTransform(189.15,199.25,1,1,0,0,0,50,90);

	this.instance_85 = new lib.CachedBmp_80();
	this.instance_85.setTransform(335.5,344.85,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_79();
	this.instance_86.setTransform(46.7,466.8,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_78();
	this.instance_87.setTransform(99.2,143.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.Tomateri},{t:this.Toquis},{t:this.instance_2}]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.bola1},{t:this.instance_4,p:{rotation:0,x:636.55,y:-32.75}},{t:this.muncul1},{t:this.muncul2},{t:this.bola2},{t:this.bola3},{t:this.muncul3},{t:this.next1}]},1).to({state:[{t:this.sumbux},{t:this.sumbuy},{t:this.bolabergerak},{t:this.instance_7,p:{x:642.3,y:-28.85}},{t:this.instance_4,p:{rotation:180,x:642.3,y:755.2}},{t:this.back1}]},1).to({state:[{t:this.instance_9},{t:this.rumus1},{t:this.btnrumus},{t:this.instance_8},{t:this.next3}]},1).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.back2}]},1).to({state:[{t:this.instance_16},{t:this.btnrumus2},{t:this.rumus2},{t:this.instance_15},{t:this.text2,p:{x:85.65,y:502.75,text:"Meskipun kecepatan pada arah horisontal besarnya konstan, namun resultan vektor kecepatan objek di setiap waktu t selalu mengalami perubahan karena kecepatan pada sumbu y selalu mengalami perubahan. Resultan vektor kecepatannya dapat dituliskan dengan :",font:"35px 'Times New Roman'",lineHeight:40.75,lineWidth:1106}},{t:this.rumus3},{t:this.next4}]},1).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.back3}]},1).to({state:[]},1).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.jw1a},{t:this.jw1b},{t:this.jw1c},{t:this.jw1d},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]},1).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.jw2a},{t:this.jw2b},{t:this.jw2c},{t:this.jw2d},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]},1).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.jw3a},{t:this.jw3b},{t:this.jw3c},{t:this.jw3d},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]},1).to({state:[{t:this.instance_45},{t:this.instance_44},{t:this.jw4a},{t:this.jw4b},{t:this.jw4c},{t:this.jw4d},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40}]},1).to({state:[{t:this.instance_51},{t:this.instance_50},{t:this.jw5a},{t:this.jw5b},{t:this.jw5c},{t:this.jw5d},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46}]},1).to({state:[{t:this.instance_57},{t:this.instance_56},{t:this.jw6a},{t:this.jw6b},{t:this.jw6c},{t:this.jw6d},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52}]},1).to({state:[{t:this.instance_63},{t:this.instance_62},{t:this.jw7a},{t:this.jw7b},{t:this.jw7c},{t:this.jw7d},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58}]},1).to({state:[{t:this.instance_69},{t:this.instance_68},{t:this.jw8a},{t:this.jw8b},{t:this.jw8c},{t:this.jw8d},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64}]},1).to({state:[{t:this.instance_75},{t:this.instance_74},{t:this.jw9a},{t:this.jw9b},{t:this.jw9c},{t:this.jw9d},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70}]},1).to({state:[{t:this.instance_81},{t:this.instance_80},{t:this.jw10a},{t:this.jw10b},{t:this.jw10c},{t:this.jw10d},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76}]},1).to({state:[{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.gerak3},{t:this.gerak4}]},1).to({state:[{t:this.instance_7,p:{x:638.2,y:683.4}},{t:this.instance_4,p:{rotation:180,x:638.2,y:33.75}},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.text2,p:{x:726.4,y:350.65,text:"",font:"50px 'Hobo Std'",lineHeight:72.8,lineWidth:116}},{t:this.gerak1},{t:this.gerak2}]},1).to({state:[]},1).wait(1));

	// Bg
	this.fisik1 = new lib.fisika();
	this.fisik1.name = "fisik1";
	this.fisik1.setTransform(121.2,177.05,1,1,0,0,0,50,90);

	this.fisik2 = new lib.fisika();
	this.fisik2.name = "fisik2";
	this.fisik2.setTransform(1157.7,177.05,1,1,0,0,0,50,90);

	this.instance_88 = new lib.animasi2();
	this.instance_88.setTransform(634.7,719.25,1,1,0,0,0,666.5,110.1);

	this.instance_89 = new lib.animasi2();
	this.instance_89.setTransform(634.7,-23.05,1,1,0,0,0,666.5,110.1);

	this.enter = new lib.masuk();
	this.enter.name = "enter";
	this.enter.setTransform(863.7,574.35);
	new cjs.ButtonHelper(this.enter, 0, 1, 1);

	this.myCSS = new lib.an_CSS({'id': 'myCSS', 'href':'assets/style.css'});

	this.myCSS.name = "myCSS";
	this.myCSS.setTransform(-40.35,15.1,0.8366,1.3734,0,0,0,50,11);

	this.txtname = new lib.an_TextInput({'id': 'txtname', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtname.name = "txtname";
	this.txtname.setTransform(1003.15,386.85,4.3648,2.7545,0,0,0,50.2,11);

	this.instance_90 = new lib.CachedBmp_84();
	this.instance_90.setTransform(754.9,285.3,0.5,0.5);

	this.instance_91 = new lib.CachedBmp_83();
	this.instance_91.setTransform(792.9,92.65,0.5,0.5);

	this.instance_92 = new lib.animasi1();
	this.instance_92.setTransform(1188.55,360,1,1,0,0,0,614.6,360);
	new cjs.ButtonHelper(this.instance_92, 0, 1, 1);

	this.instance_93 = new lib.CachedBmp_82();
	this.instance_93.setTransform(267.35,406.9,0.5,0.5);

	this.instance_94 = new lib.logo();
	this.instance_94.setTransform(128,127,0.773,0.7729);

	this.instance_95 = new lib.ikon();
	this.instance_95.setTransform(21,44,1.2,1.2);

	this.instance_96 = new lib.CachedBmp_81();
	this.instance_96.setTransform(849.95,495.9,0.5,0.5);

	this.gerak = new lib.fisika();
	this.gerak.name = "gerak";
	this.gerak.setTransform(1150,88,1,1,0,0,0,50,90);

	this.scoretotal = new cjs.Text("", "40px 'Hobo Std'", "#FFFFFF");
	this.scoretotal.name = "scoretotal";
	this.scoretotal.lineHeight = 59;
	this.scoretotal.lineWidth = 116;
	this.scoretotal.parent = this;
	this.scoretotal.setTransform(192.25,650.85);

	this.instance_97 = new lib.CachedBmp_86();
	this.instance_97.setTransform(16.75,639.6,0.5,0.5);

	this.instance_98 = new lib.kakipapantulis();
	this.instance_98.setTransform(550.05,631.2,1,1,0,0,0,190.1,67);

	this.next = new lib.nextbtn();
	this.next.name = "next";
	this.next.setTransform(954.7,493.15,0.8523,0.8523,0,0,0,44.2,44.1);
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.benarbtn = new lib.benar();
	this.benarbtn.name = "benarbtn";
	this.benarbtn.setTransform(640.7,376.4,1,1,0,0,0,196.8,72.8);

	this.salahbtn = new lib.salah();
	this.salahbtn.name = "salahbtn";
	this.salahbtn.setTransform(637.7,375.15,1,1,0,0,0,196.8,72.8);

	this.instance_99 = new lib.guru();
	this.instance_99.setTransform(886,223);

	this.instance_100 = new lib.CachedBmp_87();
	this.instance_100.setTransform(0.55,-2.55,0.5,0.5);

	this.instance_101 = new lib.CachedBmp_88();
	this.instance_101.setTransform(18.75,639.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_89,p:{scaleX:1,rotation:0,x:634.7,y:-23.05}},{t:this.instance_88,p:{scaleX:1,rotation:0,x:634.7,y:719.25}},{t:this.fisik2},{t:this.fisik1}]}).to({state:[]},1).to({state:[{t:this.instance_89,p:{scaleX:0.6047,rotation:90,x:1286.7,y:375.35}},{t:this.instance_88,p:{scaleX:0.6047,rotation:-90,x:-26.45,y:337.1}}]},2).to({state:[{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.txtname},{t:this.myCSS},{t:this.enter}]},4).to({state:[{t:this.instance_100,p:{x:0.55}},{t:this.instance_99,p:{x:886}},{t:this.salahbtn,p:{x:637.7}},{t:this.benarbtn,p:{x:640.7}},{t:this.next,p:{x:954.7}},{t:this.instance_98,p:{x:550.05}},{t:this.instance_97},{t:this.scoretotal,p:{x:192.25,color:"#FFFFFF"}},{t:this.gerak,p:{x:1150}}]},1).to({state:[{t:this.instance_100,p:{x:2.55}},{t:this.instance_99,p:{x:888}},{t:this.salahbtn,p:{x:639.7}},{t:this.benarbtn,p:{x:642.7}},{t:this.next,p:{x:956.7}},{t:this.instance_98,p:{x:552.05}},{t:this.instance_101},{t:this.scoretotal,p:{x:194.25,color:"#FFFFCC"}},{t:this.gerak,p:{x:1152}}]},1).to({state:[]},9).wait(3));

	// lantai
	this.instance_102 = new lib.lantai();
	this.instance_102.setTransform(663.8,646.3,1,1,0,0,0,665.1,71.7);

	this.instance_103 = new lib.CachedBmp_89();
	this.instance_103.setTransform(924.6,471.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_103},{t:this.instance_102}]},8).to({state:[{t:this.instance_102}]},1).to({state:[]},9).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1938.8,865.8);
// library properties:
lib.properties = {
	id: 'F425DCD020B42D498162DDD584672FE8',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_123.png?1624202956107", id:"CachedBmp_123"},
		{src:"images/CachedBmp_112.png?1624202956107", id:"CachedBmp_112"},
		{src:"images/CachedBmp_99.png?1624202956107", id:"CachedBmp_99"},
		{src:"images/CachedBmp_79.png?1624202956107", id:"CachedBmp_79"},
		{src:"images/CachedBmp_78.png?1624202956107", id:"CachedBmp_78"},
		{src:"images/CachedBmp_87.png?1624202956107", id:"CachedBmp_87"},
		{src:"images/CachedBmp_13.png?1624202956107", id:"CachedBmp_13"},
		{src:"images/CachedBmp_5.png?1624202956107", id:"CachedBmp_5"},
		{src:"images/_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_1.png?1624202955554", id:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_1"},
		{src:"images/_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_2.png?1624202955554", id:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_2"},
		{src:"images/_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_3.png?1624202955554", id:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_3"},
		{src:"images/_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4.png?1624202955555", id:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_4"},
		{src:"images/_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5.png?1624202955556", id:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_5"},
		{src:"images/_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6.png?1624202955557", id:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_6"},
		{src:"images/_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7.png?1624202955559", id:"_UAS__PBK4__RhisaAdikaPutri__191401119__atlas_7"},
		{src:"sounds/happyclappyukulele.mp3?1624202956107", id:"happyclappyukulele"},
		{src:"sounds/Right.mp3?1624202956107", id:"Right"},
		{src:"sounds/Next.mp3?1624202956107", id:"Next"},
		{src:"sounds/Wrong.mp3?1624202956107", id:"Wrong"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1624202956107", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1624202956107", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1624202956107", id:"an.TextInput"},
		{src:"components/ui/src/css.js?1624202956107", id:"an.CSS"}
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
an.compositions['F425DCD020B42D498162DDD584672FE8'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
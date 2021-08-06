var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playermallet = createSprite(200, 50, 50, 10);
playermallet.shapeColor="black";
var compmallet = createSprite(200, 350, 50, 10);
compmallet.shapeColor="red";
var striker = createSprite(200, 200, 10, 10);
striker.shapeColor="white";
var goal1 = createSprite(200, 23, 100, 20);
goal1.shapeColor="yellow";
var goal2 = createSprite(200, 377, 100, 20);
goal2.shapeColor="yellow";
var boundleft = createSprite(10, 200, 5, 400);
boundleft.shapeColor="white";
var boundup = createSprite(200, 10, 400, 5);
boundup.shapeColor="white";
var bounddown = createSprite(200, 390, 400, 5);
bounddown.shapeColor="white";
var boundright = createSprite(390, 200, 5, 400);
boundright.shapeColor="white";
var up2 = createSprite(200, 120, 400, 5);
up2.shapeColor="white";
var down2 = createSprite(200, 280, 400, 5);
down2.shapeColor="white";
var gamestate = "serve";
var comscore = 0;

var playerscore = 0;

function draw() {

background("green");
   fill("white");
   textSize(25);
   text(comscore, 20, 230);
   textSize(25);
   text(playerscore, 20, 180);


  createEdgeSprites();  
 playermallet.bounceOff(edges);
 compmallet.bounceOff(edges);
 striker.bounceOff(boundup);
 striker.bounceOff(bounddown);
 striker.bounceOff(boundleft);
striker.bounceOff(boundright);
 striker.bounceOff(playermallet);
striker.bounceOff(compmallet);

  compmallet.x = striker.x;
 
 if (gamestate === "serve") {
   fill("white");
   textSize(30);
   text("Press Space to Serve",70,180);
  }

  if (keyDown("space") && gamestate === "serve") {
    serve();
    gamestate = "play";
  }
      if (keyDown("down")) {
      if (playermallet.y<120) {
        playermallet.y = playermallet.y+10;
      } }
   if (keyDown("up")) {
    if (playermallet.y>25) {
      playermallet.y = playermallet.y-10;
    }}
if (keyDown(RIGHT_ARROW)) {
  playermallet.x = playermallet.x + 10;
}
if (keyDown(LEFT_ARROW)) {
  playermallet.x = playermallet.x-10;
}
if (striker.isTouching(goal1) && gamestate === "play") {
  comscore = comscore + 1;
  reset();
  gamestate = "serve";
}
if (striker.isTouching(goal2) && gamestate === "play") {
  playerscore = playerscore + 1;
  reset();
  gamestate = "serve";
}
  if (playerscore === 5 || comscore === 5) {
    
    text("GAME OVER! ", 130, 150);
    text("press R to restart", 100, 240);
    fill("green");
   textSize(30);
   text("Press Space to Serve",70,180);
   gamestate = "over";
  }
  if (keyDown("r")&& gamestate === "over") {
    gamestate = "serve";
    comscore = 0;
    playerscore = 0;
  }
  drawnet();
  drawSprites();
}
function serve() {
  striker.velocityX=3;
  striker.velocityY=4;
  
}
function drawnet() {
    for (var i = 0; i < 400; i=i+20) {
    line(i, 200, i+10, 200);
    
  }
}
function reset() {
  striker.x= 200;
  striker.y= 200;
  striker.velocityX=0;
  striker.velocityY= 0;
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

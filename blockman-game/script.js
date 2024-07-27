var LEVELS = [
  [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x     v                                                                     x",
    "x                                                                           x",
    "x                                                                           x",
    "x                                                                           x",
    "x                                                                           x",
    "x                                                               xxx         x",
    "x                                                xx      xx    xx!xx        x",
    "x                                 o o      xx                  x!!!x        x",
    "x                                                              xx!xx        x",
    "x                                xxxxx                          x!x         x",
    "xo                                                               !         xx ",
    "xx                                      oooo                     !          x ",
    "x                     o                                          !          x ",
    "x                                      xxxxx                     !        o x ",
    "x          xxxx       o                                          !          x ",
    "x  @    !!  x  x                                             xxxxxxo        x ",
    "xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxx ",
    "                            x   x                  x     x                    ",
    "                            x!!!x                  x!!!!!x                    ",
    "                            x!!!x                  x!!!!!x                    ",
    "                            xxxxx                  xxxxxxx                    "
  ],
  [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!x",
    "x                                     x!!x                     xxxx     xxxx                                 x!x",
    "x                                     x!!xxxxxxxxxx           xx           xx                                x!x",
    "x                                     xx!!!!!!!!!!xx         xx             xx                               x!x",
    "x                                      xxxxxxxxxx!!x         x                                    o   o   o  x!x",
    "x                                               xx!x         x     o   o                                    xx!x",
    "x                                                x!x         x    !  !  !                       xxxxxxxxxxxxxxx!",
    "x                                                x!x         x     x   x                        !!!!!!!!!!!!!!xx",
    "x                                                 v          xx           xx           !xxxxxxxxxxxxxxxxxxxxx  x",
    "x                                                             xx!!!!!!!!!!!xx                                  x",
    "x                                                              xxxx!!!!!xxxx                                   x",
    "x                                              x     xx            xxxxxxx        xxx         xxx              x",
    "x                                              x     x                           x x         x x               x",
    "x                                              x     x                             x         x                 x",
    "x                                              x     x                             xx        x                 x",
    "x                                              xx    x                             x        x xx               x",
    "x                                              x     x     !ooooo!   x   x         x         x                 x",
    "x              xxxxxxx        xxx   xxx        x     x     !     !   x   x         x         x                 x",
    "x             xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                 x",
    "x            xx       xx        x o x          x    xx               x   x   x               x                 x",
    "x    @       x         x        x   x          x     x               x   x   x               x                 x",
    "x   xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                 x",
    "x   x x      x         x       xx o xx         x     x               x     o     x x         x                 x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x           x x         x                 x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                 x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!x    o                 xx!!!!!!xx !                    xx     xx                  x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                   x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx   !   xxxxxxxxxxxxxx!!!!!!xx   !                                               x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  ],
  [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                                                                                                          x",
    "x                                      o                                                                   x",
    "x                                      x                                                                   x",
    "x                                      x                                                                   x",
    "x                                     xxx                                                                  x",
    "x                                     x x                 !!!        !!!  xxx                              x",
    "x                                     x x                 !x!        !x!                                   x",
    "x                                   xxx xxx                x          x                                    x",
    "x                                    x   x                 x   ooooo  x       xxx                          x",
    "x                                    x   x                 x          x      x!!!x                         x",
    "x                                    x   x                 xxxxxxxx xxx       xxx                          x",
    "x                                   xx   xx      x   x      x                                              x",
    "x                                    x   xxxxxxxxx   xxxxxxxx              x x                             x",
    "x                                    x   x           x                    x!!!x                            x",
    "x                                    x   x           x                     xxx                             x",
    "x                                   xx   xx !      ! x                                                     x",
    "x                                    x   x           x            xxx                                      x",
    "x                                    x   x           x           x!!!x                                     x",
    "x                                    x   x    !      x     o      xxx       xxx                            x",
    "x                                   xx   xx          x                     x!!!x                           x",
    "x                            o   o   x   x           x     x                xxv        xxx                 x",
    "x                                    x   x           x              x                 x!!!x                x",
    "x                           xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                 x",
    "x                           x xxx x x xxx x          x!!!!!!!!!!!!!!x                                      x",
    "x                           x             x   xxxxxxxxxxxxxxxxxxxxxxx                                      x",
    "x                           xx           xx                                         xxx                  o x",
    "xxxx                         x     x     x                                         x!!!x                xxxx",
    "xx x                         x    xxx    x                                          xxx                 x xx",
    "xx                           x    xxx    xxxxxxx                        xxxxx                             xx",
    "xx                           x           x                              x   x                             xx",
    "xx                           xx          x                              x x x                             xx",
    "xx                                       x        xxxx      xxxx      xxx xxx                             xx",
    "xx                xxx             o o    x                              x         xxx                     xx",
    "xx               xxxxx       xx          x                             xxx       x!!!x          x         xx",
    "xx               oxxxo       x    xxx    x                             x x        xxx          xxx        xx",
    "xx                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        xx",
    "xx      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx   oooooooooooooooo x o       xx",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  ],
  [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                                                                                                 x",
    "x                                                                                                 x",
    "x                         o                                                                       x",
    "x                                                                                            o o ox",
    "x                  xxx                                                                            x",
    "x      !  o  !                                                xxxxx x           x   x x   x xxxxx x",
    "x      x     x                                                    x x           x   x x   x x   x x",
    "x      x! o !x            x                                   xxx x x          xx   x x   x xxx x x",
    "x      x     x                                                 x!x!!!x       !!! x x   x x ! x x !x",
    "x      !  o  !            o                                 xxxxvxxxxx       xxvxx xxxxx xxvxx xxvx",
    "x                                                                                                 x",
    "x         o             xxx                              xx                                       x",
    "x                                                                                                 x",
    "x                                                                                                 x",
    "x                                                    xx                                           x",
    "x                 xxx         xxx                                                                 x",
    "x                                                                                                 x",
    "x                        o                                                     x      x           x",
    "x                                                        xx     xx                         o      x",
    "x           xxx         xxx         xxx                                 x                  x      x",
    "x                                                                                                 x",
    "x         @                                                                                       x",
    "xxxxxxxxxxxx                                                                                      x",
    "xx         x o xxxxxxxxx o xxxxxxxxx o xx                                                x        x",
    "xx         x   x       x   x       x   x                                     x     x              x",
    "xx  o      xxxxx   o   xxxxx   o   xxxxx                                                          x",
    "xxxxxxxx                                     xxxxx       xx     xx     xxx                        x",
    "x!!!!!!x            !          !             x!!!x                     xxx                        x",
    "x!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!"
  ],
  [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "xooooooooooooooooooooooooooooooooooooooooooooooooooooooooooox",
    "xo@ooooooooooooooooooooooooooooooooooooooooooooooooooooooooox",
    "x xxxxooooooooxxooooooooxxxxoooooxxxxoooooxxxxoooooooooxxxxox",
    "xooxxxxooooooxxxxooooooxxxxooooooxxxxoooooxxxxoxooooooxxxxoox",
    "xoooxxxxooooxxxxxxooooxxxxoooooooxxxxooxooxxxxooxooooxxxxooox",
    "xooooxxxxooxxxooxxxooxxxxoooooxooxxxxoooooxxxxoooxooxxxxoooox",
    "xoooooxxxxxxxxooxxxxxxxxoooooooooxxxxoooooxxxxooooxxxxxooooox",
    "xooooooooooooooooooooooooooooooooooooooooooooooooooooooooooox",
    "x=ooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!x",
    "xxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                                                           x",
    "x                                                           x",
    "x                                                           x",
    "x        x        x                                         x",
    "x         xoooooox                                          x",
    "x          xxxxxx                                           x",
    "x                       x       x                           x",
    "x                        xooo!!x                            x",
    "x                         xxxxx                             x",
    "x                                                           x",
    "x                                                           x",
    "x                                     x       x             x",
    "x                                      x!!!!!x              x",
    "x                                       xxxxx               x",
    "x                         x      x                          x",
    "x                          xoooox                           x",
    "x                           xxxx                            x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  ],
  [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                    !                           !                                  !                                oox",
    "x @                  v                           v                                  v                                oox",
    "x xx                                                              o                                                  xxx",
    "x                                  o                              xx                                                x  x",
    "x                                  xx                               x                                              x   x",
    "x                        o                                                                                 o!          x",
    "x            o           xx                                                o                               xx          x",
    "x           xx                                                             xx        x             x                   x",
    "x                              x                                                      x                                x",
    "x                                                !                                             o                       x",
    "x     o                      o                  xx!                                            xx                      x",
    "x    xx                     xx                    v                                           x  x                     x",
    "x                                                                                                           x          x",
    "x                         x                                                        o                                   x",
    "x                                                                                 xx                     o             x",
    "x                    o                                                                                   xx            x",
    "x                    xx                          xxx            o           x                                          x",
    "x                                    x          x               xx                                 o                   x",
    "x                           o                                                                      xx                  x",
    "x              o            xx                                 x                                  x   x                x",
    "x              xx                                                                      o                               x",
    "x    !o                                                                                xx                       o      x",
    "x    xx                                                                                                         xx     x",
    "x                                                                                            x                 x       x",
    "x                                                                                                  oo                  x",
    "x                                                                                                  xx                  x",
    "x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  ],
  [
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x            x                                                                                                         x",
    "xx@          x                                                                                                         x",
    "x   x       ox                                                x                                                        x",
    "x  x        x               o                                 x                                                        x",
    "x x        x               xxxxxxxxx         o                x                                                        x",
    "xx        x               x                xxxxxxx            x                                                        x",
    "x        x               x                       x            x                                                        x",
    "x       x               x                        x            x                                                       !x",
    "x       x              x                         xxxxxxxx     x                                                       vx",
    "x       x             x                                 x     x                                                        x",
    "x       x            x              xxxxxx              x!!!!!x                            x             x",
    "x       xx          x                    x              xxxxxxx                           xx!         o  x",
    "x       xxx          x                   x                                      o          x          xxxx",
    "xo      x             x                  xxxxxxx                                x          x o           x",
    "xx       x          xxxx                       x                                           xxxx         !x",
    "x x       x             x                      x                  xxxxxxxx                 x          o  x",
    "x  x       x             x                     x    o                                      x          xxxx",
    "x   x       x             x                    xxxxxxxx      x                             x!            x",
    "x    x       x             x                                                               x             x",
    "x   x         x             x                                                              x  o         !x",
    "x  x        ox      o        x                                                             xxxx          x",
    "x x         x       xxx       x                                                            x             x",
    "xx         x!!!!!!!!x          x                                                           x             x",
    "x         xxxxxxxxxxx           x                                                          x!           ox",
    "x                              x                                                           x         xxxxx",
    "x                             x                                                            xo            x",
    "x       o         o          x                                                             xxxxx         x",
    "x                           x                                                              x             x",
    "x       !         !        x !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xooooooooooooo oooooooooooo!x",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  ],
  [
    "xxxxxxxxxxxx",
    "            ",
    "            ",
    "@      o    ",
    "xxxxxxxxxxxx"
  ]
];
var LEVELS = loadLevels();
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.times = function (scale) {
  return new Vector(this.x * scale, this.y * scale);
};

// Note: uppercase words are used that means constructor are values
var actorchars = {
  "@": Player,
  o: Coin,
  "=": Lava,
  "|": Lava,
  v: Lava
};

function Player(pos) {
  this.pos = pos.plus(new Vector(0, -0.5));
  this.size = new Vector(0.5, 1);
  this.speed = new Vector(0, 0);
}
Player.prototype.type = "player";

function Lava(pos, ch) {
  this.pos = pos;
  this.size = new Vector(1, 1);
  if (ch === "=") this.speed = new Vector(10, 0);
  else if (ch === "|") this.speed = new Vector(0, 2);
  else if (ch === "v") {
    this.speed = new Vector(0, 3);
    this.repeatPos = pos;
  }
}
Lava.prototype.type = "Lava";

let totalCoin = 0;
function Coin(pos) {
  this.basePos = this.pos = pos;
  this.size = new Vector(0.6, 0.6);
  // take a look back
  this.wobble = Math.random() * Math.PI * 2;
  totalCoin++;
}
Coin.prototype.type = "coin";

function showPontos() {
  document.getElementById("pts").textContent = totalCoin + " - " + contCoin;
  if (totalCoin == contCoin) {
    totalCoin = 0;
    contCoin = 0;
  }
}

Level.prototype.isFinished = function () {
  return this.status != null && this.finishDelay < 0;
};

function Level(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  this.grid = [];
  this.actors = [];

  for (var y = 0; y < this.height; y++) {
    var line = plan[y],
      gridLine = [];
    for (var x = 0; x < this.width; x++) {
      var ch = line[x],
        fieldType = null;
      var Actor = actorchars[ch];
      if (Actor) this.actors.push(new Actor(new Vector(x, y), ch));
      else if (ch === "x") fieldType = "wall";
      else if (ch === "!" || ch === "=" || ch === "|" || ch === "v")
        fieldType = "lava";
      gridLine.push(fieldType);
    }
    this.grid.push(gridLine);
  }

  this.player = this.actors.filter(function (actor) {
    return actor.type === "player";
  })[0];
  this.status = this.finishDelay = null;
}

function element(name, className) {
  var elem = document.createElement(name);
  if (className) elem.className = className;
  return elem;
}

function DOMDisplay(parent, level) {
  const telaGame = document.getElementById("game");
  this.wrap = telaGame.appendChild(element("div", "game"));
  this.level = level;

  this.wrap.appendChild(this.drawBackground());
  this.actorLayer = null;
  this.drawFrame();
}

var scale = 15;

DOMDisplay.prototype.drawBackground = function () {
  var table = element("table", "background");
  table.style.width = this.level.width * scale + "px";
  table.style.height = this.level.height * scale + "px";
  this.level.grid.forEach(function (row) {
    var rowElement = table.appendChild(element("tr"));
    rowElement.style.height = scale + "px";
    row.forEach(function (type) {
      rowElement.appendChild(element("td", type));
    });
  });
  return table;
};

DOMDisplay.prototype.drawActors = function () {
  var wrap = element("div");
  this.level.actors.forEach(function (actor) {
    var rect = wrap.appendChild(element("div", "actor " + actor.type));
    rect.style.width = actor.size.x * scale + "px";
    rect.style.height = actor.size.y * scale + "px";
    rect.style.left = actor.pos.x * scale + "px";
    rect.style.top = actor.pos.y * scale + "px";
  });
  return wrap;
};

DOMDisplay.prototype.drawFrame = function () {
  if (this.actorLayer) this.wrap.removeChild(this.actorLayer);
  this.actorLayer = this.wrap.appendChild(this.drawActors());
  this.wrap.className = "game " + (this.level.status || "");
  this.scrollPlayerIntoView();
};

// clear it later
DOMDisplay.prototype.scrollPlayerIntoView = function () {
  var width = this.wrap.clientWidth;
  var height = this.wrap.clientHeight;
  var margin = width / 3;

  // The viewport
  var left = this.wrap.scrollLeft,
    right = left + width;
  var top = this.wrap.scrollTop,
    bottom = top + height;

  var player = this.level.player;
  var center = player.pos.plus(player.size.times(0.5)).times(scale);

  if (center.x < left + margin) this.wrap.scrollLeft = center.x - margin;
  else if (center.x > right - margin)
    this.wrap.scrollLeft = center.x + margin - width;
  if (center.y < top + margin) this.wrap.scrollTop = center.y - margin;
  else if (center.y > bottom - margin)
    this.wrap.scrollTop = center.y + margin - height;
};

DOMDisplay.prototype.clear = function () {
  try {
    if (this.wrap && this.wrap.parentNode) {
      this.wrap.parentNode.removeChild(this.wrap);
    } else {
      console.log("Parent node or wrap element does not exist.");
      throw new Error("Parent node or wrap element does not exist.");
    }
  } catch (error) {
    console.log("An error occurred: ", error);
    throw error; // Re-lançar o erro para interromper a execução
  }
};

Level.prototype.obstacleAt = function (pos, size) {
  var xStart = Math.floor(pos.x);
  var xEnd = Math.ceil(pos.x + size.x);
  var yStart = Math.floor(pos.y);
  var yEnd = Math.ceil(pos.y + size.y);

  if (xStart < 0 || xEnd > this.width || yStart < 0) return "wall";
  if (yEnd > this.height) return "lava";
  for (var y = yStart; y < yEnd; y++) {
    for (var x = xStart; x < xEnd; x++) {
      var fieldType = this.grid[y][x];
      if (fieldType) return fieldType;
    }
  }
};

Level.prototype.actorAt = function (actor) {
  for (var i = 0; i < this.actors.length; i++) {
    var other = this.actors[i];
    if (
      other != actor &&
      actor.pos.x + actor.size.x > other.pos.x &&
      actor.pos.x < other.pos.x + other.size.x &&
      actor.pos.y + actor.size.y > other.pos.y &&
      actor.pos.y < other.pos.y + other.size.y
    )
      return other;
  }
};

var maxStep = 0.05;

Level.prototype.animate = function (step, keys) {
  if (this.status != null) this.finishDelay -= step;

  while (step > 0) {
    var thisStep = Math.min(step, maxStep);
    this.actors.forEach(function (actor) {
      actor.act(thisStep, this, keys);
    }, this);
    step -= thisStep;
  }
};

Lava.prototype.act = function (step, level) {
  var newPos = this.pos.plus(this.speed.times(step));
  if (!level.obstacleAt(newPos, this.size)) {
    this.pos = newPos;
  } else if (this.repeatPos) {
    this.pos = this.repeatPos;
  } else {
    this.speed = this.speed.times(-1);
  }

  // Verifica colisão com o jogador
  var player = level.player;
  if (
    player.pos.x + player.size.x > this.pos.x &&
    player.pos.x < this.pos.x + this.size.x &&
    player.pos.y + player.size.y > this.pos.y &&
    player.pos.y < this.pos.y + this.size.y
  ) {
    level.playerTouched("lava");
  }
};

var wobbleSpeed = 8,
  wobbleDist = 0.07;

Coin.prototype.act = function (step) {
  this.wobble += step * wobbleSpeed;
  var wobblePos = Math.sin(this.wobble) * wobbleDist;
  this.pos = this.basePos.plus(new Vector(0, wobblePos));
};

var playerXSpeed = 10;

Player.prototype.moveX = function (step, level, keys) {
  this.speed.x = 0;
  if (keys.left) this.speed.x -= playerXSpeed;
  if (keys.right) this.speed.x += playerXSpeed;

  var motion = new Vector(this.speed.x * step, 0);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if (obstacle) level.playerTouched(obstacle);
  else this.pos = newPos;

  var otherActor = level.actorAt(this);
  if (otherActor) level.playerTouched(otherActor.type, otherActor);
};

var gravity = 30;
var jumpSpeed = 17;

Player.prototype.moveY = function (step, level, keys) {
  this.speed.y += step * gravity;
  var motion = new Vector(0, this.speed.y * step);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if (obstacle) {
    level.playerTouched(obstacle);
    if (keys.up && this.speed.y > 0) {
      this.speed.y = -jumpSpeed;
      jumpSound.play(); // Toca o som de pulo
    } else {
      this.speed.y = 0;
    }
  } else {
    this.pos = newPos;
  }

  var otherActor = level.actorAt(this);
  if (otherActor) level.playerTouched(otherActor.type, otherActor);
};

Player.prototype.act = function (step, level, keys) {
  this.moveX(step, level, keys);
  this.moveY(step, level, keys);

  var otherActor = level.actorAt(this);
  if (otherActor) level.playerTouched(otherActor.type, otherActor);

  // Losing animation
  if (level.status == "lost") {
    this.pos.y += step;
    this.size.y -= step;
  }
};

let contCoin = 0;
Level.prototype.playerTouched = function (type, actor) {
  if (type == "lava" && this.status == null) {
    this.status = "lost";
    this.finishDelay = 1;
    loseSound.play(); // Toca o som de perder
  } else if (type == "coin") {
    contCoin++;
    showPontos();
    coinSound.play(); // Toca o som de pegar moeda
    this.actors = this.actors.filter(function (other) {
      return other != actor;
    });
    if (
      !this.actors.some(function (actor) {
        return actor.type == "coin";
      })
    ) {
      this.status = "won";
      this.finishDelay = 1;
      levelUpSound.play(); // Toca o som de passar de nível
    }
  }
};

window.addEventListener("gamepadconnected", function (e) {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length
  );
});

window.addEventListener("gamepaddisconnected", function (e) {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id
  );
});

var arrowCodes = { 37: "left", 38: "up", 39: "right" };

var gamepadIndex = null;
var gamepadButtons = {
  left: false,
  right: false,
  up: false
};
let gamepadSelect = true;
const buttonState = {
  up: false,
  left: false,
  right: false
};
let touch = false;
function trackKeys(codes) {
  var pressed = Object.create(null);

  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      event.preventDefault();
    }
  }
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  if (touch) {
    return buttonState;
  }

  if (!gamepadSelect) {
    return pressed;
  }

  // Update gamepad state
  function updateGamepad() {
    if (gamepadIndex !== null) {
      var gamepad = navigator.getGamepads()[gamepadIndex];
      if (gamepad) {
        gamepadButtons.left = gamepad.axes[0] < -0.5;
        gamepadButtons.right = gamepad.axes[0] > 0.5;
        gamepadButtons.up = gamepad.buttons[0].pressed;
      }
    }

    // Combine keyboard and gamepad states
    for (var key in gamepadButtons) {
      if (gamepadButtons[key]) {
        pressed[key] = true;
      } else {
        pressed[key] = false;
      }
    }

    requestAnimationFrame(updateGamepad);
  }
  updateGamepad();

  return pressed;
}

window.addEventListener("gamepadconnected", function (e) {
  gamepadIndex = e.gamepad.index;
});

window.addEventListener("gamepaddisconnected", function (e) {
  if (gamepadIndex === e.gamepad.index) {
    gamepadIndex = null;
  }
});

function runAnimation(frameFunc) {
  var lastTime = null;
  function frame(time) {
    var stop = false;
    if (lastTime != null) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      stop = frameFunc(timeStep) === false;
    }
    lastTime = time;
    if (!stop && gameRunning) {
      animationFrameId = requestAnimationFrame(frame);
    }
  }
  animationFrameId = requestAnimationFrame(frame);
}

var arrows = trackKeys(arrowCodes);

function runLevel(level, Display, andThen) {
  var display = new Display(document.body, level);
  runAnimation(function (step) {
    level.animate(step, arrows);
    display.drawFrame(step);
    if (level.isFinished()) {
      display.clear();
      if (andThen) andThen(level.status);
      return false;
    }
  });
}

let faseAtual = localStorage.getItem("faseAtual")
  ? parseInt(localStorage.getItem("faseAtual"))
  : 0;
let desb = localStorage.getItem("faseDesb")
  ? parseInt(localStorage.getItem("faseDesb"))
  : 0;
function runGame(plans, Display, l) {
  if (l == -1) {
    return;
  }
  function startLevel(n) {
    if (l != null) {
      n = l;
    }
    runLevel(new Level(plans[n]), Display, function (status) {
      if (status == "lost") {
        totalCoin = 0;
        contCoin = 0;
        startLevel(n);
        showPontos();
      } else if (n < plans.length - 1) {
        if (faseAtual == desb) {
          desb++;
          localStorage.setItem("faseDesb", desb);
        }
        l++;
        startLevel(n + 1);
        showPontos();
      } else {
        addNewLevel();
        if (faseAtual == desb) {
          desb++;
          localStorage.setItem("faseDesb", desb);
        }
        l++;
        startLevel(n + 1);
        showPontos();
      }
    });
    faseAtual = l;
    localStorage.setItem("faseAtual", faseAtual);
    if (faseAtual > 7) music();
  }
  totalCoin = 0;
  contCoin = 0;
  gameRunning = true;
  startLevel(0);
  showPontos();
}

function activeModal(win) {
  const modal = document.getElementById("modal");
  modal.style = "width:100%;height:100%;";
  const Win = document.getElementById("win");
  Win.textContent = "WIN";
}

function NoActiveModal() {
  const modal = document.getElementById("modal");
  modal.style = "width:0;height:0;";
  runGame(LEVELS, DOMDisplay);
}

var jumpSound = new Audio(
  "https://cdn.pixabay.com/audio/2022/03/24/audio_edfe0e1327.mp3"
);
jumpSound.volume = 0.5;
var coinSound = new Audio(
  "https://cdn.pixabay.com/audio/2022/03/15/audio_d98bd26993.mp3"
);
var loseSound = new Audio(
  "https://cdn.pixabay.com/audio/2023/09/06/audio_3264d5e201.mp3"
);
var levelUpSound = new Audio(
  "https://cdn.pixabay.com/audio/2024/02/07/audio_a143337bbf.mp3"
);
var backgroundMusic = new Audio(
  "https://cdn.pixabay.com/audio/2022/03/14/audio_213c38f164.mp3"
);
var backgroundMusic2 = new Audio(
  "https://cdn.pixabay.com/audio/2022/03/14/audio_7a6ad08cb8.mp3"
);

function music() {
  if (faseAtual > 7) {
    backgroundMusic.pause();
    backgroundMusic2.pause();
    backgroundMusic2.loop = true;
    backgroundMusic2.play();
    backgroundMusic2.volume = 0.5;
    return;
  }
  backgroundMusic.pause();
  backgroundMusic.loop = true;
  backgroundMusic.play();
  backgroundMusic.volume = 0.5;
}

function start(l) {
  removeOldgame();
  selectControl();
  runGame(LEVELS, DOMDisplay, l);
  music();
  openMenu();
}

let gameRunning = false;
let animationFrameId;

function removeOldgame() {
  const oldGames = document.getElementsByClassName("game");

  for (let i = oldGames.length - 1; i >= 0; i--) {
    let oldGame = oldGames[i];
    oldGame.parentNode.removeChild(oldGame);
  }

  totalCoin = 0;
  contCoin = 0;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  gameRunning = false;
  status = "lost";
}

let OnOff = true;
function openMenu() {
  const menu = document.getElementById("menu");
  if (OnOff) {
    menu.style = "width:0;height:0;";
    OnOff = false;
  } else {
    menu.style = "width:100%;height:100%;";
    OnOff = true;
    backgroundMusic.pause();
    backgroundMusic2.pause();
    removeOldgame();
  }
  showFases();
}

function selectControl() {
  const controle = document.getElementById("controle");
  const selectedRadio = document.querySelector(
    'input[name="controle"]:checked'
  );
  if (selectedRadio.value == "touch") {
    gamepadSelect = false;
    touch = true;
    controle.style = "display: flex;";
    arrows = trackKeys(arrowCodes);
  } else if (selectedRadio.value == "analogico") {
    touch = false;
    gamepadSelect = true;
    controle.style = "display: none;";
    console.log("gamepad");
    arrows = trackKeys(arrowCodes);
  } else {
    controle.style = "display: none;";
    console.log("setas");
    gamepadSelect = false;
    touch = false;
    arrows = trackKeys(arrowCodes);
  }
}

function movimentacao(direction, isPressed) {
  switch (direction) {
    case "ArrowUp":
      buttonState.up = isPressed;
      console.log(buttonState);
      arrows = trackKeys(arrowCodes);
      document.getElementById("up").classList.toggle("pressed", isPressed);

      break;
    case "ArrowLeft":
      buttonState.left = isPressed;
      document.getElementById("left").classList.toggle("pressed", isPressed);
      break;
    case "ArrowRight":
      buttonState.right = isPressed;
      document.getElementById("right").classList.toggle("pressed", isPressed);
      break;
  }

  arrows = trackKeys(arrowCodes);
}

function showFases() {
  const ul = document.getElementById("fases");
  ul.innerHTML = "";
  for (let i = 0; i < LEVELS.length; i++) {
    const li = element("li", "");
    const a = element("a", "btn");
    if (faseAtual == i) {
      a.classList.add("Fatual");
    } else if (desb < i) {
      a.classList.add("Fbloq");
    }

    a.textContent = "Fase " + parseInt(i + 1);
    a.onclick = function () {
      start(i);
      faseAtual = i;
      localStorage.setItem("faseAtual", faseAtual); // Salva a fase atual no localStorage
    };
    li.appendChild(a);
    ul.appendChild(li);
  }
}
showFases();

function generateRandomLevel() {
  var width = 42;
  var height = 21;
  var level = [];

  for (var y = 0; y < height; y++) {
    var row = "";
    for (var x = 0; x < width; x++) {
      if (y === 0 || y === height - 1 || x === 0 || x === width - 1) {
        row += "x"; // Paredes ao redor da fase
      } else {
        row += " "; // Espaço vazio
      }
    }
    level.push(row);
  }

  // Adicionar plataformas horizontais de forma aleatória com espaço de 4 blocos na vertical
  for (var y = 4; y < height - 4; y += 4) {
    // Pular 5 linhas para garantir espaço de 4 blocos
    for (var x = 1; x < width - 1; x++) {
      if (Math.random() < 0.6) {
        level[y] = level[y].substring(0, x) + "x" + level[y].substring(x + 1);
      }
    }
  }

  // Adicionar moedas, lava e gotas de lava
  for (var y = 4; y < height - 1; y++) {
    for (var x = 4; x < width - 1; x++) {
      if (level[y][x] === " " && level[y + 1][x] === "x") {
        // Apenas em cima de plataformas
        var randomTile = Math.random();
        if (randomTile < 0.1) {
          level[y] = level[y].substring(0, x) + "o" + level[y].substring(x + 1); // Moeda
        } else if (randomTile < 0.17) {
          level[y] = level[y].substring(0, x) + "!" + level[y].substring(x + 1); // Lava
        } else if (randomTile < 0.18) {
          level[y] = level[y].substring(0, x) + "=" + level[y].substring(x + 1); // Gota de lava
        }
      }
    }
  }

  // Colocar o personagem inicial na posição (1,1)
  level[2] = level[1].substring(0, 3) + "@" + level[1].substring(2);

  return level;
}
function addNewLevel() {
  var newLevel = generateRandomLevel();
  LEVELS.push(newLevel);
  saveLevels(LEVELS);
}

function saveLevels(levels) {
  localStorage.setItem("gameLevels", JSON.stringify(levels));
}
function loadLevels() {
  const savedLevels = localStorage.getItem("gameLevels");
  if (savedLevels) {
    return JSON.parse(savedLevels);
  }
  return LEVELS; // Retorna os níveis padrão se não houver níveis salvos
}
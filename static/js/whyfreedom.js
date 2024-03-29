var DISABLED = 0;
var PROTECTCHILDREN = 1; 
var NIGHTVISION = 2;
var AUTOAIM = 3;


var READYBUTTON = PROTECTCHILDREN;
function ReadyButton(){
  switch (READYBUTTON) {
    case DISABLED:
      break;
    case PROTECTCHILDREN:
      document.getElementsByClassName('text1')[0].id = 'redToBlack';
      document.getElementsByClassName('text2')[0].id = 'redToBlack';
      document.getElementsByClassName('text3')[0].id = 'blackToRed';
      document.getElementsByClassName('button shoot')[0].id = 'blackToRed';
      document.getElementsByClassName('ready')[0].innerHTML = "Carpe Diem Patriot";
      READYBUTTON = DISABLED;
      SHOOTBUTTON = PROTECTCHILDREN;
      break;
    case NIGHTVISION:
      nightVision();
      SHOOTBUTTON = NIGHTVISION;
      READYBUTTON = DISABLED;
      break;
    case AUTOAIM:
      addTracker();
      document.getElementsByClassName('text3')[0].id = 'blackToRed';
      document.getElementsByClassName('text3')[0].style.opacity = '1';
      document.getElementsByClassName('text3')[0].innerHTML = 'Auto Aim Active';
      document.getElementsByClassName('shoot')[0].style.opacity = '1';
      document.getElementsByClassName('shoot')[0].id = 'blackToRed';
      SHOOTBUTTON = AUTOAIM;
      READYBUTTON = DISABLED;
      break;
  }
}

var SHOOTBUTTON = DISABLED; var loopCounter = 4; var intervalReference = [];
function ShootButton(){
  switch (SHOOTBUTTON){
    case DISABLED:
      break;
    case PROTECTCHILDREN:
      if (loopCounter-- > 0) {
        intervalReference.push(setInterval(shoot,200));
        document.getElementsByClassName('text3')[0].style.color = 'black';
        document.getElementsByClassName('next')[0].style.color = 'red';
        NEXTBUTTON = NIGHTVISION;
      }
      break;
    case NIGHTVISION:
      intervalReference.push(setInterval(shoot,50));
      document.getElementsByClassName('shoot')[0].style.backgroundColor = 'transparent';
      document.getElementsByClassName('shoot')[0].id = 'unvisible';
      document.getElementsByClassName('next')[0].id = 'blackToRed';
      NEXTBUTTON = AUTOAIM;
      SHOOTBUTTON = DISABLED;
      break;
    case AUTOAIM:
      death();
      SHOOTBUTTON = DISABLED;
      READYBUTTON = DISABLED;
      document.getElementsByClassName('shoot')[0].id = "unvisible";
      document.getElementsByClassName('text3')[0].id = "unvisible";
      document.getElementsByClassName('ready')[0].innerHTML = "But wait, there's more!";
      document.getElementsByClassName('ready')[0].id = 'blackToRed';
      document.getElementsByClassName('ready')[0].onclick = "";
      document.getElementsByClassName('ready')[0].href = "thesafest.html";
      document.getElementsByClassName('next')[0].id = 'blackToRed';
      document.getElementsByClassName('next')[0].onclick = '';
      document.getElementsByClassName('next')[0].href = 'thesafest.html';
      break;
  }
}

var NEXTBUTTON = DISABLED;
function NextButton(){
  switch (NEXTBUTTON) {
    case DISABLED:
      break;
    case PROTECTCHILDREN:
      NEXTBUTTON = DISABLED;
      break;
    case NIGHTVISION:
      SHOOTBUTTON = DISABLED;
      undoBullets();
      lightsOut();
      document.getElementsByClassName('ready')[0].innerHTML = 'Activate Night Vision';
      document.getElementsByClassName('next')[0].id = 'redToBlack';
      document.getElementsByClassName('shoot')[0].id = 'transparent';
      clearBottom();
      callCriminals();
      NEXTBUTTON = DISABLED;
      READYBUTTON = NIGHTVISION;
      break;
    case AUTOAIM:
      undoBullets();
      clearBottom();
      lightsOn();
      makeMosquito();
      document.getElementsByClassName('ready')[0].innerHTML = 'Activate AutoAim';
      document.getElementsByClassName('next')[0].id = 'redToBlack';
      READYBUTTON = AUTOAIM;
      NEXTBUTTON = DISABLED;
      break;
  }
}

//PROTECTCHILDREN
var bulletCounter = 0;
function shoot(){
  var f = document.getElementById('flash');
  if (f.style.opacity == 0){
    f.style.opacity = 1;
  } else {
    f.style.opacity = 0;
  }
  bulletCounter++;
  if (bulletCounter % 2 == 1 && bulletCounter < 300)
    addBullet();
}
function addBullet(){
  var container = document.getElementsByClassName('bottom')[0];
  var newBullet = document.createElement("img");
  newBullet.src='static/img/bullet.png';
  newBullet.id='bullet';
  container.appendChild(newBullet);
  newBullet.style.left = parseInt((container.offsetWidth - 50)*Math.random()) + 'px';
  newBullet.style.bottom = parseInt((container.offsetHeight)*Math.random() + 50) + 'px';
}
//NIGHTVISION
function undoBullets(){
  for (var i = 0; i < intervalReference.length; i++) {
    clearInterval(intervalReference[i]); }
  document.getElementById('flash').style.opacity = '0';
}
function lightsOut(){
  document.body.style.backgroundColor = 'black';
  var text1 = document.getElementsByClassName('text1')[0];
  text1.id = '';
  text1.style.color = 'white';
  text1.innerHTML = 'Freedom Drones will help you sleep at night'
  var text2 = document.getElementsByClassName('text2')[0];
  text2.id = '';
  text2.style.color = "white";
  text2.innerHTML = "<strong>Can't see the bad guys?</strong>";
  var text3 = document.getElementsByClassName('text3')[0];
  text3.style.opacity = '0';
  var btn = document.getElementsByClassName('button shoot')[0];
  btn.style.opacity = '0';
}
function clearBottom(){
  var container = document.getElementsByClassName('bottom')[0];
  container.id = 'paused';
  container.style.backgroundColor = 'transparent';
  container.innerHTML = '';
}
function callCriminals(){
  container = document.getElementsByClassName('bottom')[0];
  var baddie = document.createElement('img'); 
  var baddie2 = document.createElement('img');
  baddie.src = 'static/img/hostage.gif'; 
  baddie2.src = 'static/img/hostage.gif';
  baddie.className = "baddie";
  baddie2.className = "baddie u-pull-right";
  baddie.style.opacity = '.1';
  baddie2.style.opacity = '.1';
  container.appendChild(baddie); 
  container.appendChild(baddie2);
}

function nightVision(){
  var text3 = document.getElementsByClassName('text3')[0];
  text3.style.color = 'red';
  text3.id = 'visible';
  var container = document.getElementsByClassName('bottom')[0];
  container.id = 'blackToLime';
  document.getElementsByClassName('shoot')[0].id = 'blackToLime';
  for (var i=0; i<2; i++)
    document.getElementsByClassName('baddie')[i].id='visible';
}
//AUTOAIM
function lightsOn(){
  document.body.style.backgroundColor = 'white';
  var text1 = document.getElementsByClassName('text1')[0];
  text1.id = 'one';
  text1.style.color = 'black';
  text1.innerHTML = '<strong>Freedom Drones do Eco-Friendly pest control</strong>'
  var text2 = document.getElementsByClassName('text2')[0];
  text2.id = 'two';
  text2.style.color = "black";
  text2.innerHTML = "Why use <em>chemicals</em> or <em>cancer-causing plastic flyswatters</em>? Use FREEDOM!";
  var text3 = document.getElementsByClassName('text3')[0];
  text3.id = '';
  text3.style.opacity = '0';
  var btn = document.getElementsByClassName('button shoot')[0];
  btn.style.opacity = '0';
  var bottom = document.getElementsByClassName('bottom')[0];
  bottom.id='';
  bottom.style.backGroundColor='transparent';
}
var m;
function makeMosquito(){
  m = document.createElement('img');
  m.src='static/img/zika.png';
  m.id = 'm';
  m.style.position = 'fixed';
  console.log(window.innerWidth/2);
  m.style.left = parseInt(window.innerWidth/2)+'px';
  m.style.top = parseInt(window.innerHeight/2)+'px';
  m.style.width='10%';
  m.style.height='10%';
  document.body.appendChild(m);
  randomFlight();
}
var flyX=0;
var flyY=0;
function randomFlight(){
  flyX = parseInt(Math.random()*window.innerWidth);
  flyY = parseInt(Math.random()*window.innerHeight);
  recursiveFlight();
}
var rotator = 0; var breakpoint = false;
function recursiveFlight(){
  if (breakpoint)
    return;
  if (Math.abs(flyX-m.x)<=2) {
    flyX = parseInt(Math.random()*window.innerWidth);
  } else if (m.x > flyX) {
    m.style.left = (m.x-1)+'px';
  } else {
    m.style.left = (m.x-(-1))+'px';
  }
  if (Math.abs(flyY-m.y)<=2) {
    flyY = parseInt(Math.random()*window.innerHeight);
    console.log(flyY);
  } else if (m.y > flyY) {
    m.style.top = (m.y-1)+'px';
  } else {
    m.style.top = (m.y-(-1))+'px'; 
    //This code is breaking for some reason, 
    //when the screen width is below an amount. Don't know why.
    //what a bummer. this can't work on mobile.
  }
  setTimeout(recursiveFlight, 5);
}
var tracker; var c; var ctx;
function addTracker(){
  c = document.createElement('canvas');
  c.style.position = 'fixed';
  c.style.zIndex='-1';
  document.getElementsByClassName('shoot')[0].style.zIndex='2';//this is so you can still click the shoot button over canvas
  c.id = 'myCanvas';
  c.width=window.innerWidth;
  c.height=window.innerHeight;
  c.style.top = '0px';
  c.style.left='0px';
  tracker = setInterval(drawTracker,25);
  
  ctx = c.getContext("2d");
  document.getElementById('top').appendChild(c);
  
}
function drawTracker(){
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.moveTo(document.getElementById('flash').x+25, document.getElementById('flash').y+25);
  ctx.lineTo(document.getElementById('m').x+25, document.getElementById('m').y+25);
  ctx.strokeStyle = 'red';
  ctx.stroke();
}

function death(){
  breakpoint = true;
  document.getElementById('flash').style.opacity ='1';
  setTimeout(removeCanvas, 6);
  setTimeout(recursiveFall, 7);
  setTimeout(clearFlash, 15);
}
function clearFlash(){
  document.getElementById('flash').style.opacity ='0';
}
function recursiveFall(){
  m.style.top = parseInt(parseInt(m.y)+parseInt(1))+'px';
  setTimeout(recursiveFall, 5);
}
function removeCanvas(){
  document.getElementById('top').removeChild(c);
}
//NOCONSCIENCE
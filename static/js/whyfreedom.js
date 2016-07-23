var DISABLED = 0;
var PROTECTCHILDREN = 1; 
var NIGHTVISION = 2;
var AUTOAIM = 3;
var NOCONSCIENCE = 4;


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
      document.getElementsByClassName('bottom')[0].id = 'blackToLime';
      document.getElementsByClassName('shoot')[0].id = 'blackToLime';
      SHOOTBUTTON = NIGHTVISION;
      READYBUTTON = DISABLED;
      break;
    case AUTOAIM:
      READYBUTTON = DISABLED;
      break;
    case NOCONSCIENCE:
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
      intervalReference.push(setInterval(shoot,150));
      document.getElementsByClassName('shoot')[0].style.backgroundColor = 'darkgray';
      NEXTBUTTON = AUTOAIM;
      SHOOTBUTTON = DISABLED;
      break;
    case AUTOAIM:
      SHOOTBUTTON = DISABLED;
      break;
    case NOCONSCIENCE:
      SHOOTBUTTON = DISABLED;
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
      clearBottom();
      callCriminals();
      NEXTBUTTON = DISABLED;
      READYBUTTON = NIGHTVISION;
      break;
    case AUTOAIM:
      undoBullets();
      READYBUTTON = AUTOAIM;
      NEXTBUTTON = DISABLED;
      break;
    case NOCONSCIENCE:
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
  //text3.id = '';
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
var baddie;
var baddie2;
function callCriminals(){
  container = document.getElementsByClassName('bottom')[0];
    baddie = document.createElement('img'); 
    baddie2 = document.createElement('img');
    baddie.src = 'static/img/hostage.gif'; 
    baddie2.src = 'static/img/hostage.gif';
    baddie.style.opacity = '0';
    container.appendChild(baddie); 
    container.appendChild(baddie2);
}

function nightVision(){
  var container = document.getElementsByClassName('container')[0];
  var text3 = document.getElementsByClassName('text3')[0];
  container.id = 'blackToLime';
  text3.style.opacity = '1';
  text3.id = 'blackToLime';
  document.getElementsByClassName('shoot')[0].id = 'blackToLime';
  baddie.id = 'visible';
  baddie2.id = 'visible';
}
//AUTOAIM
function lightsOn(){
  document.body.style.backgroundColor = 'white';
  var text1 = document.getElementsByClassName('text1')[0];
  text1.id = 'one';
  text1.style.color = 'black';
  text1.innerHTML = 'Freedom Drones help the environment'
  var text2 = document.getElementsByClassName('text2')[0];
  text2.id = 'two';
  text2.style.color = "black";
  text2.innerHTML = "<strong>Save plastic and money on fly swatters</strong>";
  var text3 = document.getElementsByClassName('text3')[0];
  text3.id = '';
  text3.style.opacity = '0';
  var btn = document.getElementsByClassName('button shoot')[0];
  btn.style.opacity = '0';
  var bottom = document.getElementByClassName('botton')[0];
  bottom.id='';
  bottom.style.backGroundColor='transparent';
}
function makeMosquito(){
  var container = document.getElementByClassName('botton')[0];
  var m = document.createElement('img');
  m.src='static/img/zika.png';
  m.id = 'm';
  m.style.width='10%';
  m.style.height='10%';
  container.appendChild(m);
  randomFlight();
}
var flyX=0;
var flyY=0;
function randomFlight(){
  var container = document.getElementsByClassName('container')[0];
  flyX = parseInt(Math.random()*container.offsetWidth);
  flyY = parseInt(Math.random()*container.offsetHeight);
  recursiveFlight();
}
function recursiveFlight(){
  x = document.getElementById('m').x;
  y = document.getElementById('m').y;
  if (flyX == x) {
    flyX = parseInt(Math.random()*document.getElementsByClassName('container')[0].offsetWidth)
  } else if (flyX < x) {
    x++;
  } else {
    x--;
  }
  if (flyY == y) {
    flyY = parseInt(Math.random()*document.getElementsByClassName('container')[0].offsetHeight)
  } else if (flyY < y) {
    y++;
  } else {
    y--;
  }
  setTimeout(recursiveFlight, 100);
}
function death(){
  
}
//NOCONSCIENCE
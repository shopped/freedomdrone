var readyButton = true;
var readyCounter = 0;
function updateReadyButton(){
  if (readyButton == false)
    return;
  if (readyCounter == 0) {
    document.getElementById('onclickone2').id = 'redToBlack';
    document.getElementById('red').id = 'redToBlack';
    document.getElementById('onclickone').id = 'blackToRed';
    document.getElementById('onclickone').id = 'blackToRed';
    document.getElementById('readybtn').onclick='';
    readyButton = false;
    updateButton = true;
  } else if (readyCounter == 1) {
    alert('lol');
    nightVision();
    readyButton = false;
  }
}

var counter = 0;
var intervalStore = [];
function loopShoot(){
  if (counter++ == 0){
    document.getElementById('blackToRed').id = '';
  } else if (counter > 4) {
    document.getElementById('nextbtn').style.color = 'red';
    return;
  }
  intervalStore.push(setInterval(shoot,200));
}

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
  var container = document.getElementById('bottom');
  var newBullet = document.createElement("img");
  newBullet.src='static/img/bullet.png';
  newBullet.id='bullet';
  container.appendChild(newBullet);
  newBullet.style.left = parseInt((container.offsetWidth - 50)*Math.random()) + 'px';
  newBullet.style.bottom = parseInt((container.offsetHeight)*Math.random() + 50) + 'px';
}

function clearBottom(){
  var container = document.getElementById('bottom');
  container.style.backgroundColor = 'transparent';
  container.innerHTML = '';
}

function lightsOut(){
  var container = document.getElementsByClassName('container')[0];
  document.body.style.backgroundColor = 'black';
  container.style.backgroundColor = 'black';
  var bottom = document.getElementById('botton');
  bottom.style.backgroundColor = 'black';
  
  var text1 = document.getElementsByClassName('text1')[0];
  text1.id = '';
  text1.style.color = 'white';
  text1.innerHTML = 'Freedom Drones will help you sleep at night'
  var text2 = document.getElementsByClassName('text2')[0];
  text2.id = '';
  text2.style.color = "white";
  text2.innerHTML = "<strong>Can't see the bad guys?</strong>";
  var text3 = document.getElementsByClassName('text3')[0];
  text3.id = '';
  text3.style.opacity = '0';
  var btn = document.getElementsByClassName('button shoot')[0];
  btn.style.opacity = '0';
}

function callCriminals(){
  container = document.getElementById('bottom');
  for (var i = 0; i < 2; i++){
    var badguy = document.createElement('img');
    badguy.src = 'static/img/hostage.gif'
    badguy.style.opacity = '0';
    container.appendChild(badguy);
  }
}

function undoFirst(){
  for (var i = 0; i < intervalStore.length; i++) {
    clearInterval(intervalStore[i]); }
  document.getElementById('flash').style.opacity = '0';
}

var updateButton = false;
var nextCounter = 0;
function updateNextButton(){
  if (updateButton == false)
    return;
  if (nextCounter == 0) {
    undoFirst();
    lightsOut();
    document.getElementById('readybtn').innerHTML = 'Activate Night Vision';
    clearBottom();
    callCriminals();
    readyButton = true;
    readyCounter = 1;
    nextCounter++;
  } else if (nextCounter == 1) {
    
  } else {
    
  }
}

function nightVision(){
  var container = document.getElementsByClassName('container')[0];
  document.body.style.backgroundColor = 'green';
  container.style.backgroundColor = 'green';
}
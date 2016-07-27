setTimeout(main, 2500);


function main(){
  makeDrone(true);
  for (var i=0; i<8; i++)
    setTimeout(makeDrone, i*i*(INTERVAL/8));
  flyDrone();
}
var droneArray=[];
var timerArray=[];
var INTERVAL = 3141;

function makeDrone(invisible=false){
  var d = document.createElement('img');
  d.style.position='fixed';
  d.src='static/img/drone.jpg';
  document.getElementById('drow').appendChild(d);
  if (invisible) {
    d.style.opacity=0;
    return;
  }
  droneArray.push(d);
  timerArray.push(-INTERVAL);
  d.style.left=5000+'px';
  d.style.top=5000+'px';
  d.style.zIndex='-1';
}

function flyDrone(){
  for (var i=0; i<droneArray.length; i++){
    timer = timerArray[i];
    drone = droneArray[i];
    if (timer < INTERVAL) {
      drone.style.left = window.innerWidth*Math.sin(timer/300)+'px';
      timer += INTERVAL/2;
      drone.style.top = (window.innerHeight-drone.height)*Math.cos(timer/1000)+'px';
    } else {
      timerArray[i] = -INTERVAL;
    }
    timerArray[i]++;
  }
  setTimeout(flyDrone, 0);
}
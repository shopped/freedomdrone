function next(){
  document.getElementById('onclickone2').id = 'redToBlack';
  document.getElementById('red').id = 'redToBlack';
  document.getElementById('onclickone').id = 'blackToRed';
  document.getElementById('onclickone').id = 'blackToRed';
  document.getElementById('disable').onclick='';
}

var counter = 0;
function loopShoot(){
  if (counter++ == 0){
    document.getElementById('blackToRed').id = '';
  } else if (counter > 4) {
    //document.getElementById('blackToRed').setAttribute('href', '#bottom');
    document.getElementById('nextbtn').id = 'blackToRed';
    return;
  }
  setInterval(shoot,200);
}

function shoot(){
  var f = document.getElementById('flash');
  if (f.style.opacity == 0){
    f.style.opacity = 1;
  } else {
    f.style.opacity = 0;
  }
  
  
}
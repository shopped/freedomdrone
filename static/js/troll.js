var counter = 2;
var offset = 0;
function troll(){
  if (offset==0)
    document.getElementById('break').innerHTML='<br>';
  counter++;
  offset += 10;
  document.getElementById('troll').style.marginTop = offset + 'px';
  if (counter % 3 == 0)
    document.getElementById('troll').innerHTML = 'How about now?';
  if (counter % 7 == 0)
    document.getElementById('troll').innerHTML = 'Are you sure?';
  if (counter % 11 == 0) {
    document.getElementById('troll').innerHTML = "I'll win this fight.";
    document.getElementById('troll').style.marginLeft = parseInt(offset * 2) + 'px';
  }
  if (counter % 43 == 0)
    document.getElementById('troll').innerHTML = 'JUST GIVE UP ALREADY!!!';
}
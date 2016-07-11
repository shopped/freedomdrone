var counter = 2;
function troll(){
  counter++;
  if (counter % 3 == 0)
    document.getElementById('troll').innerHTML = 'How about now?';
  if (counter % 7 == 0)
    document.getElementById('troll').innerHTML = 'Are you sure?';
  if (counter % 11 == 0)
    document.getElementById('troll').innerHTML = '<-------';
  if (counter % 43 == 0)
    document.getElementById('troll').innerHTML = 'JUST GIVE UP ALREADY!!!';
}
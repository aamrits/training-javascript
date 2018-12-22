let kgsInput = document.getElementById('kgInput').addEventListener('input', convertWeight);

document.getElementById('output').style.display = 'none';

function convertWeight(e) {
  let kgs = e.target.value;
  document.getElementById('output').style.display = '';

  if(kgs === '') {
    document.getElementById('output').style.display = 'none';
  }
  
  document.getElementById('poundOutput').innerHTML = kgs * 2.20462;
  document.getElementById('ouncesOutput').innerHTML = kgs * 35.274;
}
let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', searchNames);

function searchNames() {
  let inputNames = document.getElementById('filterInput').value.toUpperCase();
  
  let ul = document.getElementById('names');
  let li = ul.querySelectorAll('li.list-group-item');

  li.forEach((element) => {
    let a = element.getElementsByTagName('a')[0];
    
    if(a.innerHTML.toUpperCase().indexOf(inputNames) > -1) {
      element.style.display =  '';
    } else {
      element.style.display =  'none';
    }
  });
}
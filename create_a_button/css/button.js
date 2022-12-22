const button = document.getElementById('btn');
var i=0;
button.addEventListener('click', (btn) => {
    i=i+1;
      const count = i;

      btn.currentTarget.innerText = count;
 });

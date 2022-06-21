const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(0));
//console.log(btns[0].classList.add('red', 'green'));
//console.log(btns[0].classList.remove('some'));
//console.log(btns[0].classList.toggle('red'));

btns[0].addEventListener('click', () => { // after pressing the button[0] -> the button[1] changes color to red 

  //btns[1].classList.toggle('red'); 

  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
});

wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('blue')) { // for blue button
    //if (event.target && event.target.tagName == 'BUTTON') { // for all buttons
    //if (event.target && event.target.matches('button.red')) { // for red buttonss
    console.log("click");
  }
});

/* btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("click");
  })
}); if use this code - after clicking last(new) btn event will not wokr*/

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

const red=document.getElementById('red')
const yellow=document.getElementById('yellow')
const pink=document.getElementById('pink')
const blue=document.getElementById('blue')

const body=document.body;

red.addEventListener('click',()=>{
 body.style.backgroundColor='red';

})
yellow.addEventListener('click',()=>{
 body.style.backgroundColor='yellow';

})
pink.addEventListener('click',()=>{
 body.style.backgroundColor='pink';

})
blue.addEventListener('click',()=>{
 body.style.backgroundColor='blue';

})
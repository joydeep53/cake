let menu = document.querySelector('.menu')
let cross = document.querySelector('.cross')
let links = document.querySelector('.links')
menu.addEventListener('click', openMenu)
 function openMenu(){
    links.style.transform= 'translateY(0%)';
    
 }
 cross.addEventListener('click',closeMenu)
 function closeMenu(){
    links.style.transform= 'translateY(-110%)';

 }
let menu = document.querySelector('.menu')
let cross = document.querySelector('.cross')
let links = document.querySelector('.links')
menu.addEventListener('click', openMenu)
 function openMenu(){
    links.style.transform= 'translateX(0%)';
    document.querySelector('body').style.overflow='hidden';
    
 }
 cross.addEventListener('click',closeMenu)
 function closeMenu(){
    links.style.transform= 'translateX(-100%)';
    document.querySelector('body').style.overflow='scroll';

 }
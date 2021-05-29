'use strict';
const btnsshowModal=document.querySelectorAll('.show-modal');
const modal=document.querySelector('.modal')
const btncloseModal=document.querySelector('.close-modal')
const overlay=document.querySelector('.overlay')
const openModal=function(e){
   
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}
const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}
btnsshowModal.forEach(btn => btn.addEventListener('click',openModal));
btncloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)

document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})
'use strict';
// declare some variables
const hidden= document.querySelector('.hidden');
const overlay= document.querySelector('.overlay');
const modal= document.querySelector('.modal');
const btnCloseModal=document.querySelector('.close-modal');
const btnOpenModal= document.querySelectorAll('.show-modal');
// console.log(btnOpenModal[1].textContent);
///////////for dry concept//////////
const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
    btnCloseModal.addEventListener('click',closeModal);
    // btnCloseModal.addEventListener('click',function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // });
    overlay.addEventListener('click',closeModal);
    // overlay.addEventListener('click',function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // });

}
//how manage keypress///////////
document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
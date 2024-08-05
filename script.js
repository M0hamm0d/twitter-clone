const wrapper = document.querySelector('.wrapper');
let signInBtn = document.querySelector('.sign-in');
let signUpSection = document.querySelector('.sign-up-section')
let signInModal = document.querySelector('.sign-in-modal');
let cancelBtn = document.querySelector('.abs')

signInBtn.addEventListener('click', ()=>{
    signInModal.style.display = 'flex';
    signUpSection.style.overflow = 'hidden';
    signUpSection.style.height = '100vh'
});
cancelBtn.addEventListener('click', ()=>{
    signInModal.style.display = '';
    signUpSection.style.overflow = '';
    signUpSection.style.height = ''
})
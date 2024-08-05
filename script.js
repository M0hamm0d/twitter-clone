const wrapper = document.querySelector('.wrapper');
let signInBtn = document.querySelector('.sign-in');
let signUpSection = document.querySelector('.sign-up-section')
let signInModal = document.querySelector('.sign-in-modal');
let cancelBtn = document.querySelector('.abs');
let emailBtn = document.querySelector('.email-btn');
let passwordBtn = document.querySelector('.password-btn');
let siModalBody = document.querySelector('.si-modal-body');
const siLogIn = document.querySelector('.si-log-in')
let label1 = document.querySelector('.email-btn > label');
let label2 = document.querySelector('.password-btn > label');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const incorrectPassword = document.querySelector('.password-err');
const incorrectEmail = document.querySelector('.email-err');
let clickToSee = document.querySelector('.eye-see');
let clickToHide = document.querySelector('.eye-hide');


let account1 = {
    fullName: 'Muhammad Abdussalam',
    password: 1034,
    phoneNumber: '+2348136208750',
    email: 'masalami042@gmail.com'
}
let bankAccountUser = [account1]

function createUserName(bankAccount){
    bankAccountUser
    .forEach(acc => {
        acc.username = acc.fullName
        .toLowerCase()
        .split(' ')
        .map(name=> name[0])
        .join('')
    })
};
createUserName(bankAccountUser);

function change(){
    signInModal.addEventListener('click', ()=>{
        emailBtn.style.border = '';
        label1.style.color = '';
        passwordBtn.style.border = ''
        label2.style.color = ''
    });
};
function changeBack1(){
    signInModal.addEventListener('click', ()=>{
        emailBtn.style.border = '1px solid #1A8CD8'
        label1.style.color = '#1A8CD8'
    });
}
function changeBack2(){
    signInModal.addEventListener('click', ()=>{
        passwordBtn.style.border = '1px solid #1A8CD8'
        label2.style.color = '#1A8CD8'
    });
}
signInBtn.addEventListener('click', ()=>{
    signInModal.style.display = 'flex';
    signUpSection.style.overflow = 'hidden';
    signUpSection.style.height = '100vh'
});
cancelBtn.addEventListener('click', ()=>{
    signInModal.style.display = '';
    signUpSection.style.overflow = '';
    signUpSection.style.height = ''
});
let searchByEmail;
let searchByUserName;
let searchByPhone;
siLogIn.addEventListener('click', ()=>{
    searchByUserName = bankAccountUser.find(acc => acc.username===emailInput.value);
    searchByPhone = bankAccountUser.find(acc => acc.phoneNumber===emailInput.value);
    searchByEmail = bankAccountUser.find(acc => acc.email===emailInput.value);
    if(searchByPhone?.password=== Number(passwordInput.value)){
        wrapper.style.display = 'flex';
        signInModal.style.display = 'none'
        signUpSection.style.display = 'none'
        incorrectPassword.textContent = '';
        incorrectEmail.textContent = '';
    } else if(searchByUserName?.password == Number(passwordInput.value)){
        wrapper.style.display = 'flex';
        signInModal.style.display = 'none'
        signUpSection.style.display = 'none'
        incorrectPassword.textContent = '';
        incorrectEmail.textContent = '';
    }  else if(searchByEmail?.password == Number(passwordInput.value)){
        wrapper.style.display = 'flex';
        signInModal.style.display = 'none';
        signUpSection.style.display = 'none';
        incorrectPassword.textContent = ''
        incorrectEmail.textContent = ''
    } else if(searchByEmail?.email == emailInput.value && searchByEmail?.password != Number(passwordInput.value)){
        incorrectPassword.textContent = 'Incorrect password'
    } else if(searchByUserName?.username == emailInput.value && searchByUserName?.password != Number(passwordInput.value)){
        incorrectPassword.textContent = 'Incorrect password'
    } else if(searchByPhone?.phoneNumber == emailInput.value && searchByPhone?.password != Number(passwordInput.value)){
        incorrectPassword.textContent = 'Incorrect password'
    } else if(searchByUserName?.email != emailInput.value){
        incorrectEmail.textContent = 'Incorrect detail'
    } else if(searchByUserName?.username === emailInput.value){
        incorrectEmail.textContent = ''
    }
})

function see(){
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        clickToSee.style.display = 'none';
        clickToHide.style.display = 'flex'
    } else if(passwordInput.type === 'text'){
        passwordInput.type = 'password';
        clickToSee.style.display = 'flex';
        clickToHide.style.display = 'none'
    }
}
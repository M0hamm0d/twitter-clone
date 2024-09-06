const wrapper = document.querySelector(".wrapper");
let signInBtn = document.querySelector(".sign-in");
let signUpSection = document.querySelector(".sign-up-section");
let signInModal = document.querySelector(".sign-in-modal");
let cancelBtn = document.querySelector(".abs");
let closeBtn = document.querySelector(".absolute");
let emailBtn = document.querySelector(".email-btn");
let passwordBtn = document.querySelector(".password-btn");
let siModalBody = document.querySelector(".si-modal-body");
const siLogIn = document.querySelector(".si-log-in");
let label1 = document.querySelector(".email-btn > label");
let label2 = document.querySelector(".password-btn > label");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const incorrectPassword = document.querySelector(".password-err");
const incorrectEmail = document.querySelector(".email-err");
let clickToSee = document.querySelector(".eye-see");
let clickToHide = document.querySelector(".eye-hide");
const createAccModal = document.querySelector(".create-acc-modal");
const createAccBtn = document.querySelector(".create-acc");
const nameInput = document.querySelector(".name-input");
const suEmailInput = document.querySelector(".email-Input");
const phoneInput = document.querySelector(".phone-input");
const suPasswordInput = document.querySelector(".su-password-input");
const suSignUp = document.querySelector(".su-sign-up");
const passErr = document.querySelector(".pass-err");
const phoneErr = document.querySelector(".phone-error");
let emailErr = document.querySelector(".email-error");
let nameErr = document.querySelector(".name-error");
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

suSignUp.addEventListener("click", function () {
  if (suPasswordInput.value == "") {
    passErr.textContent = "password is required";
  }
  if (phoneInput.value == "") {
    phoneErr.textContent = "phone input is required";
  }
  if (suEmailInput.value == "") {
    emailErr.textContent = "email is required";
  }
  if (nameInput.value == "") {
    nameErr.textContent = "name is required";
  }
  if (emailInput !== "" && regex.test(suEmailInput.value) == false) {
    emailErr.textContent = "kindly enter a valid email";
  }
  if (suPasswordInput.value !== "" && suPasswordInput.value.length < 4) {
    passErr.textContent = "kindly enter a minimum of four character";
  }
  // {}
  if (
    suPasswordInput.value !== "" &&
    suEmailInput.value !== "" &&
    nameInput.value !== "" &&
    phoneInput.value !== "" &&
    regex.test(suEmailInput.value) &&
    suPasswordInput.value.length >= 4
  ) {
    user1.push({
      fullName: nameInput.value,
      password: Number(suPasswordInput.value),
      phoneNumber: phoneInput.value,
      email: suEmailInput.value,
    });
    createAccModal.style.display = "";
  }
});
let account1 = {
  fullName: "Muhammad Abdussalam",
  password: 1034,
  phoneNumber: "+2348136208750",
  email: "masalami042@gmail.com",
};
let user1 = [account1];

function createUserName(accountName) {
  accountName.forEach((acc) => {
    acc.username = acc.fullName
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
}
createUserName(user1);

function change() {
  signInModal.addEventListener("click", () => {
    emailBtn.style.border = "";
    label1.style.color = "";
    passwordBtn.style.border = "";
    label2.style.color = "";
  });
}
function changeBack1() {
  signInModal.addEventListener("click", () => {
    emailBtn.style.border = "1px solid #1A8CD8";
    label1.style.color = "#1A8CD8";
  });
}
function changeBack2() {
  signInModal.addEventListener("click", () => {
    passwordBtn.style.border = "1px solid #1A8CD8";
    label2.style.color = "#1A8CD8";
  });
}
signInBtn.addEventListener("click", () => {
  signInModal.style.display = "flex";
  signUpSection.style.overflow = "hidden";
  signUpSection.style.height = "100vh";
});

createAccBtn.addEventListener("click", () => {
  createAccModal.style.display = "flex";
  signUpSection.style.overflow = "hidden";
  signUpSection.style.height = "100vh";
});

cancelBtn.addEventListener("click", () => {
  closeButtons();
});
closeBtn.addEventListener("click", () => {
  closeButtons();
});
let searchByEmail;
let searchByUserName;
let searchByPhone;

function closeButtons() {
  createAccModal.style.display = "";
  signUpSection.style.overflow = "";
  signUpSection.style.height = "";
  nameErr.textContent = "";
  emailErr.textContent = "";
  passErr.textContent = "";
  phoneErr.textContent = "";
  incorrectEmail.textContent = "";
  //closebutton
  signInModal.style.display = "";
  createAccModal.style.display = "";
  signUpSection.style.overflow = "";
  signUpSection.style.height = "";
}

function correctDetails() {
  wrapper.style.display = "flex";
  signInModal.style.display = "none";
  signUpSection.style.display = "none";
}

siLogIn.addEventListener("click", () => {
  createUserName(user1);

  searchByUserName = user1.find((acc) => acc.username == emailInput.value);
  searchByPhone = user1.find((acc) => acc.phoneNumber == emailInput.value);
  searchByEmail = user1.find((acc) => acc.email == emailInput.value);
  if (searchByPhone?.password === Number(passwordInput.value)) {
    correctDetails();
  } else if (searchByUserName?.password == Number(passwordInput.value)) {
    correctDetails();
  } else if (searchByEmail?.password == Number(passwordInput.value)) {
    correctDetails();
  } else if (
    searchByEmail?.email == emailInput.value &&
    searchByEmail?.password != Number(passwordInput.value)
  ) {
    incorrectPassword.textContent = "Incorrect password";
  } else if (
    searchByUserName?.username == emailInput.value &&
    searchByUserName?.password != Number(passwordInput.value)
  ) {
    incorrectPassword.textContent = "Incorrect password";
  } else if (
    searchByPhone?.phoneNumber == emailInput.value &&
    searchByPhone?.password != Number(passwordInput.value)
  ) {
    incorrectPassword.textContent = "Incorrect password";
  } else if (searchByUserName?.email != emailInput.value) {
    incorrectEmail.textContent = "Incorrect detail";
  } else if (searchByUserName?.username === emailInput.value) {
    incorrectEmail.textContent = "";
  }
});

function see() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    clickToSee.style.display = "none";
    clickToHide.style.display = "flex";
  } else if (passwordInput.type === "text") {
    passwordInput.type = "password";
    clickToSee.style.display = "flex";
    clickToHide.style.display = "none";
  }
}

// const user1JSON = JSON.stringify(user1);
// localStorage.setItem("data-string", user1JSON);
// const userString = localStorage.getItem("data-string");
// const dataStringParsed = JSON.parse(userString);
// console.log(dataStringParsed);

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const forgotPasswordLink = document.getElementById('forgotPassword');
const backToLoginLink = document.getElementById('backToLogin');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    container.classList.remove("show-reset");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    container.classList.remove("show-reset");
});

forgotPasswordLink.addEventListener('click', () => {
    container.classList.add("show-reset");
});

backToLoginLink.addEventListener('click', () => {
    container.classList.remove("show-reset");
});

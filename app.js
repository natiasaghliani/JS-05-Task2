const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementsByClassName('close')[0];
const modalBg = document.getElementById('modalBg');

loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

modalBg.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

const loginForm = document.getElementById('loginForm');
const loginTo = document.getElementById('loginTo');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.value.trim() !== '' && password.value.trim() !== '') {
        loginModal.style.display = 'none';
    }

    username.value = '';
    password.value = '';
    username.focus();
    password.focus();
})







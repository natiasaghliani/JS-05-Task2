const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementsByClassName('close')[0];
const modalBg = document.getElementById('modalBg');

loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
    resetForm();
});

modalBg.addEventListener('click', function() {
    loginModal.style.display = 'none';
    resetForm();
});

const loginForm = document.getElementById('loginForm');
const loginTo = document.getElementById('loginTo');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginTo.addEventListener('click', function(event) {
    event.preventDefault();
     
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username !== '' && password !== '') {
        loginModal.style.display = 'none';
        resetForm();
    } else {
        alert('Please fill in all fields');
    }
})

function resetForm() {
    usernameInput.value = '';
    passwordInput.value = '';
  }






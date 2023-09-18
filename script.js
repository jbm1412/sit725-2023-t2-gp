document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if (username.value == 'johncena' && password.value == 'ucantseeme') {
        window.location.href = 'profile.html';
    } else {
        window.location.href = 'loginfailed.html';
    }
});



 







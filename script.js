document.getElementById('login-Submit').
    addEventListener('click', function () {
        const emailfiled = document.getElementById('user-email');
        const userEmail = emailfiled.value;
        const passfiled = document.getElementById('user-password');
        const userpass = passfiled.value;
        if (userEmail == 'ebrahim34@gmail.com' && userpass == '#ebrahim') {
            window.location.href = 'bankSite.html'
        }
        else {
            alert('invalid Email OR Password')
        }
    })

document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = encodeURIComponent(document.getElementById('username').value);
            const password = encodeURIComponent(document.getElementById('password').value);

            const redirectUrl = `http://localhost/apix/api.php?mode=signup&username=${username}&password=${password}&nextpage=examples/full-example/login.html`;
            window.location.href = redirectUrl;
        });
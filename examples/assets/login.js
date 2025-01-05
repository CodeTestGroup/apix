document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = encodeURIComponent(document.getElementById('username').value);
            const password = encodeURIComponent(document.getElementById('password').value);

            const redirectUrl = `http://localhost/apix/api.php?mode=login&username=${username}&password=${password}&nextpage=examples/full-example/home.html`;
            window.location.href = redirectUrl;
        });
document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = encodeURIComponent(document.getElementById('username').value);
            const password = encodeURIComponent(document.getElementById('password').value);

            const redirectUrl = `http://192.168.1.25/apix/api.php?mode=signup&username=${username}&password=${password}&nextpage=examples/full-example/login.html`;
            window.location.href = redirectUrl;
        });

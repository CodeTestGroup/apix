// Get the URLSearchParams object from the current URL
const urlParams = new URLSearchParams(window.location.search);
// Log or use the variable

document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = encodeURIComponent(document.getElementById('username').value);
            const password = encodeURIComponent(document.getElementById('password').value);
            const $url = urlParams.get('url');

            const redirectUrl = `http://192.168.1.25/apix/api.php?mode=login&username=${username}&password=${password}&nextpage=${url}`;
            window.location.href = redirectUrl;
        });
        

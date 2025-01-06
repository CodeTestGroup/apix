// Get the URLSearchParams object from the current URL
const urlParams = new URLSearchParams(window.location.search);

// Extract the value of the 'url' parameter
const $url = urlParams.get('url');

// Log or use the variable
console.log($url);

document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = encodeURIComponent(document.getElementById('username').value);
            const password = encodeURIComponent(document.getElementById('password').value);

            const redirectUrl = `http://localhost/apix/api.php?mode=login&username=${username}&password=${password}&nextpage=${url}`;
            window.location.href = redirectUrl;
        });
        

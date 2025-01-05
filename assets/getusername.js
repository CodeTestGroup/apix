        // Function to extract uuid from the URL
function getUuidFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('uuid');  // Remove the '$' sign
}


// Fetch username using the extracted $uuid
async function fetchUsername() {
    const uuid = getUuidFromUrl();
    if (!uuid) {
        console.error('UUID not found in the URL.');
        return;
    }

    const apiUrl = `http://localhost/apix/api.php?mode=uuid&uuid=${uuid}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        const $username = data.username;

        if (!$username) {
            console.error('Username not found in the API response.');
            return;
        }

        console.log('Username:', $username);
        document.getElementById("usernameDisplay").textContent = $username;

        // You can now use $username as needed
    } catch (error) {
        console.error('Error fetching username:', error);
    }
}

// Call the function to fetch the username
fetchUsername();

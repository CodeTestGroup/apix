 // Handle login form submission
        $('#loginForm').submit(function (e) {
            e.preventDefault();
            const username = $('#loginUsername').val();
            const password = $('#loginPassword').val();
            const nextPage = $('#nextPageLogin').val();
            const url = `http://localhost/apix/api.php?mode=login&username=${username}&password=${password}&nextpage=${encodeURIComponent(nextPage)}`;

            window.location.href = url;  // Redirect directly to the API URL with the parameters
        });

        // Handle signup form submission
        $('#signupForm').submit(function (e) {
            e.preventDefault();
            const username = $('#signupUsername').val();
            const password = $('#signupPassword').val();
            const nextPage = $('#nextPageSignup').val();
            const url = `http://localhost/apix/api.php?mode=signup&username=${username}&password=${password}&nextpage=${encodeURIComponent(nextPage)}`;

            window.location.href = url;  // Redirect directly to the API URL with the parameters
        });

        // Change theme based on user selection
        $('#themeSelect').change(function () {
            $('body').removeClass().addClass($(this).val());
        });

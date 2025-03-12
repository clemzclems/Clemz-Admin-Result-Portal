<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - AdminClemz School Portal</title>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script>
        function handleCredentialResponse(response) {
            const jwtToken = response.credential;
            window.location.href = `verify_google.php?token=${jwtToken}`;
        }
    </script>
</head>
<body>

    <h2>Login to AdminClemz School Portal</h2>

    <div id="g_id_onload"
         data-client_id="YOUR_GOOGLE_CLIENT_ID"
         data-callback="handleCredentialResponse"
         data-auto_prompt="false">
    </div>

    <div class="g_id_signin"
         data-type="standard"
         data-shape="rectangular"
         data-theme="outline"
         data-text="sign_in_with"
         data-size="large">
    </div>

</body>
</html>
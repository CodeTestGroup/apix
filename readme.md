# Apix

**Apix** is a lightweight API solution for integrating user authentication and management into your website or web application. With easy-to-use endpoints for login, signup, and user listing, along with pre-built examples and a demo playground, Apix helps you quickly implement essential API functionality.

Visit the homepage:  
[Apix Homepage](http://apix.rf.gd)

---

## Features

- **User Management**: Retrieve a list of users with a single API call.
- **Prebuilt Examples**: Easily copy and paste the example code into your website.
- **Demo Playground**: Interactive page to test API requests and see live results.

## API Endpoints

### 1. **Signup**  
**URL**: `http://apix.rf.gd/api.php?mode=signup&username=[username]&password=[password]`

- **Parameters**:
  - `username` (string) - Desired username.
  - `password` (string) - Desired password (will be hashed).

- **Response**:
  - On success:  
    ```json
    { "status": "success", "message": "User created successfully" }
    ```
  - On failure:  
    ```json
    { "status": "error", "message": "Username already exists" }
    ```

### 2. **Login**  
**URL**: `http://apix.rf.gd/api.php?mode=login&username=[username]&password=[password]`

- **Parameters**:
  - `username` (string) - The username to log in.
  - `password` (string) - The password entered during login.

- **Response**:
  - On success:  
    ```json
    { "status": "success", "message": "Login successful", "username": "demoUser" }
    ```
  - On failure:  
    ```json
    { "status": "error", "message": "Invalid username or password" }
    ```

### 3. **List Users**  
**URL**: `http://apix.rf.gd/api.php?mode=get_users`

- **Response**:
  - On success:  
    ```json
    { "status": "success", "users": [{"username": "user1"}, {"username": "user2"}] }
    ```
  - On failure:  
    ```json
    { "status": "error", "message": "Error fetching users" }
    ```
### 4. **Get Username From UUID**  
**URL**: `http://apix.rf.gd/api.php?mode=uuid&uuid=[uuid]`

- **Response**:
  - On success:  
    ```json
    {"status":"success","username":"demoUser"}
    ```
  - On failure:  
    ```json
    {"status":"error","message":"UUID not found"}
    ```

---

## Demo Playground

Check out the interactive demo where you can test the login, signup, and list users functionality. It's a great way to see how the API works before integrating it into your project.

Visit the demo page:  
[Demo Playground](http://apix.rf.gd/demo.php)

---

## Prebuilt Examples

Apix comes with prebuilt frontend examples for quick integration into your website. You can preview and copy the code to use in your projects.

### Available Examples

- **Example 1**: Bootstrap login form
  
Visit the examples page:  
[Examples](http://apix.rf.gd/examples.php)

---

## Contributing

We welcome contributions! Feel free to fork this repository, create a branch, and submit a pull request. Please ensure that your code follows the coding style and includes tests where applicable.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

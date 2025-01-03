# apix API

The `apix` API provides endpoints for managing user authentication, signup, and usage tracking for a given API token. It includes actions for login, signup, user listing, and token usage stats.

## API Endpoints

- [Login](#login)
- [Signup](#signup)
- [List Users](#list-users)
- [View Usage](#view-usage)

## Request Types

### 1. Login

#### HTTP Request:

```http
POST /api_demo.php?api_token=YOUR_API_TOKEN&action=login HTTP/1.1
Host: yourdomain.com
Content-Type: application/json
Content-Length: 38

{
  "username": "testuser",
  "password": "testpass"
}
```
#### Response Example:
```http
{
    "status": "success",
    "message": "Login successful.",
    "username": "testuser"
}

```

### 2. Signup

#### HTTP Request:

```http
POST /api_demo.php?api_token=YOUR_API_TOKEN&action=signup HTTP/1.1
Host: yourdomain.com
Content-Type: application/json
Content-Length: 38

{
  "username": "newuser",
  "password": "newpass"
}

```
#### Response Example:
```http
{
    "status": "success",
    "message": "Signup successful."
}


```
### 3. List Users

#### HTTP Request:

```http
GET /api_demo.php?api_token=YOUR_API_TOKEN&action=list_users HTTP/1.1
Host: yourdomain.com

```
#### Response Example:
```http
{
    "status": "success",
    "users": [
        {"username": "user1"},
        {"username": "user2"}
    ]
}


```
### 4. Veiw Usage

#### HTTP Request:

```http
GET /api_demo.php?api_token=YOUR_API_TOKEN&action=view_usage HTTP/1.1
Host: yourdomain.com
```
#### Response Example:
```http
{
    "status": "success",
    "used_count": 5
}

```
## Common Errors
### Missing API Token
```http
{
    "status": "error",
    "message": "API token is required."
}

```
### Invalid API Token
```http
{
    "status": "error",
    "message": "Invalid API token."
}

```
### Missing Required Parameters
```http
{
    "status": "error",
    "message": "Username and password are required."
}

```
### Username Already Exists
```http
{
    "status": "error",
    "message": "Username already exists."
}

```

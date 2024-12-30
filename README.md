# User Optimization API

This repository provides a comprehensive API for user management and game ID integration, facilitating user registration, authentication, profile management, and linking of various game IDs.

## Features

- **User Management**:
  - Registration, login, and logout functionalities
  - Password and username recovery
  - Profile updates, including email, username, and password changes

- **Game ID Integration**:
  - Linking of game IDs for popular games such as BGMI, CODM, Valorant, Freefire, and Asphalt

## API Endpoints

### User Controller

#### Unprotected Routes

- **Register**: `POST /api/v1/users/register`
- **Verify Code**: `POST /api/v1/users/verifyCode`
- **Login**: `POST /api/v1/users/login`
- **Forgot Username**: `POST /api/v1/users/forgotUsername`
- **Forgot Password**:
  - **Request Verification Email**: `POST /api/v1/users/forgotPasswordVerificationEmail`
  - **Verify Code**: `POST /api/v1/users/forgotPasswordVerificationCode`
  - **Reset Password**: `POST /api/v1/users/forgotPassword`

#### Protected Routes

- **Logout**: `POST /api/v1/users/logout`
- **Add Details**: `POST /api/v1/users/addDetails`
- **Change Email**:
  - **Request Change**: `POST /api/v1/users/changeEmail`
  - **Verify New Email**: `POST /api/v1/users/verifyNewEmail`
- **Change Username**: `POST /api/v1/users/changeUsername`
- **Change Password**: `POST /api/v1/users/changePassword`

### Game ID Controller

#### Protected Routes

- **BGMI ID**: `POST /api/v1/users/games/bgmi`
- **CODM ID**: `POST /api/v1/users/games/codm`
- **Valorant ID**: `POST /api/v1/users/games/valorant`
- **Freefire ID**: `POST /api/v1/users/games/freefire`
- **Asphalt ID**: `POST /api/v1/users/games/asphalt`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (optional, for containerization)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Uttkarsh24/user_optimization.git
   cd user_optimization
   npm install
   npm run dev
   ```

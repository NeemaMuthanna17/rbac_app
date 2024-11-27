# Dynamic RBAC React App

This project implements a dynamic **Role-Based Access Control (RBAC)** system using React. The app includes:
- User roles (`admin` and `user`).
- Dynamic permissions management (admin can update user permissions).
- Protected routes to restrict access based on permissions.

## Features
- **Dynamic RBAC**: Permissions are managed and updated dynamically at runtime.
- **Admin Dashboard**: Admins can assign or revoke permissions for users.
- **Protected Routes**: Pages are accessible only to users with the required permissions.

## Prerequisites
To run this project, you need:
- [Node.js](https://nodejs.org/) (v14 or newer)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dynamic-rbac-react-app.git
   cd dynamic-rbac-react-app

    Install dependencies:

npm install

Start the development server:

    npm start

    The app will be available at http://localhost:3000.

Roles and Permissions
Roles

    Admin:
        Permissions: viewAdminPage, managePermissions.
        Can access the Admin Dashboard and manage other users' permissions.
    User:
        Permissions: viewUserPage.
        Can access the User Page.

Permissions

Permissions are managed dynamically in the PermissionContext. Admins can update these permissions via the Admin Dashboard.
Pages

    Home Page (/): Public landing page.
        Login as admin or user.
    User Page (/user): Accessible if the logged-in user has the viewUserPage permission.
    Admin Page (/admin): Accessible if the logged-in user has the viewAdminPage permission.

File Structure

src/
  components/
    ProtectedRoute.jsx      # Protects routes based on permissions
  contexts/
    AuthContext.jsx         # Handles authentication and roles
    PermissionContext.jsx   # Manages permissions dynamically
  pages/
    AdminPage.jsx           # Admin dashboard for permission management
    UserPage.jsx            # User-accessible page
    HomePage.jsx            # Landing page
  App.jsx                   # Main application with routing
  index.js                  # Entry point

Usage

    Login: Visit the home page and log in as admin or user.
    Access Protected Routes:
        /user: Requires viewUserPage permission.
        /admin: Requires viewAdminPage permission.
    Admin Dashboard:
        Log in as admin and navigate to /admin.
        Select a role (user or admin) and update their permissions.

Scripts
npm start

Runs the application in development mode at http://localhost:3000.
npm run build

Builds the application for production in the build directory.
Future Enhancements

    Add persistent storage for roles and permissions (e.g., a backend API or local storage).
    Extend roles and permissions for more complex use cases.
    Add user authentication and registration.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Author

Created by Neema Muthanna.

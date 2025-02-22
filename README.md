# Frontend Documentation

This is the documentation for the **React frontend** of the full-stack application. Below, you'll find instructions on how to set up and run the frontend.

## Technologies Used

- **Framework**: React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **HTTP Client**: Axios

## Prerequisites

- Node.js (v16 or higher)
- Git

## Installation

1.  Clone the repository (if not already cloned):

    ```
    git clone https://github.com/AhmedAyman-96/Auth-Client.git
    ```

2.  Navigate to the `Auth-Client` directory:

    ```
    cd Auth-Client
    ```

3.  Install dependencies:

    ```
    yarn
    ```

## Running the Frontend

1.  Start the development server:

    ```
    yarn dev
    ```

2.  Open your browser and navigate to:

    ```
    http://localhost:5173/
    ```

## Environment Variables

The frontend does not require any environment variables for this project.

## Project Structure

client/
├── public/ # Static assets
├── src/ # Source code
│ ├── components/ # Reusable components
│ ├── context/ # React Context for state management
│ ├── pages/ # Page components
│ ├── App.tsx # Main application component
│ ├── index.tsx # Entry point
│ └── ...
├── package.json # Project dependencies
└── ...

## Key Features

- **User Authentication**: Sign up, log in, and log out functionality.
- **Protected Routes**: Routes that require authentication.
- **Responsive Design**: Built with Tailwind CSS for responsive layouts.
- **Toast Notifications**: Display success and error messages using React Toastify.

## Testing

To run the frontend tests, use the following command:

```
yarn test
```
# Auth-Client

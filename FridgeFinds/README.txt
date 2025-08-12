FridgeFinds Recipe Finder - Setup Instructions
==============================================

This guide will walk you through setting up and running the FridgeFinds Recipe Finder application on your local machine.

## Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm) must be installed on your system.

## Setup Steps

### 1. Get the project files

If you haven't already, clone the repository or download the project files to your computer.

### 2. Install Dependencies

Navigate to the project's root directory in your terminal. The `package.json` file already lists the required dependencies (`express`, `axios`, `dotenv`). Run the following command to install them:

```sh
npm install
```

*(Note: If you were starting from scratch without a `package.json`, you would first run `npm init -y` and then `npm install express axios dotenv` to add the packages.)*

### 3. Create Environment File

The application requires an API key from Spoonacular to fetch recipes.

1.  Create a new file named `.env` in the project's root directory.
2.  Add the following line to the `.env` file, replacing `your_api_key_here` with your actual Spoonacular API key:

    SPOONACULAR_API_KEY=your_api_key_here

You can get a free API key from the Spoonacular API website.

### 4. Start the Server

The `package.json` includes a `start` script to run the server. Use the following command:

```sh
npm start
```

You should see a confirmation in your terminal that the server is running.

### 5. Access the Application

Open your web browser and navigate to the following address to see the application running on your local host:

```
http://localhost:3000/recipeFinder.HTML
```
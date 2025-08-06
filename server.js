const express = require('express');
const axios = require('axios');
require('dotenv').config();


const app = express();
const port = 3000;


const API_KEY = process.env.SPOONACULAR_API_KEY;
if (!API_KEY) {
    console.error('FATAL ERROR: SPOONACULAR_API_KEY is not defined in your .env file.');
    console.error('Please create a .env file in the project root and add the line:');
    console.error('SPOONACULAR_API_KEY=your_api_key_here');
    process.exit(1); // Exit with a failure code
}


const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const RECIPE_DETAILS_URL = "https://api.spoonacular.com/recipes";


app.use(express.static(__dirname));


// API endpoint for searching recipes
app.get('/api/search', async (req, res) => {
    try {
        const params = { ...req.query, apiKey: API_KEY };
        const response = await axios.get(API_URL, { params });
        res.json(response.data);
    } catch (error) {
        // Log the full error to the console for detailed debugging
        console.error("An error occurred in /api/search:", error.message);
        const status = error.response ? error.response.status : 500;
        const message = error.response?.data?.message || "An unknown error occurred while fetching recipes.";
        res.status(status).json({ message });
    }
});


// API endpoint for getting recipe details
app.get('/api/details/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`${RECIPE_DETAILS_URL}/${id}/information`, {
            params: { apiKey: API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        // Log the full error to the console for detailed debugging
        console.error(`An error occurred in /api/details/${id}:`, error.message);
        const status = error.response ? error.response.status : 500;
        const message = error.response?.data?.message || "An unknown error occurred while fetching recipe details.";
        res.status(status).json({ message });
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}. Open http://localhost:${port}/recipeFinder.HTML in your browser.`);
});

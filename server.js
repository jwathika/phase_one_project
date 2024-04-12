/*
https://www.youtube.com/watch?v=ZGymN8aFsv4&t=991s
serves the public folder
require('dotenv').config();
*/
const express = require('express');
const needle = require('needle');
const cors = require('cors');
/*instead of making a new request each time to the 
api, you can cache the previous response not to overload server
*/
const apicache = require('apicache');
let cache = apicache.middleware;

/*
get the public folder path so as to server it in the frontend
*/
const path = require('path');
const app = express();
// solved all cors issues
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', async (req, res) => {
	//cache('30 minutes')
	const country_code = req.body;
	console.log(country_code);
	try {
		const myApi = await needle(
			`https://wakatime.com/api/v1/leaders?country_code=${country_code}`
		);
		if (myApi.statusCode !== 200) {
			throw new Error(`Error`);
		}
		res.json(myApi.body);
	} catch (error) {
		/*
	        A catch block to catch any errors and show them on the console
	        */
		console.error(error);
		res.status(500).json({ error: 'Internal Server error, retry again' });
	}
});
/*
if not port is set on the .env file, use the default 3000
Then give the URL to the user
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}/`);
});

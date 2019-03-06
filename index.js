import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import router from './src/router';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello world.'));

app.use('/api', router);

mongoose.connect('mongodb://localhost/fast_tracker');

const db = mongoose.connection;
const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Running fast_tracker on port ${port}`);
});

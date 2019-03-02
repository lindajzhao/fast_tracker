import express from 'express';
import Router from './router';

const app = express();
const router = Router;

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello world.'));
app.use('/api', router);

app.listen(port, () => {
	console.log(`Running fast_tracker on port ${port}`);
});

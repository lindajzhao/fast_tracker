import { Router } from 'express';

const Router = Router();

Router.get('/', (req, res) => res.json({
	status: 'API working',
	message: 'Welcome to fast_tracker',
}));

export default Router;
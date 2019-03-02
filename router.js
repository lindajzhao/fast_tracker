import { Router as ExpressRouter} from 'express';

const Router = ExpressRouter();

Router.get('/', (req, res) => res.json({
	status: 'API working',
	message: 'Welcome to fast_tracker',
}))
;

export default Router;
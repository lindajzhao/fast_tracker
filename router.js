import { Router as ExpressRouter} from 'express';

const router = ExpressRouter();

router.get('/', (req, res) => res.json({
	status: 'API working',
	message: 'Welcome to fast_tracker',
}));

export default router;
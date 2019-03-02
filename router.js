import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.json({
	status: 'API working',
	message: 'Welcome to fast_tracker',
}));

module.exports = router;
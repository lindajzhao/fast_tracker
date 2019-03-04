import { Router as ExpressRouter} from 'express';
import * as controller from './controller';

const router = ExpressRouter();

router.get('/', (req, res) => res.json({
	status: 'API working',
	message: 'Welcome to fast_tracker',
}));

router.route('/item')
  .post(controller.create);

export default router;
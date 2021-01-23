import express from 'express';
import controller from '../controllers/controllers';

const router = express.Router();

router.post('/generatebilling', controller.getDataBilling);
router.get('/', controller.getTestingRoute);

export = router;

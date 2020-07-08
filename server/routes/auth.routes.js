import express from 'express';
import authctrl from '../controllers/auth.controller';

const router = express.Router();

router.route('/auth/signin')
        .post(authctrl.signin);
router.route('/auth/signout')
        .get(authctrl.signout);


export default router;
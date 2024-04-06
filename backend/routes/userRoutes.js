import express from 'express';
import { register, login, getAuthenticatedContent } from '../controllers/useController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/content', authenticateUser, getAuthenticatedContent);

export default router;

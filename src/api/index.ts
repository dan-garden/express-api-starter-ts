import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from '../api/emojis';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req: any, res: any) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

export default router;

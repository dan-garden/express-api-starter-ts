import express from 'express';

const router = express.Router();

type EmojiResponse = string[];

router.get<{}, EmojiResponse>('/', (req: any, res: any) => {
  res.json(['😀', '😳', '🙄']);
});

export default router;

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const inviteId = req.query.inviteId;
  res.status(200).json({
    name: 'Test',
    attending: false,
    inviteId,
  });
}

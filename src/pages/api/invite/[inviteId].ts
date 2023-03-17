import Airtable from 'airtable';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { inviteId } = req.query;

  if (!inviteId) {
    res.status(400).send('Invalid request');
    return;
  }

  Airtable.configure({
    apiKey: process.env.AIRTABLE_TOKEN,
  });

  const base = Airtable.base(process.env.AIRTABLE_BASE_ID || '');
  const table = base(process.env.AIRTABLE_TABLE_ID || '');

  switch (req.method) {
    case 'GET': {
      try {
        const invite = await table.find(inviteId as string);
        debugger;
        if (!invite) {
          res.status(404).send('Invite not found');
          return;
        }

        res.status(200).json(invite);
      } catch (err: any) {
        res.status(500).send(err.message || 'Something went wrong');
      }
      break;
    }
    case 'POST': {
      const inputs = JSON.parse(req.body || {});

      if (!inputs) {
        res.status(400).send('No fields given');
      }

      try {
        await table.update(
          [
            {
              id: inviteId as string,
              fields: {
                ...(inputs.attending && { attending: inputs.attending }),
                ...(inputs.adultsCount && { adultsCount: inputs.adultsCount }),
                ...(inputs.kidsCount && { kidsCount: inputs.kidsCount }),
              },
            },
          ],
          (err: any, invites: any) => {
            if (err) {
              console.error(err);
              res.status(500).send(err.message || 'Something went wrong');
              return;
            }
            res.status(200).json(invites);
          },
        );
      } catch (err: any) {
        res.status(500).send(err.message || 'Something went wrong');
      }
      break;
    }
    default:
      res.status(404).send('Route not found');
  }
};

export default handler;

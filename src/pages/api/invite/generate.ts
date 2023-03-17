import Airtable from 'airtable';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { apiKey } = req.query;

  if (!apiKey || apiKey !== process.env.MAXPARTY_API_KEY) {
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
      let output: {
        name: string;
        shareUrl: string;
      }[] = [];

      try {
        table
          .select({
            view: 'Grid view',
          })
          .eachPage(
            function page(records, fetchNextPage) {
              records.forEach((record) => {
                const id = record.getId();
                const shareUrl = `https://maxwjacobs.com?inviteId=${id}`;
                output = [
                  ...output,
                  {
                    name: record.get('name') as string,
                    shareUrl,
                  },
                ];
              });

              // To fetch the next page of records, call `fetchNextPage`.
              // If there are more records, `page` will get called again.
              // If there are no more records, `done` will get called.
              fetchNextPage();
            },
            function done(err) {
              if (err) {
                console.error(err);
                return;
              }

              res.status(200).send(JSON.stringify(output));
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

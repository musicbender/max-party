import Layout from '@/components/layout';

import Head from 'next/head';

import { FC } from 'react';

export const Rsvp: FC = () => {
  return (
    <Layout>
      <Head>
        <title>RSVP For Max's First Birthday!</title>
      </Head>
      <main className="flex flex-col">Sorry you are not permitted</main>
    </Layout>
  );
};

export default Rsvp;

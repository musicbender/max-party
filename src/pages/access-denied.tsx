import Layout from '@/components/layout';
import monster2 from 'images/monster-2.png';
import Head from 'next/head';
import Image from 'next/image';

import { FC } from 'react';

export const Confirmation: FC = () => {
  return (
    <Layout>
      <Head>
        <title>See you at Max's First Birthday!</title>
      </Head>
      <main className="flex flex-col">
        <div className="flex flex-col h-[100vh] overflow-hidden p-4">
          <div className="form-box mt-12 mb-8">
            <h1 className="mb-4">"Now stop!", Max cried</h1>
            <h2 className="text-primary-600 font-display mb-4">You cannot access this page</h2>
          </div>
          <Image
            className="m-auto mb-12"
            src={monster2}
            width="400"
            height="492"
            alt="Wild things reaching for button"
          />
        </div>
      </main>
    </Layout>
  );
};

export default Confirmation;

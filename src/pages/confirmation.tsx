import Button from '@/components/button';
import DateInfo from '@/components/date-info/date-info';
import IncrementButtons from '@/components/increment-buttons';
import Layout from '@/components/layout';
import monster1 from 'images/monster-1.png';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { FC } from 'react';

type Props = {
  accepted: boolean;
};

export const Confirmation: FC<Props> = ({ accepted }) => {
  return (
    <Layout>
      <Head>
        <title>See you at Max's First Birthday!</title>
      </Head>
      <main className="flex flex-col">
        <div className="flex flex-col h-[100vh] overflow-hidden p-4">
          <div className="form-box mt-12 mb-8">
            <h1 className="mb-4">You're all set!</h1>
            <h2 className="text-primary-600 font-display mb-4">
              See you where the wild things are
            </h2>
            <DateInfo />
          </div>
          <Image
            className="m-auto mb-12"
            src={monster1}
            width="400"
            height="492"
            alt="Wild things reaching for button"
          />
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const { accepted } = query;

  return {
    props: {
      accepted: !!accepted && accepted === 'true',
    },
  };
};

export default Confirmation;

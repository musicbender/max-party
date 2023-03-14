import Button from '@/components/button';
import DateInfo from '@/components/date-info/date-info';
import IncrementButtons from '@/components/increment-buttons';
import Layout from '@/components/layout';
import { useGetInviteQuery } from '@/lib/api-queries';
import { deniedServerRedirect } from '@/lib/common';
import monster1 from 'images/monster-1.png';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';
import { dehydrate, QueryClient } from 'react-query';

type Props = {
  accepted: boolean;
  inviteId: string;
};

export const Confirmation: FC<Props> = ({ accepted, inviteId }) => {
  return (
    <Layout>
      <Head>
        <title>See you at Max's First Birthday!</title>
      </Head>
      <main className="flex flex-col">
        <div className="flex flex-col h-[100vh] overflow-hidden p-4">
          <Link href={`/?inviteId=${inviteId}`} className="go-back mt-2 ml-2">
            back home
          </Link>
          {accepted ? (
            <div className="form-box mt-4 mb-8">
              <h1 className="mb-4">You're all set!</h1>
              <h2 className="text-primary-600 font-display mb-4">
                See you where the wild things are
              </h2>
              <DateInfo />
            </div>
          ) : (
            <div className="form-box mt-12 mb-8">
              <h1 className="mb-4">Sorry you couln't come!</h1>
              <h2 className="text-primary-600 font-display mb-4">
                Thanks for letting us know and we'll miss you.
              </h2>
            </div>
          )}
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
  const inviteId = query.inviteId as string;

  if (!inviteId) return deniedServerRedirect;

  const queryClient = new QueryClient();

  const invite = await queryClient.fetchQuery(
    useGetInviteQuery.getKey(inviteId),
    useGetInviteQuery.fetcher(inviteId),
  );

  if (!invite) return deniedServerRedirect;

  return {
    props: {
      accepted: !!accepted && accepted === 'true',
      inviteId: inviteId as string,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Confirmation;

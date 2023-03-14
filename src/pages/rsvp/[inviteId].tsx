import Button from '@/components/button';
import IncrementButtons from '@/components/increment-buttons';
import Layout from '@/components/layout';
import { useGetInviteQuery } from '@/lib/api-queries';
import { deniedServerRedirect } from '@/lib/common';
import { serverHostname } from '@/lib/config';
import { Attending, Invite } from '@/lib/types';
import monster2 from 'images/monster-2.png';
import monsters2 from 'images/monsters-2.png';
import arrow from 'images/tribal-arrow.png';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FC, MouseEvent, useState } from 'react';
import { dehydrate, QueryClient, useMutation } from 'react-query';

type Props = {
  inviteId: string;
};

enum RsvpSteps {
  ATENDING = 'attending',
  HEADCOUNT = 'headcount',
}

export const Rsvp: FC<Props> = ({ inviteId }) => {
  const { data } = useGetInviteQuery(inviteId);
  const router = useRouter();
  const [step, setStep] = useState(RsvpSteps.ATENDING);
  const [adultsCount, setAdultsCount] = useState(data?.adultsCount || 0);
  const [kidsCount, setKidsCount] = useState(data?.kidsCount || 0);

  const useUpdateInvite = useMutation((newInvite: Invite) => {
    return fetch(`${serverHostname}/api/invite/${inviteId}`, {
      method: 'POST',
      body: JSON.stringify(newInvite),
    });
  });

  const handleAttending = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setStep(RsvpSteps.HEADCOUNT);
  };

  const handleDecline = async (e: MouseEvent<HTMLAnchorElement>): Promise<void> => {
    e.preventDefault();

    useUpdateInvite.mutate({
      attending: Attending.NO,
    });

    router.push(`/confirmation?accepted=false&inviteId=${inviteId}`);
  };

  const handleSubmit = async (e: MouseEvent<HTMLAnchorElement>): Promise<void> => {
    e.preventDefault();

    useUpdateInvite.mutate({
      adultsCount,
      kidsCount,
      attending: Attending.YES,
    });

    router.push(`/confirmation?accepted=true&inviteId=${inviteId}`);
  };

  return (
    <Layout>
      <Head>
        <title>RSVP For Max's First Birthday!</title>
      </Head>
      <main className="flex flex-col">
        <div className="flex flex-col h-[100vh] overflow-hidden p-4">
          <Link href={`/?inviteId=${inviteId}`} className="go-back mt-2 ml-2">
            go back
          </Link>

          {step === RsvpSteps.ATENDING && (
            <>
              <div className="form-box mt-4 mb-4">
                <h1 className="mb-8">Will you be attending?</h1>
                <div>
                  <Button className="mb-2" handleClick={handleAttending} variant="primary">
                    We'll be there!
                  </Button>
                  <Button className="mb-2" handleClick={handleDecline}>
                    We cannot attend
                  </Button>
                </div>
              </div>
              <Image
                className="m-auto mb-12"
                src={monster2}
                width="400"
                height="492"
                alt="Wild things reaching for button"
              />
            </>
          )}
          {step === RsvpSteps.HEADCOUNT && (
            <>
              <div className="form-box mt-4 mb-4">
                <h2 className="mb-2">How many adults?</h2>
                <h3 className="text-6xl font-bold text-primary-700 mb-4">{adultsCount}</h3>
                <IncrementButtons
                  className="mb-16"
                  value={adultsCount}
                  handleChange={(value: number): void => {
                    setAdultsCount(value);
                  }}
                />
                <h2 className="mb-2">How many little wild ones?</h2>
                <h3 className="text-6xl font-bold text-primary-700 mb-4">{kidsCount}</h3>
                <IncrementButtons
                  className="mb-12"
                  value={kidsCount}
                  handleChange={(value: number): void => {
                    setKidsCount(value);
                  }}
                />
                <Button
                  handleClick={handleSubmit}
                  variant="primary"
                  disabled={!kidsCount && !adultsCount}
                >
                  Submit!
                </Button>
              </div>
              <Image
                className="m-auto mb-12"
                src={monsters2}
                width="400"
                height="492"
                alt="Wild things reaching for button"
              />
            </>
          )}
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const inviteId = params?.inviteId as string;
  if (!inviteId) return deniedServerRedirect;

  const queryClient = new QueryClient();

  const invite = await queryClient.fetchQuery(
    useGetInviteQuery.getKey(inviteId),
    useGetInviteQuery.fetcher(inviteId),
  );

  if (!invite) return deniedServerRedirect;

  return {
    props: {
      inviteId: inviteId as string,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Rsvp;

import Button from '@/components/button';
import IncrementButtons from '@/components/increment-buttons';
import Layout from '@/components/layout';
import monster2 from 'images/monster-2.png';
import monsters2 from 'images/monsters-2.png';
import arrow from 'images/tribal-arrow.png';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { FC, MouseEvent, useState } from 'react';

type Props = {
  inviteId: string;
};

enum RsvpSteps {
  ATENDING = 'attending',
  HEADCOUNT = 'headcount',
}

export const Rsvp: FC<Props> = ({ inviteId }) => {
  const router = useRouter();
  const [step, setStep] = useState(RsvpSteps.ATENDING);
  const [adultsCount, setAdultsCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);

  const handleAttending = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setStep(RsvpSteps.HEADCOUNT);
  };

  const handleDecline = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    // send api data to airtable
    router.push('/confirmation?accepted=false');
  };

  const handleSubmit = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    // send data to airtable api

    router.push('/confirmation?accepted=true');
  };

  return (
    <Layout>
      <Head>
        <title>RSVP For Max's First Birthday!</title>
      </Head>
      <main className="flex flex-col">
        <div className="flex flex-col h-[100vh] overflow-hidden p-4">
          <a href={`/?inviteId=${inviteId}`} className="go-back mt-2 ml-2">
            go back
          </a>
          {step === RsvpSteps.ATENDING && (
            <>
              <div className="form-box mt-12 mb-8">
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
              <div className="form-box mt-12 mb-8">
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
                  className="mb-16"
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

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  // api call to airtable to check if invite id exists

  if (!params?.inviteId) {
    return {
      redirect: {
        destination: '/access-denied',
        permanent: true,
      },
    };
  }

  return {
    props: {
      inviteId: (params?.inviteId as string) || '',
    },
  };
};

export default Rsvp;

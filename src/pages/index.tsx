import Button from '@/components/button';
import DateInfo from '@/components/date-info/date-info';
import Header from '@/components/header';
import Layout from '@/components/layout';
import { useGetInviteQuery } from '@/lib/api-queries';
import { deniedServerRedirect } from '@/lib/common';
import {
  bannerPlxConf,
  celebratePlxConf,
  maxKidPlxConf,
  maxPlxConf,
  monster1PlxConf,
  monsterRumpusPlxConf,
  turningOnePlxConf,
  wildThingsReachPlxConf,
} from '@/lib/plx-configs';
import { Attending } from '@/lib/types';
import phoneIcon from 'icons/phone.svg';
import rsvpIcon from 'icons/rsvp.svg';
import smsIcon from 'icons/sms.svg';
import bannerImg from 'images/banner-2.png';
import maxKid from 'images/max-kid.png';
import monster1 from 'images/monster-1.png';
import monsters1 from 'images/monsters-1.png';
import monsters3 from 'images/monsters-3.png';
import smallCrownImg from 'images/small-crown-2.png';
import arrow from 'images/tribal-arrow.png';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import Plx from 'react-plx';
import { dehydrate, QueryClient } from 'react-query';

const LocationInfo = dynamic(() => import('../components/location-info'), { ssr: false });

type Props = {
  inviteId: string;
};

export const Home: FC<Props> = ({ inviteId }) => {
  const { data } = useGetInviteQuery(inviteId);
  return (
    <Layout>
      <Head>
        <title>Max turns 1 celebration</title>
      </Head>
      <main className="flex flex-col">
        <Header />
        <div className="flex flex-col p-4">
          {/* peaking monsters */}
          <div className="relative h-60">
            <div className="absolute top-8 right-[-20rem] w-[25rem]">
              <Plx parallaxData={monster1PlxConf} className="w-full">
                <Image
                  className=""
                  src={monster1}
                  width="788"
                  height="804"
                  alt="Monster 1 on a rumpus"
                />
              </Plx>
            </div>
            <div className="absolute top-28 left-[-13rem] w-[15rem]">
              <Plx parallaxData={maxKidPlxConf} className="w-full">
                <Image
                  className="scale-x-[-1]"
                  src={maxKid}
                  width="316"
                  height="550"
                  alt="Monster 2 on a rumpus"
                />
              </Plx>
            </div>
          </div>

          {/* join us banner */}
          <div className="mt-60 mb-2 h-16 join-us-banner">
            <Plx parallaxData={bannerPlxConf} className="w-full">
              <Image
                className="super-center"
                src={bannerImg}
                width="400"
                height="25"
                alt="Join us banner"
              />
            </Plx>
          </div>

          {/* celbrate text */}
          <div className="h-20 mb-28 celebrate-text">
            <Plx parallaxData={celebratePlxConf} className="w-full">
              <p className="font-bold text-center text-2xl max-w-[16rem] m-auto">
                Join us
                {data?.name && (
                  <>
                    ,<span className="text-primary-600"> {data?.name}</span>,
                  </>
                )}{' '}
                for mischief and fun as we celebrate our king of all{' '}
                <span className="text-primary-600">wild</span> things
              </p>
            </Plx>
          </div>

          {/* max */}
          <div className="h-28 max-text">
            <Plx parallaxData={maxPlxConf} className="w-full h-56 text-center">
              <div className="plx-max relative max-w-sm m-auto">
                <Image
                  className="absolute left-4 top-0 -rotate-[25deg]"
                  src={smallCrownImg}
                  width="48"
                  height="12"
                  alt="Small crown"
                />
                <Image
                  className="absolute right-4 top-0 rotate-[25deg]"
                  src={smallCrownImg}
                  width="48"
                  height="12"
                  alt="Small crown"
                />
                <strong className="font-bold text-center text-[12rem] max-w-[16rem] m-auto">
                  MAX
                </strong>
              </div>
            </Plx>
          </div>

          {/* is turning 1 */}
          <div className="h-20 mb-8">
            <Plx parallaxData={turningOnePlxConf} className="plx-turning-1 w-full">
              <p className="font-bold text-center text-3xl max-w-[16rem] m-auto">
                is turning <span className="text-primary-600">one</span>!
              </p>
            </Plx>
          </div>

          {/* rsvp CTA */}
          {data?.attending === Attending.YES ? (
            <p className="m-auto mb-40 text-green font-display text-2xl text-center">
              You've RSVP'd! See you where the wild things are!
            </p>
          ) : (
            <Button
              href={`/rsvp/${inviteId}`}
              className="m-auto mb-32 rsvp-cta"
              variant="primary"
              size="big"
            >
              RSVP Now
            </Button>
          )}

          <div className="h-40 mb-16 ml-[2rem]">
            <Plx parallaxData={wildThingsReachPlxConf} className="plx-things-3 w-full">
              <Image
                className="m-auto mb-12"
                src={monsters3}
                width="400"
                height="500"
                alt="Wild things reaching for button"
              />
            </Plx>
          </div>

          {/* info section */}
          <div className="md:flex m-auto">
            {/* date info */}
            <div>
              <Image
                className="m-auto w-[20rem] my-4"
                src={arrow}
                width="300"
                height="12"
                alt="Arrow divider"
              />

              <DateInfo />

              <Image
                className="m-auto w-[20rem] my-4 scale-x-[-1]"
                src={arrow}
                width="300"
                height="12"
                alt="Arrow divider"
              />
            </div>

            {/* location info */}
            <div>
              <Image
                className="hidden m-auto w-[20rem] my-4 md:block"
                src={arrow}
                width="300"
                height="12"
                alt="Arrow divider"
              />

              <LocationInfo />

              <Image
                className="m-auto w-[20rem] mt-4 mb-24 md:scale-x-[-1]"
                src={arrow}
                width="300"
                height="12"
                alt="Arrow divider"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 max-w-2xl m-auto gap-4 md:gap-8">
            <div>
              <h3 className="mb-2">More info</h3>
              <p>There will be food, treats, and wildly fun activities for the kids!</p>
            </div>
            <div>
              <h3 className="mb-2">Parking</h3>
              <p>There should be plenty of street parking near the house.</p>
            </div>
            <div>
              <h3 className="mb-4">Contact</h3>
              <div>
                <Button href={`sms:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className="mb-4">
                  <Image
                    className="inline-block mr-2"
                    src={smsIcon}
                    width="28"
                    height="28"
                    alt="Text icon"
                  />
                  Text Dee Dee
                </Button>
                <Button href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className="mb-4">
                  <Image
                    className="inline-block mr-2"
                    src={phoneIcon}
                    width="28"
                    height="28"
                    alt="Text icon"
                  />
                  Call Dee Dee
                </Button>
                {/* rsvp CTA bottom */}
                {data?.attending !== Attending.YES && (
                  <Button
                    href={`/rsvp/${inviteId}`}
                    variant="primary"
                    className="inline-block mr-2 min-w-[11.35rem]"
                  >
                    <Image
                      className="inline-block mr-2"
                      src={rsvpIcon}
                      width="28"
                      height="28"
                      alt="Text icon"
                    />
                    RSVP Now!{'   '}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* bottom monsters */}
          <div className="mt-16 mb-16 ml-[8.5rem] w-full max-w-[501px] sm:mx-auto sm:translate-x-[25vw]">
            <Plx parallaxData={monsterRumpusPlxConf} className="w-full">
              <Image src={monsters1} width="591" height="201" alt="Monsters on a rumpus" />
            </Plx>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
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
      inviteId: inviteId as string,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;

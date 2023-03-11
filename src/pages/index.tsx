import Header from '@/components/header';
import Layout from '@/components/layout';
import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import bannerImg from 'images/banner-2.png';
import smallCrownImg from 'images/small-crown-2.png';
import arrow from 'images/tribal-arrow.png';
import monsters3 from 'images/monsters-3.png';
import smsIcon from 'icons/sms.svg';
import phoneIcon from 'icons/phone.svg';
import Plx from 'react-plx';
import dynamic from 'next/dynamic';
import {
  bannerPlxConf,
  celebratePlxConf,
  maxPlxConf,
  turningOnePlxConf,
  wildThingsReachPlxConf,
} from '@/lib/plx-configs';
import Button from '@/components/button';
import DateInfo from '@/components/date-info/date-info';

const LocationInfo = dynamic(() => import('../components/location-info'), { ssr: false });

export const Home: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Max turns 1 celebration</title>
      </Head>
      <main className="flex flex-col">
        <Header />
        <div className="flex flex-col p-4">
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
          <div className="h-20 mb-20 celebrate-text">
            <Plx parallaxData={celebratePlxConf} className="w-full">
              <p className="font-bold text-center text-2xl max-w-[16rem] m-auto">
                for mischief and fun as we celbrate our king of all{' '}
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
          <Button className="m-auto mb-32 rsvp-cta" variant="primary" size="big">
            RSVP Now
          </Button>

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
          <Image
            className="m-auto w-[20rem] my-4"
            src={arrow}
            width="300"
            height="12"
            alt="Arrow divider"
          />

          {/* date info */}
          <DateInfo />

          <Image
            className="m-auto w-[20rem] my-4 scale-x-[-1]"
            src={arrow}
            width="300"
            height="12"
            alt="Arrow divider"
          />

          {/* location info */}
          <LocationInfo />

          <Image
            className="m-auto w-[20rem] mt-4 mb-24"
            src={arrow}
            width="300"
            height="12"
            alt="Arrow divider"
          />

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
                <Button href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
                  <Image
                    className="inline-block mr-2"
                    src={phoneIcon}
                    width="28"
                    height="28"
                    alt="Text icon"
                  />
                  Call Dee Dee
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

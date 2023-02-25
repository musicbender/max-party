import Layout from '@/components/layout';
import Head from 'next/head';
import { FC } from 'react';

export const Home: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Max turns 1 celebration</title>
        <meta name="description" content="Let's celebrate Max turning 1!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Style+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>hello max</main>
    </Layout>
  );
};

export default Home;

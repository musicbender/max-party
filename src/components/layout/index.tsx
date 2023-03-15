import Head from 'next/head';
import { FC } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Let's celebrate Max turning 1!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/api/og" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-primary-50 overflow-x-hidden">{children}</div>
    </>
  );
};

export default Layout;

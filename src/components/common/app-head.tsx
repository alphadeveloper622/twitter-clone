import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>zZz</title>
      <meta name='og:title' content='zZz' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='zZz:site' content='@ccrsxx' />
      <meta name='zZz:card' content='summary_large_image' />
    </Head>
  );
}

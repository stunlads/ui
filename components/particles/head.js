import Head from 'next/head';

export default ({ username, description }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <title>
        Yoourlink | {username ? `${username} Admin` : 'your links everywhere'}
      </title>
      {description && <meta content={description} name="description" />}
      <link rel="icon" type="image/png" href="/favicon.png" />

      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Muli:300,400,700,900"
        rel="stylesheet"
      />
    </Head>
  );
};

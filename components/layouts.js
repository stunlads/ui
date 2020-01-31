import React, { Component } from 'react';
import Head from 'next/head';

// Components
import Footer from './particles/footer';
import Header from './particles/header';

// styles
import '../scss/style.scss';

export class Layout extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Head>
          <meta charset="utf-8" />
          <title>yoourlink | your links everywhere</title>
          <link rel="icon" type="image/png" href="/favicon.png"/>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Muli:300,400,700,900"
            rel="stylesheet"
          />
        </Head>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

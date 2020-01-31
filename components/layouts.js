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
          <title>Yoourlink</title>
          <meta charset="utf-8" />
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

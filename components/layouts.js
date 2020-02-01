import React, { Component } from 'react';

// Components
import Footer from './particles/footer';
import { LogoHeader, Header } from './particles/header';
import Head from './particles/head';

// styles
import '../scss/style.scss';

export class Layout extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Head />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export class SignLayout extends Component {
  render() {
    return (
      <div>
        <Head />
        <LogoHeader />
        {this.props.children}
      </div>
    );
  }
}
import React, { Component } from 'react';

// Components
import { Layout } from '../components/layouts';
import { SignUp } from '../components/particles/auth';
import { PublicAction } from '../components/actions';

export default class Index extends PublicAction {
  render() {
    return (
      <Layout>
        <div className="intro-section" id="home-section">
          <div className="slide-1" data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4">
                      <h1 data-aos="fade-up" data-aos-delay={100}>
                        Your Links Everywhere
                      </h1>
                      <p
                        className="mb-4"
                        data-aos="fade-up"
                        data-aos-delay={200}
                      >
                        <b>yoourlink</b> is a free tool for optimising your
                        internet presence, whether you’re a blogger, an artist
                        or run a content platform.
                      </p>
                      <p data-aos="fade-up" data-aos-delay={300}>
                        <a href="/~yoourlink" className="btn btn-white">
                          /~yoourlink
                        </a>
                      </p>
                    </div>
                    <div className="col-lg-5 ml-auto">
                      <SignUp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

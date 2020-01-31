import React, { Component } from 'react';
import { Layout } from '../components/layouts';

export default class Index extends Component {
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
                    <div
                      className="col-lg-5 ml-auto"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <form action method="post" className="form-box">
                        <h3 className="h4 text-black mb-4 text-center font-weight-bold">
                          Register in seconds
                        </h3>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email Addresss"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group mb-4">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Re-type Password"
                          />
                        </div>
                        <div className="form-group">
                          <a className="btn btn-indigo w-100">Create Account</a>
                        </div>
                      </form>
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

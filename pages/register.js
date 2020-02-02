import React, { Component } from 'react';

// Components
import { SignLayout } from '../components/layouts';
import { SignUp } from '../components/particles/auth';
import { Auth } from '../components/checks';

export default class Register extends Auth {
  render() {
    return (
      <SignLayout>
        <div className="container">
          <div className="align-items-center">
            <div className="row">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-lg-5 ml-auto mr-auto">
                    <SignUp showLoginText={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignLayout>
    );
  }
}

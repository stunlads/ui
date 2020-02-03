import React, { Component } from 'react';

// Components
import { LogoLayout } from '../components/layouts';
import { SignIn } from '../components/particles/auth';
import { PublicAction } from '../components/actions';

export default class Login extends PublicAction {
  render() {
    return (
      <LogoLayout>
        <div className="container">
          <div className="align-items-center">
            <div className="row">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-lg-5 ml-auto mr-auto">
                    <SignIn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LogoLayout>
    );
  }
}

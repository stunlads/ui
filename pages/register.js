import React, { Component } from 'react';

// Components
import { LogoLayout } from '../components/layouts';
import { SignUp } from '../components/particles/auth';
import { PublicAction } from '../components/actions';

export default class Register extends PublicAction {
  render() {
    return (
      <LogoLayout>
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
      </LogoLayout>
    );
  }
}

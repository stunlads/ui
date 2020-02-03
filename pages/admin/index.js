import React, { Component } from 'react';

// Components
import { AuthLayout } from '../../components/layouts';
import { PrivateAction } from '../../components/actions';

export default class Links extends PrivateAction {
  render() {
    return (
      <AuthLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h3 class="h4 section-title text-center py-3">My Links</h3>
            </div>
            <div className="col-6">
              <h3 class="h4 section-title text-center py-3">Profile Preview</h3>
            </div>
          </div>
        </div>
      </AuthLayout>
    );
  }
}

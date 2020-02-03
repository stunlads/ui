import React, { Component } from 'react';

// Components
import { AuthLayout } from '../../components/layouts';
import { PrivateAction } from '../../components/actions';

export default class Links extends PrivateAction {
  render() {
    return (
      <AuthLayout>
        <h3 class="h4 section-title text-center py-3">My Links</h3>
      </AuthLayout>
    );
  }
}

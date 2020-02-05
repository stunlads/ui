import React, { Component } from 'react';

// Components
import { AuthLayout } from '../../components/layouts';
import { PrivateAction } from '../../components/actions';
import Links from '../../components/particles/links';

export default class Admin extends PrivateAction {
  render() {
    return (
      <AuthLayout {...this.props}>
        <Links />
      </AuthLayout>
    );
  }
}

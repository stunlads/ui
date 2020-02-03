import React, { Component } from 'react';

// Components
import { AuthLayout } from '../../components/layouts';
import { PrivateAction } from '../../components/actions';

export default class settings extends PrivateAction {
  render() {
    return <AuthLayout></AuthLayout>;
  }
}

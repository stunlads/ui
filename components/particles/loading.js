import React, { Component } from 'react';

export class Loading extends Component {
  render() {
    return (
      <div className="text-center p-3">
        <img src="/static/images/loading.svg" />
      </div>
    );
  }
}
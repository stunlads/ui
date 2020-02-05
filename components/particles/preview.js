import React, { Component } from 'react';
import { boundMethod } from 'autobind-decorator';

// Components
import { Loading } from './loading';

// Utils
import Api from '../../utils/api';

export default class Preview extends Component {
  state = {
    loading: true,
    data: {
      links: []
    }
  };

  componentDidMount() {
    this.fetch();
  }

  @boundMethod
  async fetch() {
    const { username } = this.props;

    // fetch user
    const { isSuccess, data } = await Api.get(`/preview/${username}`);

    if (isSuccess) {
      this.setState({
        loading: false,
        data
      });
    }
  }

  render() {
    const { username, links } = this.state.data;

    return (
      <>
        <h3 className="h4 section-title text-center py-3">Profile Preview</h3>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="preview-container">
            <div className="preview-container__avatar">
              <img src="/static/images/avatar.png" />
            </div>
            <div className="preview-container__username">
              <p>@{username}</p>
            </div>
            <div className="preview-container__links">
              {links.map(link => {
                return (
                  <a
                    href={link.url}
                    className="preview-container__links--link"
                    target="_blank"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

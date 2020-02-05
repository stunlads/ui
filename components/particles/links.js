import React, { Component } from 'react';
import _ from 'underscore';
import { boundMethod } from 'autobind-decorator';
import {
  SortableContainer,
  SortableElement,
  sortableHandle
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ContentEditable from 'react-contenteditable';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { Loading } from './loading';

// Utils
import Api from '../../utils/api';

class NoResults extends Component {
  render() {
    return (
      <div className="text-center p-3">
        <p>You don't have any links to display.</p>
        <p>Click the button above to add one.</p>
      </div>
    );
  }
}

class Title extends Component {
  state = {
    loading: false,
    title: ''
  };

  componentDidMount() {
    const { title = '' } = this.props;

    this.setState({
      title
    });
  }

  @boundMethod
  handleChange(evt) {
    const { value } = evt.target;

    return this.setState({ title: value });
  }

  @boundMethod
  async onBlur() {
    const { _id } = this.props;
    const { title } = this.state;

    // set loading
    this.setState({ loading: true });

    const { isSuccess } = await Api.put(`/links/${_id}`, { title });

    if (isSuccess) {
      return this.setState({ loading: false });
    }
  }

  render() {
    const { title } = this.state;
    return (
      <ContentEditable
        className="links__link--content-name"
        html={title}
        placeholder="Title"
        onChange={this.handleChange}
        onBlur={this.onBlur}
      />
    );
  }
}

class Url extends Component {
  state = {
    loading: false,
    url: ''
  };

  componentDidMount() {
    const { url = '' } = this.props;

    this.setState({
      url
    });
  }

  @boundMethod
  handleChange(evt) {
    const { value } = evt.target;
    return this.setState({ url: value });
  }

  @boundMethod
  async onBlur() {
    const { _id } = this.props;
    const { url } = this.state;

    // set loading
    this.setState({ loading: true });

    const { isSuccess } = await Api.put(`/links/${_id}`, { url });

    if (isSuccess) {
      return this.setState({ loading: false });
    }
  }

  render() {
    const { url } = this.state;
    return (
      <ContentEditable
        className="links__link--content-url"
        html={url}
        placeholder="http://url"
        onChange={this.handleChange}
        onBlur={this.onBlur}
      />
    );
  }
}

class LinkItem extends Component {
  render() {
    const { title, url, _id } = this.props.data;

    return (
      <>
        <div className="links__link--content">
          <Title title={title} _id={_id} />
          <Url url={url} _id={_id} />
        </div>

        <div className="links__link--options">
          <span onClick={this.props.onRemove}>
            <FontAwesomeIcon icon={faTrash} width="14" />
          </span>
        </div>
      </>
    );
  }
}

const DragHandle = sortableHandle(() => {
  return (
    <div className="links__link--drag-handle">
      <span />
    </div>
  );
});

const SortableLink = SortableElement(({ data, onRemove }) => {
  return (
    <div className="links__link rounded bg-white why-choose-us-box">
      <DragHandle />
      <LinkItem data={data} onRemove={onRemove} />
    </div>
  );
});

const SortableList = SortableContainer(({ items, onRemove }) => {
  if (_.isEmpty(items)) {
    return <NoResults />;
  }

  return (
    <div className="links">
      {items.map((data, index) => (
        <SortableLink
          key={`item-${data._id}`}
          index={index}
          data={data}
          onRemove={() => onRemove(data._id)}
        />
      ))}
    </div>
  );
});

export default class Links extends Component {
  state = {
    loading: true,
    items: []
  };

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const { data } = await Api.get('/links');

    return this.setState({
      items: data,
      loading: false
    });
  }

  @boundMethod
  onSortEnd({ oldIndex, newIndex }) {
    const items = arrayMove(this.state.items, oldIndex, newIndex);

    return this.setState({ items }, () => this.changeSorting());
  }

  async changeSorting() {
    const items = this.state.items.map(({ _id }, sorting) => {
      return { _id, sorting };
    });

    // updated
    await Api.post('/links/sorting', { items });
  }

  @boundMethod
  async onInsert() {
    this.setState({ loading: true });

    // insert blank
    await Api.post('/links');

    // fetch list.
    return this.fetch();
  }

  @boundMethod
  async onRemove(_id) {
    // remove data
    await Api.delete(`/links/${_id}`);

    return this.fetch();
  }

  render() {
    const { loading, items } = this.state;

    return (
      <div>
        <h3 className="h4 section-title text-center py-3">My Links</h3>

        <button
          className="btn btn-indigo py-3 px-5 btn-block"
          onClick={this.onInsert}
          disabled={loading}
        >
          Add New Link
        </button>

        {loading ? (
          <Loading />
        ) : (
          <div className="links">
            <SortableList
              items={items}
              onSortEnd={this.onSortEnd}
              onRemove={this.onRemove}
              useDragHandle
            />
          </div>
        )}
      </div>
    );
  }
}

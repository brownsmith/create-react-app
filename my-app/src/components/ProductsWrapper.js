import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductsWrapper extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  _renderProducts = () => {
    return this.props.data.map((product, key) => (
      <div key={key}>
        <p>hi {product.title}</p>
      </div>
    ));
  };

  render() {
    console.log(this.props);
    return <div className="test">{this._renderProducts()}</div>;
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import Images from '../data/black-strat.jpg';

export default class ProductsWrapper extends Component {
  static propTypes = {
    productDetails: PropTypes.object,
  };

  _createImage = image => {
    return <img src={require('../data/' + image)} />;
  };

  render() {
    return (
      <div className="product">
        {this._createImage(this.props.productDetails.spec.image)}
        <p>
          {this.props.productDetails.make} {this.props.productDetails.model}
        </p>
      </div>
    );
  }
}

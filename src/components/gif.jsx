/* eslint jsx-a11y/click-events-have-key-events: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { selectGifFn, id } = this.props;

    if (selectGifFn) {
      selectGifFn(id);
    }
  }

  render() {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/giphy.gif`;

    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;

import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: '3o7aCYDNm1kXgSUgXm'
    };
  }

  search = (query) => {
    giphy('BtgRxCyN0xxYN6YMFYHBkqPRygmPBhC4')
      .search({
        q: query,
        rating: 'g'
      }, (error, result) => {
        this.setState({ gifs: result.data });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { selectedGifId, gifs } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFn={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGifFn={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;

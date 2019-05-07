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

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFn={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

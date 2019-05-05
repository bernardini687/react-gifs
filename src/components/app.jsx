import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearcBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "3o7aCYDNm1kXgSUgXm"
    };
  }

  search = (query) => {
    giphy('BtgRxCyN0xxYN6YMFYHBkqPRygmPBhC4');
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearcBar />
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

// const App = () => {
//   return (
//     <div>
//       <div className="left-scene" />
//       <div className="right-scene" />
//     </div>
//   );
// };

export default App;

import React, { Component } from 'react';

import SearcBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      { id: "quQijRpxpy7UQ" },
      { id: "3o7aCYDNm1kXgSUgXm" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearcBar />
          <div className="selected-gif">
            <Gif id="quQijRpxpy7UQ" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
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

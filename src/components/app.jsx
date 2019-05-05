import React, { Component } from 'react';

import SearcBar from './search_bar';
import Gif from './gif';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearcBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className="right-scene"></div>
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

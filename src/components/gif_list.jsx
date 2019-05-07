import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const { gifs, selectGif } = props;
  return (
    <div className="gif-list">
      {gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />)}
    </div>
  );
};

export default GifList;

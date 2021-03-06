import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectGifFn }) => {
  return (
    <div className="gif-list">
      {gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGifFn={selectGifFn} />)}
    </div>
  );
};

export default GifList;

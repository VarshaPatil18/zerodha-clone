import React from 'react';
import { watchlistData } from '../data/data';

function WatchList() {
  return (
    <div className="watchlist">
      <h2>Watchlist</h2>
      <ul>
        {watchlistData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default WatchList;
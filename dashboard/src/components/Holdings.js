import React from 'react';
import { holdingsData } from '../data/data';

function Holdings() {
  return (
    <div className="holdings">
      <h2>Holdings</h2>
      <ul>
        {holdingsData.map((item, index) => (
          <li key={index}>
            {item.symbol}: {item.quantity} @ {item.avgPrice} (Current: {item.currentPrice})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Holdings;
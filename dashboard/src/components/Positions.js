import React from 'react';
import { positionsData } from '../data/data';

function Positions() {
  return (
    <div className="positions">
      <h2>Positions</h2>
      <ul>
        {positionsData.map((item, index) => (
          <li key={index}>
            {item.symbol}: {item.quantity} @ {item.entryPrice} (Current: {item.currentPrice})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Positions;
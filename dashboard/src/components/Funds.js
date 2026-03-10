import React from 'react';
import { fundsData } from '../data/data';

function Funds() {
  return (
    <div className="funds">
      <h2>Funds</h2>
      <p>Available: {fundsData.available}</p>
      <p>Used: {fundsData.used}</p>
    </div>
  );
}

export default Funds;
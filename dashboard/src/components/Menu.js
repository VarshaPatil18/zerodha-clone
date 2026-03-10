import React from 'react';

function Menu({ setActiveView }) {
  return (
    <div className="menu">
      <button onClick={() => setActiveView('home')}>Home</button>
      <button onClick={() => setActiveView('holdings')}>Holdings</button>
      <button onClick={() => setActiveView('positions')}>Positions</button>
      <button onClick={() => setActiveView('funds')}>Funds</button>
      <button onClick={() => setActiveView('watchlist')}>Watchlist</button>
      <button onClick={() => setActiveView('orders')}>Orders</button>
      <button onClick={() => setActiveView('summary')}>Summary</button>
    </div>
  );
}

export default Menu;
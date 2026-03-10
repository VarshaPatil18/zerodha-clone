import React, { useState } from 'react';
import TopBar from './TopBar';
import Menu from './Menu';
import Home from './Home';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import WatchList from './WatchList';
import Orders from './Orders';
import Summary from './Summary';

function Dashboard() {
  const [activeView, setActiveView] = useState('home');

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <Home />;
      case 'holdings':
        return <Holdings />;
      case 'positions':
        return <Positions />;
      case 'funds':
        return <Funds />;
      case 'watchlist':
        return <WatchList />;
      case 'orders':
        return <Orders />;
      case 'summary':
        return <Summary />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard">
      <TopBar />
      <div className="dashboard-body">
        <Menu setActiveView={setActiveView} />
        <div className="content">
          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
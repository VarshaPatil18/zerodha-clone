import React from 'react';
import DoughnutChart from './DoughnutChart';
import VerticalGraph from './VerticalGraph';

function Home() {
  return (
    <div className="home">
      <h2>Dashboard Home</h2>
      <DoughnutChart />
      <VerticalGraph />
    </div>
  );
}

export default Home;
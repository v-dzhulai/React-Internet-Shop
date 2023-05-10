import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GoodsPage from './components/GoodsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <GoodsPage />
    </div>
  );
}

export default App;

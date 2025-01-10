import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="app">
      
      {/* Header */}
      <Header/>

      {/* App Body */}
      <div className='app__body'>
        <SideBar />
      </div>
        {/* Feed */}
        {/* Widgets */}

    </div>
  );
}

export default App;

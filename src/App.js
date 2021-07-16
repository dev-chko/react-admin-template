import React from 'react';
import HeaderBar from './components/HeaderBar';
import SideBar from './components/SideNavi'
import './App.css';

export default function App() {

  return (
    <div >
      <HeaderBar />
      <SideBar />
      <div style={{ display: 'flex' }}>
      </div>
    </div>
  )
}

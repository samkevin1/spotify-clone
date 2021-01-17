import React from 'react';

import SideBar from '../../Components/Player/Sidebar';
import Body from '../../Components/Player/Body';
import Footer from '../../Components/Player/Footer';
import './index.css';

const Player = ({ spotify }) => {
  return (
    <div className='player'>
      <div className='player_body'>
        <SideBar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
};

export default Player;

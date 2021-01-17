import React from 'react';
import './index.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateProviderValue } from '../../Contexts/StateProvider';

const Header = () => {

  const [{ user }, dispatch] = useStateProviderValue();

  return (
    <div className='header'>
      <div className='header_left'>
        <SearchIcon />
        <input 
          placeholder='Search for Artists, Songs or Playlists'
          type='text'
        />
      </div>
      <div className='header_right'>
        <Avatar src={user?.images[0]?.url} alt='SS' />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;

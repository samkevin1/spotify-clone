import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import './index.css';
import SidebarOption from  '../../SidebarOptions/';
import { useStateProviderValue } from '../../../Contexts/StateProvider';

const SideBar = () => {

  const [{ playlists }, dispatch] = useStateProviderValue();

  return (
    <div className='sidebar'>
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title='Home'/>
      <SidebarOption Icon={SearchIcon} title='Search'/>
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library'/>

      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name}/>
      ))}
    </div>
  );
};

export default SideBar;

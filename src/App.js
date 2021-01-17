import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';
import Login from './Pages/Login';
import Player from './Pages/Player';
import { getTokenFromUrl } from './Services/spotify';
import { useStateProviderValue } from './Contexts/StateProvider';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token, playlists, discover_weekly }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    //Clean the url
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });

      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      });

      spotify.getPlaylist('37i9dQZEVXcHhRfCHE2bZw').then(response => 
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );
    }
  }, []);
  
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;

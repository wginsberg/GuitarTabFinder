import React from 'react';
import classnames from 'classnames';
import classes from './Tab.module.css';

import spotifyLogo from '../assets/spotify.png';
import ultimateGuitarLogo from '../assets/ultimate-guitar.png';

const Tab = ({ track }) => {
  const title = track.name;
  const artist = track.artists[0].name;
  const imageURL = track.album.images[0].url;

  const spotifyUrl = track.external_urls.spotify;

  const ultimateGuitarQuery = `${title} ${artist}`;
  const ultimateGuitarUrl = `https://www.ultimate-guitar.com/search.php?search_type=title&value=${encodeURIComponent(ultimateGuitarQuery)}`;

  return (
    <div className={classnames([classes.Tab, 'relative max-w-sm rounded overflow-hidden shadow-lg m-4'])}>
      <img alt="" src={imageURL} className="w-full" />
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="font-light text-xl mb-2">{artist}</div>
      <div className="absolute top-0 right-0 flex m-2">
        <a href={spotifyUrl} target="_bank" className={classnames(['bg-black rounded', classes.ExternalLink])}>
          <img alt="Play on Spotify" src={spotifyLogo} />
        </a>
        <a href={ultimateGuitarUrl} target="_bank" className={classnames(['bg-black rounded', classes.ExternalLink])}>
          <img alt="Search for ultimate-guitar.com tabs" src={ultimateGuitarLogo} />
        </a>
      </div>
    </div>
  );
};

export default Tab;

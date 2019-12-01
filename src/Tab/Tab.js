import React from 'react';
import classnames from 'classnames';
import classes from './Tab.module.css';

import spotifyLogo from '../assets/spotify.png';
import ultimateGuitarLogo from '../assets/ultimate-guitar.png';
import { ReactComponent as SongsterrLogo } from '../assets/songsterr.svg';

const Tab = ({ track }) => {
  const title = track.name;
  const artist = track.artists[0].name;
  const siteName = 'Songsterr';
  const imageURL = track.album.images[0].url;

  const spotifyUrl = track.external_urls.spotify;

  const ultimateGuitarQuery = `site:ultimate-guitar.com ${title} ${artist}`;
  const ultimateGuitarUrl = `https://google.com/search?q=${encodeURIComponent(ultimateGuitarQuery)}`;

  const songsterrBaseUrl = 'http://www.songsterr.com/a/wa/bestMatchForQueryString';
  const songsterrUrl = `${songsterrBaseUrl}?s=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;

  return (
    <div className={classnames([classes.Tab, 'relative max-w-sm rounded overflow-hidden shadow-lg m-4'])}>
      <img alt={siteName} src={imageURL} className="w-full" />
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="font-light text-xl mb-2">{artist}</div>
      <div className="absolute top-0 right-0 flex m-2">
        <a href={spotifyUrl} target="_bank" className={classnames(['bg-black rounded', classes.ExternalLink])}>
          <img alt="Play on Spotify" src={spotifyLogo} />
        </a>
        <a href={ultimateGuitarUrl} target="_bank" className={classnames(['bg-black rounded', classes.ExternalLink])}>
          <img alt="Search for ultimate-guitar.com tabs" src={ultimateGuitarLogo} />
        </a>
        <a href={songsterrUrl} target="_bank" className={classnames(['bg-black rounded', classes.ExternalLink])}>
          <SongsterrLogo />
        </a>
      </div>
    </div>
  );
};

export default Tab;

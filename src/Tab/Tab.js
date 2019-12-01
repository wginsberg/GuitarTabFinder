import React from 'react';
import classnames from 'classnames';
import classes from './Tab.module.css';

const Tab = ({ track }) => {
  const title = track.name;
  const artist = track.artists[0].name;
  const baseUrl = 'http://www.songsterr.com/a/wa/bestMatchForQueryString';
  const url = `${baseUrl}?s=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;
  const siteName = 'Songsterr';
  const imageURL = track.album.images[0].url;

  return (
    <div className={classnames([classes.Tab, 'max-w-sm rounded overflow-hidden shadow-lg m-4'])}>
      <a href={url} target="_bank">
        <img alt={siteName} src={imageURL} className="w-full" />
      </a>
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="font-light text-xl mb-2">{artist}</div>
    </div>
  );
};

export default Tab;

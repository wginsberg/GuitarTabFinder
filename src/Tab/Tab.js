import React from 'react';
import classnames from 'classnames';
import classes from './Tab.module.css';

const Tab = ({ track }) => {
  const title = track.name;
  const artist = track.artists[0].name;
  const imageURL = track.album.images[0].url;

  const ultimateGuitarQuery = `${title} ${artist}`;
  const ultimateGuitarUrl = `https://www.ultimate-guitar.com/search.php?search_type=title&value=${encodeURIComponent(ultimateGuitarQuery)}`;

  const anchorClass = classnames([classes.Tab, 'relative max-w-sm rounded overflow-hidden shadow-lg m-4']);

  return (
    <a href={ultimateGuitarUrl} target="_bank" className={anchorClass}>
      <img alt="" src={imageURL} className="w-full" />
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="font-light text-xl mb-2">{artist}</div>
    </a>
  );
};

export default Tab;

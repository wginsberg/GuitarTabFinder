import React from 'react';
import classes from './App.module.css';

import SpotifyApiService from './SpotifyApiService';

import Tab from './Tab/Tab';

const SPOTIFY_RECENT = 'SPOTIFY_RECENT';
const SPOTIFY_TOP = 'SPOTIFY_TOP';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: SPOTIFY_TOP,
      items: [],
      page: 0
    };
  }

  loadNextPage = () => {
    // Test mode
    if (this.props.state) {
      return;
    }
    else {
      if (!this.spotifyApiService) {
        this.spotifyApiService = new SpotifyApiService();
      }
      this.spotifyApiService
        .topTracks(this.state.page)
        .then(response => 
          this.setState(state => 
            ({ 
              page: state.page + 1, 
              items: [...state.items, ...response.data.items]
            })
            )
        )
    }
  }

  componentDidMount() {
    // Test mode
    if (this.props.state) {
      this.setState(this.props.state);
    } else {
      this.loadNextPage();
    }
  }

  componentDidUpdate(oldProps, oldState) {
    if (this.state.mode !== oldState.mode) {
      this.loadNextPage();
    }
  }

  changeMode = mode => {
    this.setState({ mode, items: [] });
  }

  render() {

    return (
      <div>
        <select 
          value={this.state.mode} 
          onChange={e => this.changeMode(e.target.value)} 
          className="mt-8"
        >
          <option value={SPOTIFY_RECENT}>Your recently listened to Spotify songs</option>
          <option value={SPOTIFY_TOP}>Your most listened to Spotify songs</option>
        </select>
        <div className={classes.TabList}>
          {this.state.items.map((track, i) => (<Tab key={i} track={track} />))}
        </div>
        <button onClick={this.loadNextPage} className="m-8">Load more</button>
      </div>
    );
  }
}

export default App;

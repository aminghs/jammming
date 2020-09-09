import React from 'react';

import './App.css';
import '../SearchBar/SearchBar'
import '../SearchResults/SearchResults'
import '../Playlist/Playlist'

class App extends React.Component {

  constructor(props) {
    super(props)
  }
    render() {
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResult />
      <Playlist />
    </div>
  </div>
</div>
  );
}
}
export default App;

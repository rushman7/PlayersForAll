import React, { Component } from 'react';
import PostFeed from './components/PostFeed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            PlayersForAll
        </header>
        <PostFeed />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import data from './data';
import PostFeed from './components/PostFeed';

class App extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            _
        </header>
        <PostFeed data={this.state.data} today={this.state.today}/>
      </div>
    );
  }
}

export default App;

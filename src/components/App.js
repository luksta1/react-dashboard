import React, { Component } from 'react';
import TaskCard from './TaskCard'

class App extends Component {
  render() {
    return (
      <div className="dashboard">
        <TaskCard />
      </div>
    );
  }
}

export default App;

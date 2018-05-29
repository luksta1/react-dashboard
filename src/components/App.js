import React, { Component } from 'react';
import { overview } from '../js/data.js'
import TaskCard from './TaskCard'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      overview: { ...overview }
    }
  }

  render() {
    console.log(this.state.overview)
    const tasks = Object.keys(this.state.overview);

    return (
      <div className="dashboard">
        {
          tasks.map(elem => {
            let task = this.state.overview[elem]
            return (
              <TaskCard key={task.taskName} task={task} />
            )
          })}
      </div>
    );
  }
}

export default App;

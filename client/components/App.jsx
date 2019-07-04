import React from 'react'

import Cheer from './Cheer'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Happy Birthday Mikey!",
      count: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // Hey React, please change state
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>{this.state.count} cheers!</p>
        <Cheer handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App

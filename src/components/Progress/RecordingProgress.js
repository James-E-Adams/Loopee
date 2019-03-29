import React from 'react'

import BaseProgress from './BaseProgress'

class TrackProgress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: 0,
    }
  }
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          currentTime: new Date() - this.props.startTime,
        }),
      30 //Lol great hack but probably a more performant way to do this.
    )
  }
  render() {
    return (
      <BaseProgress
        className="bg-red"
        currentTime={console.tapLog(this.state.currentTime)}
        duration={this.props.duration}
      />
    )
  }
}

export default TrackProgress

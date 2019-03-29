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
          currentTime: this.props.audio.currentTime,
        }),
      30 //Lol great hack but probably a more performant way to do this.
    )
  }
  render() {
    return (
      <BaseProgress
        className="bg-black"
        currentTime={this.state.currentTime}
        duration={this.props.audio.duration}
      />
    )
  }
}

export default TrackProgress

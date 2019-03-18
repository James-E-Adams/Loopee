import React from "react";

class TrackProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0
    };
  }
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          currentTime: this.props.audio.currentTime
        }),
      30 //Lol great hack but probably a more performant way to do this.
    );
  }
  render() {
    return (
      <div
        style={{
          width: `${(this.state.currentTime / this.props.audio.duration) *
            100}%`
        }}
        className="bg-black h-full"
      />
    );
  }
}

export default TrackProgress;

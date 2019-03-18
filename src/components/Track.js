import React from "react";

import recordAudio from "../utils/recordAudio";
import Controls from "./Controls";
import TrackProgress from "./TrackProgress";
class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recorder: null
    };
  }

  componentDidMount() {
    //Initialise the audio recorder
    recordAudio().then(recorder =>
      this.setState({
        recorder
      })
    );
  }

  startRecording() {
    this.setState({ recording: true });
    this.state.recorder.start();
  }

  stopRecording() {
    this.setState({ recording: false });
    this.state.recorder.stop().then(({ audioUrl }) => {
      // this.setState({ audio }
      const audio = new Audio(audioUrl);
      audio.loop = true;
      // debugger;
      this.setState({
        audio
      });
    });
  }

  playRecording() {
    this.setState({ isPlaying: true });
    this.state.audio.play();
  }
  stopPlayingRecording() {
    this.setState({ isPlaying: false });
    this.state.audio.pause();
  }

  render() {
    return (
      <div className="border border-black flex">
        {this.state.recorder && (
          <Controls
            isPlaying={this.state.isPlaying}
            audio={this.state.audio}
            className="w-1/5 border-r-2 border-black"
            currentlyRecording={this.state.recording}
            startRecording={this.startRecording.bind(this)}
            stopRecording={() => this.stopRecording()}
            playRecording={this.playRecording.bind(this)}
            stopPlayingRecording={this.stopPlayingRecording.bind(this)}
          />
        )}
        <div className="w-4/5">
          {this.state.audio && (
            <TrackProgress
              // audio={{
              //   currentTime: 5,
              //   duration: 15
              // }}
              audio={this.state.audio}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Track;

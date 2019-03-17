import React from "react";
import {
  faPlayCircle,
  faPauseCircle,
  faMicrophoneAlt,
  faStopCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import recordAudio from "../utils/recordAudio";

const buttonStyle = {
  borderRadius: "100%",
  height: 100,
  width: 100
};
class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recorder: null
    };
    // this.startRecording = this.startRecording.bind(this);
    // this.stopRecording = this.stopRecording.bind(this);
    // this.playRecording = this.playRecording.bind(this);
  }

  componentDidMount() {
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
    this.state.recorder.stop().then(audio => this.setState({ audio }));
  }

  playRecording() {
    this.setState({ isPlaying: true });
    this.state.audio.play();
  }
  stopPlayingRecording() {
    // this.state.audio.play();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.recorder &&
            (!this.state.recording ? (
              <button
                style={{ ...buttonStyle, marginBottom: 50 }}
                onClick={() => this.startRecording()}
              >
                <FontAwesomeIcon
                  icon={faMicrophoneAlt}
                  style={{ width: "90%", height: "90%" }}
                />
              </button>
            ) : (
              <button
                style={{ ...buttonStyle, marginBottom: 50 }}
                onClick={() => this.stopRecording()}
              >
                <FontAwesomeIcon
                  icon={faStopCircle}
                  style={{ width: "100%", height: "100%" }}
                />
              </button>
            ))}
        </div>
        <div>
          {this.state.audio && (
            <div style={{ display: "flex" }}>
              <button
                style={{ ...buttonStyle, marginRight: 10 }}
                onClick={() =>
                  this.state.isPlaying
                    ? this.stopPlayingRecording()
                    : this.playRecording()
                }
              >
                <FontAwesomeIcon
                  icon={this.state.isPlaying ? faPauseCircle : faPlayCircle}
                  style={{ width: "90%", height: "90%" }}
                />
              </button>
              <div> Duration {this.state.audio.duration}. Looping enabled</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Audio;

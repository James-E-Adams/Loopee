import React from 'react'

import Controls from './Controls'
import recordAudio from '../utils/recordAudio'
import TrackProgress from './Progress/TrackProgress'
import RecordingProgress from './Progress/RecordingProgress'
import withClassName from '../utils/withClassName'

const RECORDING_LENGTH = 3000

class Track extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      audio: null,
      recorder: null,
      recording: false,
      recordingStartTime: null,
    }
  }

  componentDidMount() {
    //Initialise the audio recorder
    recordAudio().then((recorder) =>
      this.setState({
        recorder,
      })
    )
  }

  componentDidUpdate(prevProps) {
    if (!this.state.audio) return
    if (!prevProps.isPlaying && this.props.isPlaying) {
      this.playRecording()
    } else if (prevProps.isPlaying && !this.props.isPlaying) {
      this.stopPlayingRecording()
      this.state.audio.currentTime = 0 //I know, I know
    }
  }

  startRecording() {
    if (this.props.isPlaying) this.props.setIsPlaying(false)
    this.props.setIsPlaying(true)
    this.setState({ recording: true, recordingStartTime: new Date() })
    this.state.recorder.start()
    setTimeout(this.stopRecording.bind(this), RECORDING_LENGTH)
  }

  stopRecording() {
    this.setState({ recording: false })
    this.state.recorder.stop().then(({ audioUrl }) => {
      const audio = new Audio(audioUrl)
      audio.loop = true
      this.setState({
        audio,
      })
      this.playRecording()
    })
  }

  playRecording() {
    this.setState({ isPlaying: true })
    this.state.audio.play()
  }
  stopPlayingRecording() {
    this.setState({ isPlaying: false })
    this.state.audio.pause()
  }

  render() {
    return (
      <div className={this.props.className}>
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
          {this.state.audio ? (
            <TrackProgress audio={this.state.audio} />
          ) : this.state.recording ? (
            <RecordingProgress
              startTime={this.state.recordingStartTime}
              duration={RECORDING_LENGTH}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

const className = ({ isFirst }) => [
  isFirst && 'border-t',
  'border-l border-r border-b border-black flex',
]

export default withClassName(className)(Track)

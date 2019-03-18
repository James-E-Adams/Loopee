import React from "react";
import compose from "recompose/compose";
import {
  faPlayCircle,
  faPauseCircle,
  faMicrophoneAlt,
  faStopCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withClassName from "../utils/withClassName";

const Controls = ({
  audio,
  currentlyRecording,
  startRecording,
  className,
  isPlaying,
  stopPlayingRecording,
  playRecording,
  stopRecording,
  ...props
}) => (
  <div className={className}>
    {!currentlyRecording ? (
      <button className="rounded-full mb-3 w-12 h-12 " onClick={startRecording}>
        <FontAwesomeIcon
          icon={faMicrophoneAlt}
          style={{ width: "90%", height: "90%" }}
        />
      </button>
    ) : (
      <button className="rounded-full mb-3 w-12 h-12" onClick={stopRecording}>
        <FontAwesomeIcon
          icon={faStopCircle}
          style={{ width: "100%", height: "100%" }}
        />
      </button>
    )}

    <div>
      {audio && (
        <div className="flex">
          <button
            className="rounded-full mr3 w-12 h-12"
            onClick={isPlaying ? stopPlayingRecording : playRecording}
          >
            <FontAwesomeIcon
              icon={isPlaying ? faPauseCircle : faPlayCircle}
              style={{ width: "90%", height: "90%" }}
            />
          </button>
          {/* <div> Duration {audio.duration}. Looping enabled</div> */}
        </div>
      )}
    </div>
  </div>
);

export default withClassName("pt-2 flex")(Controls);

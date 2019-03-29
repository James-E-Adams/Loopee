import React from 'react'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import withClassName from '../utils/withClassName'

const Controls = ({ isPlaying, className, setIsPlaying, ...props }) => (
  <div className="flex items-center w-full justify-center mb-5">
    <button
      className="rounded-full mr3 w-12 h-12"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <FontAwesomeIcon
        icon={isPlaying ? faPauseCircle : faPlayCircle}
        style={{ width: '90%', height: '90%' }}
      />
    </button>
  </div>
)

export default Controls

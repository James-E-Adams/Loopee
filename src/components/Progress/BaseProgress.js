import React from 'react'

import withClassName from '../../utils/withClassName'

const BaseProgress = ({ currentTime, duration, ...props }) => (
  <div
    style={{
      width: `${(currentTime / duration) * 100}%`,
    }}
    {...props}
  />
)

export default withClassName('h-full')(BaseProgress)

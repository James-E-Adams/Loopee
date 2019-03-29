import React from 'react'
import compose from 'recompose/compose'
import Track from './Track'

const Looper = ({ ...props }) => (
  <div>
    <Track isFirst {...props} />
    <Track {...props} />
    <Track {...props} />
    <Track {...props} />
    <Track {...props} />
    <Track {...props} />
    <Track {...props} />
    <Track {...props} />
    <Track {...props} />
  </div>
)

export default compose()(Looper)

import React from 'react'
import withState from 'recompose/withState'

import Header from './components/Header'
import Footer from './components/Footer'
import Looper from './components/Looper'
import GlobalControls from './components/GlobalControls'
const App = ({ isPlaying, setIsPlaying }) => (
  <div className="flex flex-col min-h-screen bg-yellow-dark">
    <Header />
    <div className="mt-3" style={{ minHeight: '70vh' }}>
      <Looper isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
    <GlobalControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    <Footer />
  </div>
)

export default withState('isPlaying', 'setIsPlaying', false)(App)

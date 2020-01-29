import React, { Component } from 'react'
import './BackgroundVideo.scss'

class BackgroundVideo extends Component {
  render() {
    return (
      <section className="bg-video">
        <div className="bg-video-wrap">
          <div className="video-overlay"></div>
          <video className="video" src={require('./../../assets/video/video.mp4')} autoPlay loop muted preload="auto" />
        </div>
      </section>
    )
  }
}

export default BackgroundVideo;
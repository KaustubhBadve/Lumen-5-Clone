import React, { useState } from 'react'
import LoadingafterTemplate from '../Template Selection/loadingafterTemplate'
import VideoConversion from './VideoConversion'

const VideoConversionCombine = () => {
    const [loading, setloading] = useState(true)

    setTimeout(() => {
        setloading(false)
      }, "1000")

  return (
    <div>{loading ? <LoadingafterTemplate/> : <VideoConversion/>}</div>
  )
}

export default VideoConversionCombine
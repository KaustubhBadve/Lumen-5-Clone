import React, { useState } from 'react'
import ImagesAfterConversion from './ImagesAfterConversion'
import Loading1 from './Loading1'

const CombineAfterImgandLoading = () => {
    const [loading, setloading] = useState(true)

    setTimeout(() => {
      setloading(false)
    }, "5000")


  return (
    <div>
     {loading ? <Loading1/> :<ImagesAfterConversion/>}
    </div>
  )
}

export default CombineAfterImgandLoading
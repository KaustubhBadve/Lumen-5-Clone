import React, { useState } from 'react'
import FilledBox from './FilledBox'
import Loading from './Loading'

const FilledboxCombine = () => {
    const [loading, setloading] = useState(true)

    setTimeout(() => {
        setloading(false)
      }, "5000")
  return (
    <div>{loading ? <Loading/> : <FilledBox/>}</div>
  )
}

export default FilledboxCombine
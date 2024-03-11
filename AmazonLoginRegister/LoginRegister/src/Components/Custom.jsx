import React from 'react'

const Custom = ({email,...props}) => {
  return (
    <div>
        <label>{email}</label>
    </div>
  )
}

export default Custom
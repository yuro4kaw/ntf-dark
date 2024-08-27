import React from 'react'

const Counter = (props) => {
  return (
    <div className='counter'>
        <p className='value'>{props.value}</p>
        <p className='description'>{props.description}</p>
    </div>
  )
}

export default Counter
import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={'mx-auto px-4 py-2 max-w-7xl ' + className}>
        {children}
    </div>
  )
}

export default Container
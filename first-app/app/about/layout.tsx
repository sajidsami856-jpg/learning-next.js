import React from 'react'

function layout({children}: {children:React.ReactNode}) {
  return (
    <>
          <h1>hello this is about layout</h1>
          {children}
      </>
  )
}

export default layout
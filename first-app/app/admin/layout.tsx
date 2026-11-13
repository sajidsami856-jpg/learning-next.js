import React from 'react'

function layout({children}: {children:React.ReactNode}) {
  return (
<>
        {children}
        <div>admin layout</div>
</>
  )
}

export default layout
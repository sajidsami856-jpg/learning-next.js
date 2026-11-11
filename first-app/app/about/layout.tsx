import React from 'react'

function layout({children}: {children:React.ReactNode}) {
  return (
    <html>
        <body>
            <h1>hello this is about layout</h1>
            {children}
        </body>
    </html>
  )
}

export default layout
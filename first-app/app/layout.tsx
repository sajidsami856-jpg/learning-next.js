// import { Children } from "react";

export default function RootLayout({children} : {children: React.ReactNode}){
  return (
    <html>
      
      <body><h1>hello layout</h1>
        {children}
      </body>
    </html>
  )
}
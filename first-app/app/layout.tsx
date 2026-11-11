// import { Children } from "react";
import Navigation from "../Components/Navigation";

export default function RootLayout({children} : {children: React.ReactNode}){
  return (
    <html>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
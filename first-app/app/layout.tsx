import React from 'react'
import "./globals.css";
import {Roboto, Work_Sans} from "next/font/google";

const roboto=Roboto({
  subsets:["latin"],
  variable:"--font-roboto-sans",
})

const workSans=Work_Sans({
  subsets:["latin"],
  variable:"--font-work-sans",
})

function layout({children}:{ children: React.ReactNode }) {
  return (
    <html lang='en'>
        <body className={`${roboto.variable} ${workSans.variable}`}>
            {children}
        </body>
    </html>
  )
}

export default layout
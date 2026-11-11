import React from 'react'
import  Link  from 'next/link';

function Navigation() {
  return (
    <header>
        <div className=''>Navigation</div>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/survice">Survice</Link></li>
                <li><Link href="/about">about</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation;
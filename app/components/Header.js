import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import UserContext from './UserContext'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'


export default function Header(){
  const user = useContext(UserContext) 
  return (
    <header className="xl:container xl:mx-auto flex flex-col items center sm:flex-row sm:justify-between">
      <Link href={`/index`} className="flex-grow flex items-center">
        <Image src="/adaltas.svg" className='cursor-pointer h-6 mr-5' alt="home Logo" width={25} height={25} />
        <span className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          Webtech-Project
        </span>
      </Link>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <ul className="flex gap-5">
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/articles">
            Articles
          </Link>
        </li>
        
        <li className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
          {user ? <LoggedIn /> : <LoggedOut />}
        </li>
        
      </ul>
    </header>
  )
}


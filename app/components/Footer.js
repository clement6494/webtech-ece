import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'




export default function Footer(){
  
  return (
    <footer className="xl:container xl:mx-auto flex flex-col items center sm:flex-row sm:justify-between">
      
      <ul className="flex gap-5">
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/Terms">
            Terms
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/About">
            About us
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/Contact">
            Contact us
          </Link>
        </li>
        
      </ul>
    </footer>
  )
}
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { supabase } from '../api'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App

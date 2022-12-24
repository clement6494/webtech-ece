import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'

const inter = Inter({ subsets: ['latin'] })



const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div>
      <Header></Header>

      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        {!session ? (
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
        ) : (
          <Account session={session} />
        )}
      </div>
    </div>
  )
}

export default Home
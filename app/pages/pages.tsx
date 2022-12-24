
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'


export default function pages() {

  return (
    <div>
      <Header></Header>

      

      <Footer></Footer>
    </div>
  )

}
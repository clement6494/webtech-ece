import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Layout({children})
{
    return (
      <div>
        <Head> <title> webtech project</title></Head>
        <Header></Header>
        <main className="py-10 min-h-screen max-w-full md:max-w-2xl md:mx-auto">
        {children}
        </main>
        <Footer></Footer>
      </div>
    )
  }
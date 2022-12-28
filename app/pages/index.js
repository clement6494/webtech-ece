import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'


//sections
import Section1 from '../components/post.js'


export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Web technologies blogging application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        Welcome to <a href="https://www.adaltas.com">web technologies!</a>
      </h1>
      <Section1></Section1>
    </Layout>
  )
}

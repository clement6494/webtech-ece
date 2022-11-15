import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Layout from '../components/Layout.js'

export default function Contacts() {
  const supabase = useSupabaseClient()
  const [message, setMessage] = useState(null)
  const onSubmit = async function(e){
    e.preventDefault()
    // Insert contact record into the contacts database
    // Print a friendly confirmation message
  }
  return (
    <Layout>
      <Head>
        <title>WebTech - contact us</title>
        <meta name="description" content="Don't be shy, drop us an email" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        Contact
      </h1>
      <form className="[&_span]:block grid gap-3" onSubmit={onSubmit}>
        <div>
          <label>
            <span>First name</span>
            <input type="text" name="firstname" />
          </label>
        </div>
        <div>
          <label>
            <span>Last name</span>
            <input type="text" name="lastname" />
          </label>
        </div>
        <div>
          <label>
            <span>Email</span>
            <input type="text" name="email" />
          </label>
        </div>
        <div>
          <label>
            <span>Message</span>
            <textarea name="message" />
          </label>
        </div>
        <div>
          <button
            className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
          >
            Send
          </button>
        </div>
      </form>
      {message &&
        <div
          aria-label="Overlow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {message}
          </div>
        </div>
      }
    </Layout>
  )
}

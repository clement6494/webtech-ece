import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import "easymde/dist/easymde.min.css"
import { supabase } from '../../api'

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })

function EditPost() {
  const [post, setPost] = useState(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    fetchPost()
    async function fetchPost() {
      if (!id) return
      const { data } = await supabase
        .from('posts')
        .select()
        .filter('id', 'eq', id)
        .single()
      setPost(data)
    }
  }, [id])
  if (!post) return null
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }))
  }
  const { title, content } = post
  async function updateCurrentPost() {
    if (!title || !content) return
    await supabase
      .from('posts')
      .update([
          { title, content }
      ])
      .match({ id })
    router.push('/my-posts')
  }
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-wide mt-5 mb-2">Edit post</h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-400 placeholder-gray-400 y-2"
      /> 
      <SimpleMDE value={post.content} onChange={value => setPost({ ...post, content: value })} />
      <button
        className="mb-4 font-bold text-white bg-green-600 px-8 py-2 rounded-lg"
        onClick={updateCurrentPost}>Update Post</button>
    </div>
  )
}

export default EditPost
import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"



export default function Section1() {

  const { data, isLoading, isError } = fetcher('api/posts')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>


  return (

    <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

            <h1 className="font-bold text-4xl pb-12 text-center">Latest articles</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                data.map((value, index) => (
                    <Post data={value} key={index}></Post>
                ))
            }
            </div>
      </div>
    </section>     
  )
            
}

function Post( { data } ){
  const { id, title, category, img, published, author } = data;
  return (
      <div className="item">
          <div className="images">
              <Link href={`/articles/${id}`}><Image src={img || "/"} className="rounded" width={500} height={350} /></Link>
          </div>
          <div className="info flex justify-center flex-col py-4">
              <div className="cat">
                  <Link href={`/articles/${id}`} className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</Link>
                  <Link href={`/articles/${id}`} className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</Link>
              </div>
              <div className="title">
                  <Link href={`/articles/${id}`} className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</Link>
              </div>
              <p className="text-gray-500 py-3">
                  Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                  text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
              </p>
              { author ? <Author {...author}></Author> : <></>}
          </div>
      </div>
  )
}


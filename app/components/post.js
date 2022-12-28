import Image from "next/image"
import Link from "next/link"

export async function getStaticProps() {
const { data } = await supabaseAdmin.from('images').select('*').order('id')
  return {
    props: {
      images: data,
    },
  }
}

/** failed to read correctly data correctly from database so we used const */



export default function  Post( { image } ){
  const id=1 ;
  const src='https://media.discordapp.net/attachments/1054536874120724561/1054552053348843530/CLEMENT_Paris_dieselpunk_neoclassical_architechture_72276e7c-b899-479d-80b0-7c6501fed911.png?width=696&height=696';
  const category = 'architecture' ;
  const date = '12/20/2022';
  const author = 'clement conchez';
  const title = 'The futur of urbanism in Paris';
  const article = 'thats a long story';
  return (
      <Link href={`/articles/${id}`}>
          <div className="images">
              <Image src={src || "/"} className="rounded" width={500} height={350} />
          </div>

          <div className="info flex justify-center flex-col py-4">
              <div className="cat">
                  <div className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</div>
                  <div className="text-gray-800 hover:text-gray-600">- {date || "Unknown"}</div>
              </div>
              <div className="title">
                  <div className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</div>
              </div>
              <p className="text-gray-500 py-3">
              <div className="text-xl text-gray-700 hover:text-gray-800">{article || "Title"}</div>
              </p>
              { author ? <p {...author}></p> : <></>}
          </div>
          </Link>
  )
}


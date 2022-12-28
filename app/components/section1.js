import Image from "next/image"
import Link from "next/link"




export default function section1() {

    const { data, isLoading, isError } = fetcher('api/trending')
    
    

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }

  return (
    <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

            

            
        </div>
    </section>
  )
}


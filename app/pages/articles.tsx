import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/articles.module.css'
export default function articles( {articles }) {
    return (<div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <h1> list of articles</h1>
            <ul>
                {articles.map((article) => (
                    <li>{article.title}</li>
                ))}
            </ul>

        </Head>

    </div>
    )
}
export async function getStaticProps(context) {
    const res = await fetch('https://.../articless')
    const posts = await res.json()
    return {
    props: {}, // will be passed to the page component as props


    }
}

export default articles
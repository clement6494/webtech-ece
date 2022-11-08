import Head from 'next/head'

import styles from '../styles/articles.module.css'
export default function list( {articles }) {
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
export async function getStaticProps() {
    const res = await fetch('https://.../articles')
    const articles = await res.json()
    return {
    props: {
        articles,
    }, // will be passed to the page component as props


    }
}

export default list

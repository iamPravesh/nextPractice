import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List|Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="ninja" />
      </Head>
      <div className="home">
        <h1 className={styles.container} >Home Page</h1>
      </div>
    </>
  )
}

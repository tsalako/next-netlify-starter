import Link from 'next/link'
import Head from 'next/head'
import Banner from '@components/Banner'
import Footer from '@components/Footer'

export default function FinalHint() {
  return (
    <div className="container">
      <Head>
          <title>Final Hint</title>
          <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Banner />
        <h1>My my, seems like you're quite the sleuth</h1>
        <h1>But we have one last directive for you</h1>
        <h2>Quick! Santa is delivering presents to The Tanners this Christmas.<br/>If you hurry you’ll find your yuletide treasure.</h2>
      </main>
      <Footer />
    </div>
  )
}

import Link from 'next/link'
import Head from 'next/head'
import Banner from '@components/Banner'
import Footer from '@components/Footer'

export default function FinalHint() {
  return (
    <div className="container">
      <Head>
          <title>Final Hint</title>
          <link rel="icon" href="/SSS.png" />
      </Head>
      <main>
        <Banner />
        <h1>Congrats! You've completed the scavenger hunt...</h1>
        <h1>Now for the final clue...</h1>
        <h2>Roses are red,<br/>Violets are blue,<br/>I dont know what should be here.<br/>Do you?</h2>
      </main>
      <Footer />
    </div>
  )
}

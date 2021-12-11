import Link from 'next/link'
import Head from 'next/head'
import Banner from '@components/Banner'
import Footer from '@components/Footer'
import 'bulma/css/bulma.min.css';

export default function FinalHint() {
  return (
    <div className="container">
      <Head>
          <title>Congrats!</title>
          <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Banner />
        <h2>My my, it seems like you're quite the sleuth<br/>But we have one last directive for you</h2>
        <br/>
        <div class="box">
          Quick! Santa is delivering presents to The Tanners this Christmas.<br/>If you hurry you’ll find your yuletide treasure.
        </div>
      </main>
      <Footer />
    </div>
  )
}

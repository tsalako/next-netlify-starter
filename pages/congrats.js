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
        <h2>My my, you're clearly quite the sleuth<br/>But we have one last directive for you</h2>
        <br/>
        <div class="box center">
          Quick! Santa is delivering presents to The Tanners.<br/>So hurry, run, push and shove, no need to mind your manners!
        </div>
      </main>
      <Footer />
    </div>
  )
}

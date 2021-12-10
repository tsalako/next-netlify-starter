import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Banner from '@components/Banner'
import HintForm from '@components/HintForm'
import { getHintsData } from '../lib/hints'

export async function getStaticProps() {
  const allHintData = getHintsData()
  return {
    props: {
      allHintData
    }
  }
}

export default function Home({ allHintData }) {
  return (
    <div className="container">
      <Head>
        <title>SSS '21</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Banner />
        <Header title="Scavenger Hunt" />
        <HintForm data={allHintData}/>
      </main>
      <Footer />
    </div>
  )
}

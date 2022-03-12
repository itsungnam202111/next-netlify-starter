import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>itsungnam202111</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="반갑습니다." />
        <p className="description">
          pages/index.js 파일을 수정하시기 바랍니다.
        </p>
      </main>

      <Footer />
    </div>
  )
}

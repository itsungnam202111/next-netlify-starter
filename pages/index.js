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
        <a href='ex01_vue3.html'>첫번째 예제</a> <br>
      </main>

      <Footer />
    </div>
  )
}

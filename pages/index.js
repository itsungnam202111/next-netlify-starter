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
	  </main>
        <a href='index01.html'>예제 01</a> <br/>
        <a href='index02.html'>예제 02</a> <br/>
        <a href='index03.html'>예제 03</a> <br/>
        <a href='index04.html'>예제 04</a> <br/>
        <a href='index05.html'>예제 05</a> <br/>
        <a href='index06.html'>예제 06</a> <br/>
        <a href='index07.html'>예제 07</a> <br/>
        <a href='index08.html'>예제 08</a> <br/>
        <a href='index09.html'>예제 09</a> <br/>
        <a href='index10.html'>예제 10</a> <br/>
        <a href='index11.html'>예제 11</a> <br/>
        <a href='index12.html'>예제 12</a> <br/>
        <a href='index13.html'>예제 13</a> <br/>
        <a href='index14.html'>예제 14</a> <br/>
        <a href='router01.html>라우터 예제 01</a> <br/>
        <a href='router02.html>라우터 예제 02</a> <br/>
        <a href='router03.html>라우터 예제 03</a> <br/>
	<Footer />
    </div>
  )
}

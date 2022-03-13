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
        <a href='ex01_vue3.html'>예제1</a> <br/>
        <a href='ex02_vue3.html'>예제2</a> <br/>
        <a href='ex03_vue3.html'>예제3</a> <br/>
        <a href='ex04_vue3.html'>예제4</a> <br/>
        <a href='ex05_vue3.html'>예제5</a> <br/>
        <a href='ex06_vue3.html'>예제6</a> <br/>
        <a href='ex07_vue3.html'>예제7</a> <br/>
        <a href='ex08_vue3.html'>예제8</a> <br/>

	  </main>
      
	  <Footer />
    </div>
  )
}

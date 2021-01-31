import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>일기장</title>
      </Head>
      <div>일기</div>
      <Link href="/diary"><a>일기 작성하기</a></Link>
    </>
  )
}

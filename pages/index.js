import Head from 'next/head';

import Link from 'next/link';

import Calendar from './components/Calendar';

import styled from 'styled-components';

const ATag = styled.a`
  border: none;
  &::before {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: -1;
    width: 100 %;
    height: 100 %;
    background: transparent;
    box-shadow: inset 0px 0px 0px #6098FF;
    display: block;
    transition: all 0.4s cubic - bezier(.5, .24, 0, 1);
  }
  &:hover::before {
    box-shadow: inset 300px 0px 0px #6098FF;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>일기장</title>
      </Head>
      <div>일기</div>
      <Link href="/"><ATag>달력</ATag></Link>
      <Link href="/newDiary"><ATag>일기 작성하기</ATag></Link>
      <Calendar />
    </>
  )
  // happy, soso , bad, melancholy,
  // 노란색, 회색, 빨간색, 파란색 #5442f5
}

import React from 'react';

import { withRouter } from 'next/router';

import { Editor, convertFromRaw } from 'draft-js';

import { useSelector } from 'react-redux';

import styled from 'styled-components';

const Detail = ({ router }) => {
  const { editorState } = useSelector((state) => ({
    editorState: state.editorState,
  }));

  console.log(`This is editor STATE : ${JSON.stringify(editorState)}`);

  const showingDiaryYear = router.query.year;
  const showingDiaryMonth = router.query.month;
  const showingDiaryDate = router.query.date;

  console.log(showingDiaryYear, showingDiaryMonth, showingDiaryDate, router.query.originDiary, router.query.fantasiaDiary)

  const originDiaryText = JSON.parse(editorState);

  console.log(originDiaryText);

  const originContentState = convertFromRaw(originDiaryText);
  const originEditorState = EditorState.createWithContent(originContentState);

  return (
    <ContentWrapper>
      <LeftBlockWrapper>
        <Header />
      </LeftBlockWrapper>
      <RightBlockWrapper>
        <div className='originalDiary_box'>
          <div className='originalDiary_title'>
            {showingDiaryYear}년 {showingDiaryMonth}월 {showingDiaryDate}일 현실 일기
            </div>
          <div className='originalDiary_text'>
            <Editor
              editorState={originEditorState}
              readOnly={true}
            />
          </div>
        </div>
      </RightBlockWrapper>
    </ContentWrapper>
  );
};

export default withRouter(Detail);
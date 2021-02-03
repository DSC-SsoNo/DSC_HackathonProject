import React, { useState } from 'react';

import { withRouter } from 'next/router';

import { EditorState, Editor, convertFromRaw } from 'draft-js';

import styled from 'styled-components';

const Detail = ({ router }) => {
  const [isShowingButtonClicked, setIsShowingButtonClicked] = useState(false);


  const showingDiaryYear = router.query.year;
  const showingDiaryMonth = router.query.month;
  const showingDiaryDate = router.query.date;

  console.log(showingDiaryYear, showingDiaryMonth, showingDiaryDate, router.query.originDiary, router.query.fantasiaDiary)

  // const originDiaryText = JSON.parse(router.query.originDiary);
  // const fantasiaDiaryText = JSON.parse(router.query.fantasiaDiary);

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
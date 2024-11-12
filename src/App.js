import './App.css';
/* eslint-disable */ 
import { useState } from 'react';

function App() {
  const INITIAL_TITLES = ['남자코트 추천', '강남 우동맛집', '파이썬 독학'];
  let [titles,setTitles] = useState(INITIAL_TITLES);
  let [like, setLike] = useState(0);

  const onChangeNm = () => {
    const newTitles = [...titles]; 
    console.log(newTitles === titles); // false
    // let test = titles;
    // console.log(test === titles); // true
    // array, object -> reference data type
    // spread문법이 아닌 직접적인 수정일 경우 변경된것이 없다 인식하여 재 렌더링을 하지 않는다.
    
    // spread문법
    // 1) 불변성 유지 -> React에서는 상태 변경 시 컴포넌트가 재렌더링 됨, 직접 수정 하게 되면 React는 변경사항을 감지하지 못할수 있음
    // 2) 안정성 -> 직접 수정 시 버그 발생률 줄임
    newTitles[0] = '여자코트 추천';
    setTitles(newTitles);
  }
  const sortKorean = () => {
    const sortTitles = [...titles];
    sortTitles.sort();
    setTitles(sortTitles);
  }
  const initKorean = () => {
    setTitles(INITIAL_TITLES);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
        <button onClick={sortKorean}>가나다순정렬</button>
        <button onClick={initKorean}>초기화</button>
        {titles.map((e, i) => {
          return(
            <div key={i} className='list'>
              <h4>
                {e}
                <span onClick={() => setLike(like++)}>Like</span>
                {like}
              </h4>
              {
                i === 0 &&
                <div onClick={() => onChangeNm()}>change</div>
              }
              <p>2월 17일 발행</p>
            </div>
          )
        })}
        <Modal/>
    </div>
  );
}

function Modal(){ // 대문자
  return(
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;

import React from 'react'
import { SuggestListProps } from '../types/suggest';
import { SuggestItem } from './SuggestItem';

export const SuggestList = ({ suggestList }: SuggestListProps) => {
  const suggestNoneStyle = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <ul className='suggestion-wrapper'>
      {suggestList.length === 0 && <p style={suggestNoneStyle}>추천 검색어 없음</p>}
      {suggestList.map((item, index) => <SuggestItem key={index} text={item} />)}
    </ul>
  )
};

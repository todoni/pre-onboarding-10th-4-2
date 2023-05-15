import React from 'react'
import { SuggestListProps } from '../types/suggest';
import { SuggestItem } from './SuggestItem';

export const SuggestList = ({ suggestList }: SuggestListProps) => {
  
  return (
    <ul className='suggestion-wrapper'>
      {suggestList.map((item, index) => <SuggestItem key={index} text={item} />)}
    </ul>
  )
};

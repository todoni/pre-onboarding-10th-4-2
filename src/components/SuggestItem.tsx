import React from 'react'
import { SuggestItemProps } from '../types/suggest'

export const SuggestItem = ({ text }: SuggestItemProps) => {
  return (
    <li className='suggest-item'>{text}</li>
  );
};

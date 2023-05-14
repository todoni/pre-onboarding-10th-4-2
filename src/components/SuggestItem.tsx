import React from 'react'
import { SuggestItemProps } from '../types/suggest'

export const SuggestItem = ({ text }: SuggestItemProps) => {
  return (
    <button>{text}</button>
  );
};

import { IsMoreRef, ParamRef, SetBooleanType, SetSuggestType } from "../suggest";
import { FormRef, InputRef, SetStringType, SetTodosType } from "../todo";

export type UsePostArgs = {
  setIsLoading: SetBooleanType;
  setTodos: SetTodosType;
  setInputText: SetStringType;
  setIsTyping: SetBooleanType;
  inputText: string;
  ref: InputRef;
  formRef: FormRef;
};

export type UseSearchArgs = {
  setSuggestList: SetSuggestType;
  setInputText: SetStringType;
  setIsTyping: SetBooleanType;
  setIsLoading: SetBooleanType;
  params: ParamRef;
  isMore: IsMoreRef;
};

export type UseScrollArgs = {
  params: ParamRef;
  isMore: IsMoreRef;
  setSuggestList: SetSuggestType,
  setIsScrolling: SetBooleanType
};

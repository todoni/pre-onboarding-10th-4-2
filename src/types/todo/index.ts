import {
  Dispatch,
  RefObject,
  SetStateAction,
  FormEvent,
  MouseEvent,
  UIEvent,
  ChangeEvent,
  MutableRefObject,
} from "react";

export type TodoItemType = {
  title: string;
};

export type SetTodosType = Dispatch<SetStateAction<TodoFetchItemType[]>>;
export type SetStringType = Dispatch<SetStateAction<string>>;

export interface TodoFetchItemType extends TodoItemType {
  createdAt: string;
  updatedAt: string;
  id: string;
}

export type TodoItemProps = {
  id: string;
  title: string;
  setTodos: SetTodosType;
};

export type InputTodoProps = {
  setTodos: SetTodosType;
};

export type InputTodoUIProps = {
  isLoading: boolean;
  suggestList: string[];
  isTyping: boolean;
  isScrolling: boolean;
  formRef: RefObject<HTMLFormElement>;
  inputText: string;
  isMore: MutableRefObject<boolean>;
  handleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleItemClick: (e: MouseEvent<HTMLElement>) => Promise<void>;
  handleScroll: ({ currentTarget }: UIEvent<HTMLElement>) => void;
};

export type TodoListProps = {
  todos: TodoFetchItemType[];
  setTodos: SetTodosType;
};

export type InputRef = RefObject<HTMLInputElement>;
export type FormRef = RefObject<HTMLFormElement>;

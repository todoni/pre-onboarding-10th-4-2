import { Dispatch, RefObject, SetStateAction } from "react";
import { Todo } from "../../domain/Todo";

export type TodoItemType = {
  title: string;
};

export type SetTodosType = Dispatch<SetStateAction<Todo[]>>;
export type SetStringType = Dispatch<SetStateAction<string>>;

export interface TodoFetchItemType extends TodoItemType {
  createdAt: string;
  updatedAt: string;
  id: string;
}

export type InputTodoProps = {
  setTodos: SetTodosType;
};

export type TodoListProps = {
  todos: TodoFetchItemType[];
  setTodos: SetTodosType;
};

export type InputRef = RefObject<HTMLInputElement>;
export type FormRef = RefObject<HTMLFormElement>;

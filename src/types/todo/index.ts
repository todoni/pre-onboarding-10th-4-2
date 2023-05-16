import { Dispatch, RefObject, SetStateAction } from "react";
import { Todo } from "../../domain/Todo";

export type SetTodosType = Dispatch<SetStateAction<Todo[]>>;
export type SetStringType = Dispatch<SetStateAction<string>>;

export type InputRef = RefObject<HTMLInputElement>;
export type FormRef = RefObject<HTMLFormElement>;

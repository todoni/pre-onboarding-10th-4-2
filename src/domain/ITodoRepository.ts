import { TodoDto } from "../infrastructure/TodoDto";

export interface ITodoRepository {
  getTodoList(): Promise<TodoDto[]>;
  createTodo(title: string): Promise<TodoDto>;
  deleteTodo(id: string): Promise<TodoDto>;
}

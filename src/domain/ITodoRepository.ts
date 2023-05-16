import { TodoDto, TodoSearchDto } from "../infrastructure/TodoDto";

export interface ITodoRepository {
  getTodoList(): Promise<TodoDto[]>;
  createTodo(title: string): Promise<TodoDto>;
  deleteTodo(id: string): Promise<TodoDto>;
  getTodoSearch(query: string, page: number): Promise<TodoSearchDto>;
}

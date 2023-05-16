import { ITodoRepository } from "../domain/ITodoRepository";
import { TodoDto } from "./TodoDto";
import apiRequest from "../api";

const RESOURCE = "/todos";

class TodoRepository implements ITodoRepository {
  async getTodoList(): Promise<TodoDto[]> {
    try {
      const response = await apiRequest.get(`${RESOURCE}`);
      return response.data;
    } catch (error) {
      throw new Error("API getTodoList error");
    }
  }

  async createTodo(title: string): Promise<TodoDto> {
    try {
      const response = await apiRequest.post(`${RESOURCE}`, { data: title });
      return response.data;
    } catch (error) {
      throw new Error("API createTodo error");
    }
  }

  async deleteTodo(id: string): Promise<TodoDto> {
    try {
      const response = await apiRequest.delete(`${RESOURCE}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("API deleteTodo error");
    }
  }
}

export default new TodoRepository();

import axios from "axios";
import { TodoItemType } from "../types/todo";

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: (url: string) => baseInstance.get(url),
  delete: (url: string) => baseInstance.delete(url),
  post: (url: string, data: TodoItemType) => baseInstance.post(url, data),
  suggest: (url: string) => baseInstance.get(url)
};

export default apiRequest;

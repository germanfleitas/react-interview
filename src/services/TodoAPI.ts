import axios from 'axios';
import type { TodoListResponseType } from './types';

const baseUrl = 'http://localhost:3000/api';

export class TodoAPI {
  static async getTodoLists(): Promise<TodoListResponseType[]> {
    const response = await axios.get(`${baseUrl}/todolists`);

    return response.data;
  }

  static async createTodoList(name: string): Promise<string> {
    const body = { name };
    const response = await axios.post(`${baseUrl}/todolists`, body);

    return response.data;
  }

  static async createTodo(description: string, todoListId: number): Promise<string> {
    const body = {
      description,
      todoListId
    };
    const response = await axios.post(`${baseUrl}/todos`, body);

    return response.data;
  }
}
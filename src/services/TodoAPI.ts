import axios from 'axios';
import type { TodoListResponseType } from './types';

const baseUrl = 'http://localhost:3000/api';

export class TodoAPI {
  static async getTodoLists(): Promise<TodoListResponseType[]> {
    try {
      const response = await axios.get(`${baseUrl}/todolists`);

      return response.data;
    } catch (e) {
      throw new Error('Error while getting todo lists');
    }
  }

  static async createTodoList(name: string): Promise<string> {
    try {
      const body = { name };
      const response = await axios.post(`${baseUrl}/todolists`, body);
  
      return response.data;
    } catch (e) {
      throw new Error('Error while creating a new todo list');
    }
  }

  static async editTodoList(todoListId: number, name: string): Promise<string> {
    try {
      const body = { name };
      const response = await axios.put(`${baseUrl}/todolists/${todoListId}`, body);
  
      return response.data;
    } catch (e) {
      throw new Error('Error while editing a todo list');
    }
  }

  static async completeTodoList(todoListId: number): Promise<string> {
    try {
      const response = await axios.put(`${baseUrl}/todolists/${todoListId}/complete`);
  
      return response.data;
    } catch (e) {
      throw new Error('Error while completing a todo list');
    }
  }

  static async deleteTodoList(todoListId: number): Promise<string> {
    try {
      const response = await axios.delete(`${baseUrl}/todolists/${todoListId}`);
  
      return response.data;
    } catch (e) {
      throw new Error('Error while deleting a todo list');
    }
  }

  static async createTodo(description: string, todoListId: number): Promise<string> {
    try {
      const body = {
        description,
        todoListId
      };
      const response = await axios.post(`${baseUrl}/todos`, body);
  
      return response.data;
    } catch (e) {
      throw new Error('Error while creating a new todo');
    }
  }

  static async toggleTodo(todoId: number, isCompleted: boolean): Promise<string> {
    try {
      const body = { isCompleted };
      const response = await axios.patch(`${baseUrl}/todos/${todoId}`, body);
  
      return response.data;
    } catch (e) {
      throw new Error('Error while editing a todo');
    }
  }

  static async deleteTodo(todoId: number): Promise<string> {
    try {
      const response = await axios.delete(`${baseUrl}/todos/${todoId}`);
  
      return response.data;
    } catch (e) {
      throw new Error('Error while deleting a todo');
    }
  }
}
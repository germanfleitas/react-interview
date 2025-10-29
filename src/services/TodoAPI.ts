import axios from 'axios';

const baseUrl = 'http://localhost:3000/api';

export class TodoAPI {
  static async createTodoList(name: string): Promise<string> {
    const body = { name };
    const response = await axios.post(`${baseUrl}/todolists`, body);

    return response.data;
  }
}
export interface ITodo {
    id?: string;
    title: string;
    description: string;
  }

  export interface ITodoData {
    data: ITodo[] | undefined;
    message: string;
    success: boolean;
  }
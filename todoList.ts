// todoList.ts
import { TodoItem } from "./todoItem";

export class TodoList {
  private items: TodoItem[];

  constructor() {
    this.items = [];
  }

  addItem(text: string): void {
    const newItem: TodoItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.items.push(newItem);
  }

  toggleItem(id: number): void {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      item.completed = !item.completed;
    }
  }

  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getAllItems(): TodoItem[] {
    return this.items;
  }
}

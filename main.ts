// main.ts
import { TodoList } from "./todoList";

const todoList = new TodoList();
todoList.addItem("Learn TypeScript");
todoList.addItem("Build a Todo List App");
todoList.toggleItem(1);
todoList.removeItem(1);

console.log(todoList.getAllItems());

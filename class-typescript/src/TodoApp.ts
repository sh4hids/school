import { TodoItem } from "./TodoItem";
import { TodoCollection } from "./TodoCollection";

const todos: TodoItem[] = [
  new TodoItem(1, "Learn TypeScript", true),
  new TodoItem(2, "Build a Todo app"),
  new TodoItem(3, "Learn TypeScript with Koa"),
  new TodoItem(4, "Learn TypeScript with React"),
];

let myTodos: TodoCollection = new TodoCollection("Shahid", todos);

console.clear();
console.log(
  `${myTodos.userName}'s Todo List (${myTodos.getItemCounts().total}):`
);
console.log(JSON.stringify(myTodos.getTodoItems(true), null, 2));

const newTaskId: number = myTodos.addTodo("Build a react app with typescript");
const task: TodoItem = myTodos.getTodoById(newTaskId);

console.log(`New task:`);
task.printDetails();
// console.log(JSON.stringify(task, null, 2));

myTodos.removeCompleted();
console.log(JSON.stringify(myTodos.getTodoItems(true), null, 2));
console.log(JSON.stringify(myTodos.getItemCounts(), null, 2));

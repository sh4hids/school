import { TodoItem } from "./TodoItem";

interface ItemCounts {
  total: number;
  incomplete: number;
}

export class TodoCollection {
  private nextId: number = 1;
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, todoItems: TodoItem[]) {
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }

    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    return this.itemMap.get(id) as TodoItem;
  }

  getTodoItems(includeCompleted: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => includeCompleted || !item.isCompleted
    );
  }

  getItemCounts(): ItemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItems(false).length,
    };
  }

  markComplete(id: number, isCompleted: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.isCompleted = isCompleted;
    }
  }

  removeCompleted() {
    this.itemMap.forEach((item) => {
      if (item.isCompleted) {
        this.itemMap.delete(item.id);
      }
    });
  }
}

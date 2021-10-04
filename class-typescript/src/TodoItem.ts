export class TodoItem {
  public constructor(
    public id: number,
    public task: string,
    public isCompleted: boolean = false
  ) {}

  public printDetails(): void {
    console.log(
      `${this.id}\t${this.task} ${this.isCompleted ? "\tcomplete" : ""}`
    );
  }
}

interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(savedState: string): void;
}

class InMemoryDB implements Database {
  protected db: Record<string, string> = {};

  get(id: string): string {
    return this.db[id];
  }

  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentDB extends InMemoryDB implements Persistable {
  saveToString() {
    return JSON.stringify(this.db);
  }

  restoreFromString(savedState: string): void {
    console.log(JSON.parse(savedState));
    this.db = JSON.parse(savedState);
  }
}

const myDB = new PersistentDB();

myDB.set("1", "test value");
console.log(myDB.get("1"));

// myDB.db["2"] = "another test";
console.log(myDB.saveToString());

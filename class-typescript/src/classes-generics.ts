interface GDatabase<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(savedState: string): void;
}

type DBKeyType = string | symbol | number;

class GMemoryDB<T, K extends DBKeyType> implements GDatabase<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;

  get(id: K): T {
    return this.db[id];
  }

  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class GPersistentDB<T, K extends DBKeyType>
  extends GMemoryDB<T, K>
  implements Persistable
{
  saveToString() {
    return JSON.stringify(this.db);
  }

  restoreFromString(savedState: string): void {
    console.log(JSON.parse(savedState));
    this.db = JSON.parse(savedState);
  }
}

const myDB2 = new GPersistentDB<string, string>();

myDB.set("1", "test value");
console.log(myDB2.get("1"));

// myDB.db["2"] = "another test";
console.log(myDB2.saveToString());

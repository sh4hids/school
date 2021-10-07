function myLogFunc() {
  return (str: string) => {
    console.log(str);
  };
}

const mLogger = myLogFunc();
mLogger("testing logger");

function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = "";

    log(str: string) {
      this.completeLog += str + "\n";
    }

    dumpLog() {
      return this.completeLog;
    }
  };
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log("Test");
console.log(logger2.dumpLog());

function CreateSimpleMemoryDB<T>() {
  return class SimpleMemoryDB {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }

    get(id: string): T {
      return this.db[id];
    }

    getObject(): object {
      return this.db;
    }
  };
}

const StringDb = CreateSimpleMemoryDB<string>();
const myDBs = new StringDb();
myDBs.set("a", "test");

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<
  T extends Constructor<{
    getObject(): object;
  }>
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDb = Dumpable(StringDb);
const newDb = new DumpableStringDb();
newDb.set("b", "john");
newDb.dump();

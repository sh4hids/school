interface MyUser {
  name: string;
  age: number;
  email?: string;
}

type UserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: UserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "John",
      age: 32,
      email: "test@test.com",
    },
    {
      email: "hello@test.com",
    }
  )
);

type RequiredUser = Required<MyUser>;
type JustEmailName = Pick<MyUser, "name" | "email">;

const mapById = (
  users: MyUser[]
): Record<MyUser["name"], Omit<MyUser, "name">> => {
  return users.reduce((a, v) => {
    const { name, ...others } = v;
    return {
      ...a,
      [name]: others,
    };
  }, {});
};

console.log(
  mapById([
    {
      name: "John",
      age: 25,
    },
    {
      name: "Jane",
      age: 35,
      email: "test@test.com",
    },
  ])
);

function printIngredients(
  quantity: number,
  ingredient: string,
  extra?: string
) {
  console.log(`${quantity} ${ingredient}${extra ? ` ${extra}` : ""}`);
}

printIngredients(5, "eggs");
printIngredients(4, "sugar", "water");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getUserEmail(user: User): string {
  if (user.info) {
    return user.info.email!; // tell ts I know better than you
  }

  return "";
}

function getUserEmailV2(user: User): string {
  return user?.info?.email ?? "";
}

function addWithCallback(x: number, y: number, callback?: () => {}): void {
  console.log([x, y]);
  callback?.(); // call if provider
}

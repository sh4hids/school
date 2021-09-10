export function addNumbers(a: number, b: number): number {
  return a + b;
}

export const addStrings = (
  str1: string,
  str2: string = "Default String"
): string => `${str1} ${str2}`;

export const formatTitle = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const printFormattedTitle = (
  title: string,
  param: string | number
): void => {
  console.log(formatTitle(title, param));
};

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data fetched from ${url}`);

export function getSalutation(salutation: string, ...names: string[]) {
  return `${salutation} ${names.join(" ")}`;
}

export function getName(user: { firstName: string; lastName: string }): string {
  return `${user?.firstName ?? "first"} ${user?.lastName ?? "last"}`;
}

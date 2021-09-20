type ThreeDCoordinates = [x: number, y: number, z: number];

function add3DCoordinates(
  c1: ThreeDCoordinates,
  c2: ThreeDCoordinates
): ThreeDCoordinates {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinates([12, 44, 87], [43, 34, 54]));

function useState(initial: string): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [getValue, setValue] = useState("test");
console.log(getValue());
setValue("Hello world!");
console.log(getValue());

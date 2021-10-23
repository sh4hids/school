import React, { useCallback, useState, useEffect, useRef } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

import store, { selectTodos, addTodo, removeTodo } from "./store";

import "./App.css";

const Heading = ({ title }: { title: string }) => <h1>{title}</h1>;

const Box: React.FC = ({ children }) => <div>{children}</div>;

const List: React.FC<{ items: string[]; onClick?: (item: string) => void }> = ({
  items,
  onClick,
}) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
);

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title?: string;
  }
> = ({ title, children, style, ...rest }) => (
  <button
    style={{ backgroundColor: "peachpuff", fontSize: "xx-large", ...style }}
    {...rest}
  >
    {title || children}
  </button>
);

interface Payload {
  text: string;
}

const useNumber = (initialvalue: number) => useState<number>(initialvalue);

type UseNumberValue = ReturnType<typeof useNumber>[0];
type UseNumberSetValue = ReturnType<typeof useNumber>[1];

const Counter: React.FC<{
  value: UseNumberValue;
  setValue: UseNumberSetValue;
}> = ({ value, setValue }) => (
  <div>
    <Button onClick={() => setValue(value + 1)}>Add - {value}</Button>
  </div>
);

function UnorderedList<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul>
      {items.map((item) => (
        <li onClick={() => itemClick(item)}>{render(item)}</li>
      ))}
    </ul>
  );
}

const Todos = () => {
  const todos = useSelector(selectTodos);
  return (
    <div>
      <Heading title="Todos" />
      <UnorderedList
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => <>{todo.text}</>}
      />
    </div>
  );
};

function App() {
  const onItemClick = useCallback((item: string) => {
    alert(item);
  }, []);

  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPayload(data);
      });
  }, []);

  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const newTodoRef = useRef<HTMLInputElement>(null);
  const handleAddTodo = useCallback(() => {
    if (newTodoRef.current?.value) {
      dispatch(addTodo(newTodoRef.current.value));
      newTodoRef.current.value = "";
    }
  }, [dispatch]);

  const [count, setCount] = useNumber(0);

  return (
    <div className="App">
      <Heading title="Intro" />
      <Box>This is inside a Box</Box>
      <List items={["one", "two", "three"]} onClick={onItemClick} />
      <Box>{JSON.stringify(payload)}</Box>
      <Counter value={count} setValue={setCount} />
      <Heading title="Todos" />
      <Box>
        {/* {todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
        ))} */}

        <UnorderedList
          items={todos}
          itemClick={(item) => alert(item.id)}
          render={(todo) => (
            <>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
              </button>
            </>
          )}
        />

        <div>
          <input type="text" ref={newTodoRef} />
          <Button
            onClick={handleAddTodo}
            style={{ backgroundColor: "powderblue" }}
            title={"Add Todo"}
          />
        </div>
      </Box>
    </div>
  );
}

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
      }}
    >
      <App />
      <Todos />
    </div>
  </Provider>
);

export default AppWrapper;

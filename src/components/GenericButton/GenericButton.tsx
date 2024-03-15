interface GenericButtonProps<T> {
  value: T;
  onClick: (value: T) => void;
}

function GenericButton<T>({ value, onClick }: GenericButtonProps<T>) {
  return <button onClick={() => onClick(value)}>Click me</button>;
}

export default GenericButton;

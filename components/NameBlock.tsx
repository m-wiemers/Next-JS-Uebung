type Props = {
  age: number;
  name: string;
  change: any;
  onClick?(): void;
};

export default function NameBlock(props: Props) {
  return (
    <div>
      <h1>
        {props.name} is {props.age} years old
      </h1>
      <button onClick={props.change}>{props.name}</button>
    </div>
  );
}

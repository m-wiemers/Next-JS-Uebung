type Props = {
  age: number;
  feuer: string;
  change: any;
  onClick?(): void;
};

export default function NameBlock(props: Props) {
  return (
    <div>
      <h1>Hello {props.age}</h1>
      <button onClick={props.change}>{props.feuer}</button>
    </div>
  );
}

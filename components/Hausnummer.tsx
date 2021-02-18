type Props = {
  hausnummer: number;
};

export default function Hausnummer(props: Props) {
  return <h2>{props.hausnummer}</h2>;
}

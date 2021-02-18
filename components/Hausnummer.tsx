type Props = {
  hausnummer: number;
};

export default function Hausnummer(props: Props) {
  return <h2>und wohnt in der Musterstraße {props.hausnummer}</h2>;
}

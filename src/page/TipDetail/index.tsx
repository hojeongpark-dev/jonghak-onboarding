import { useParams } from "react-router-dom";

export default function TipDetail(): JSX.Element {
  const { code } = useParams();
  return <div>tip detail{code}</div>;
}

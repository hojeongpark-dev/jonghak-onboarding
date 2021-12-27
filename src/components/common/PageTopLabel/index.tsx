import { PageHeader } from "antd";

interface PageTopLabelProps {
  label: string;
}

export default function PageTopLabel({
  label,
}: PageTopLabelProps): JSX.Element {
  return <PageHeader title={label} />;
}

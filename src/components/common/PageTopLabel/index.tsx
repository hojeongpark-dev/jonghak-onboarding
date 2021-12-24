import { PageHeader } from "antd";

interface PageTopLabelProps {
  label: string;
}

export default function PageTopLabel({
  label,
}: PageTopLabelProps): JSX.Element {
  return (
    <PageHeader
      // className="site-page-header"
      title={label}
      // breadcrumb={{ routes }}
      // subTitle="This is a subtitle"
    />
  );
}

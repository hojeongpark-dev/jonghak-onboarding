import React from "react";
import Intro from "../../components/Intro";
import CenterLayout from "../../layout/styled/CenterLayout";

export default function Home(): JSX.Element {
  return (
    <CenterLayout>
      <Intro />
    </CenterLayout>
  );
}

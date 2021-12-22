import React from "react";
import { Button } from "antd";
import { useImmer } from "use-immer";
import Flex from "../../components/layout/styled/Flex";
import useTips from "../../apis/tip";
import { LanguageType, QueryTipsArgs } from "../../graphql-types";
import { languageCategoriesKo } from "./constants";
import CategoryFilter from "../../components/CategoryFilter";
import NewTipButton from "./components/NewTipButton";

const initialArgs: QueryTipsArgs = {
  input: {
    filter: {
      language: "KOREAN",
    },
    limit: 20,
    page: 1,
  },
};

function Tip(): JSX.Element {
  const [queryTipsArgs, setQueryTipsArgs] = useImmer(initialArgs);
  const { tips } = useTips(queryTipsArgs);

  const handleChangeLangFilter = (key: LanguageType) => {
    setQueryTipsArgs((prev) => {
      prev.input.filter.language = key;
    });
  };

  const handleClickNewTip = () => {
    // TODO OPEN MODAL
  };

  return (
    <>
      <CategoryFilter
        defaultSelectedKeys={["KOREAN"]}
        categories={languageCategoriesKo}
        onClickCategory={handleChangeLangFilter}
      />
      <Flex mt={10}>
        <NewTipButton onClick={handleClickNewTip}/>
      </Flex>
      {/* TODO TABLE */}
      <Flex flexDirection={"column"}>
        {tips?.edges?.map((tip) => (
          <Flex key={tip.code}>{tip.code}{tip.title}</Flex>
        ))}
      </Flex>
    </>
  );
}

export default Tip;

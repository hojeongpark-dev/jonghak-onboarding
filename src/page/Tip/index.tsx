import { useImmer } from "use-immer";
import Flex from "../../components/layout/styled/Flex";
import useTipsQuery from "../../apiHooks/tip/useTipsQuery";
import { LanguageType, QueryTipsArgs } from "../../graphql-types";
import { languageCategoriesKo } from "./constants";
import CategoryFilter from "../../components/common/CategoryFilter";
import RightButton from "../../components/common/RightButton";
import STRING from "../../constants/strings";
import SearchBar from "../../components/common/SearchBar";
import TipListTable from "./components/TipListTable";
import { DEFAULT_LIMIT_SIZE, INITIAL_PAGE_INDEX } from "../../constants/list";
import useToggle from "../../hooks/useToggle";
import NewTipModal from "./components/NewTipModal";
import useWhenUpdate from "../../hooks/useWhenUpdate";
import { ErrorToast } from "../../toast";

const initialArgs: QueryTipsArgs = {
  input: {
    filter: {
      language: "KOREAN",
    },
    limit: DEFAULT_LIMIT_SIZE,
    page: INITIAL_PAGE_INDEX,
  },
};

function Tip(): JSX.Element {
  const [queryTipsArgs, setQueryTipsArgs] = useImmer(initialArgs);
  const { tips, loading, refetch } = useTipsQuery(initialArgs);
  const [modalVisible, toggleModalVisible, modalKey] = useToggle();

  const handleChangeLangFilter = (language: LanguageType) => {
    setQueryTipsArgs((prev) => {
      prev.input.page = INITIAL_PAGE_INDEX;
      prev.input.filter.language = language;
    });
  };

  const handleChangeFilterTitle = (search: string) => {
    setQueryTipsArgs((prev) => {
      prev.input.page = INITIAL_PAGE_INDEX;
      prev.input.filter.search = search;
    });
  };

  const handleChangePage = (page: number) => {
    setQueryTipsArgs((prev) => {
      prev.input.page = page;
    });
  };

  useWhenUpdate(() => {
    refetch(queryTipsArgs).catch(ErrorToast);
  }, [queryTipsArgs]);

  return (
    <>
      <CategoryFilter
        defaultSelectedKeys={["KOREAN"]}
        categories={languageCategoriesKo}
        onClickCategory={handleChangeLangFilter}
      />
      <Flex marginY={10}>
        <RightButton
          label={STRING.OPEN_NEW_TIP_MODAL}
          onClick={toggleModalVisible}
        />
      </Flex>
      <Flex mb={10}>
        <SearchBar
          placeholder={STRING.TIP_TITLE}
          resetWhenEmpty
          onSearch={handleChangeFilterTitle}
        />
      </Flex>
      <TipListTable
        tips={tips}
        loading={loading}
        refetch={refetch}
        onPageChange={handleChangePage}
      />
      <NewTipModal
        key={modalKey}
        onClose={toggleModalVisible}
        afterOk={refetch}
        isVisible={modalVisible}
      />
    </>
  );
}

export default Tip;

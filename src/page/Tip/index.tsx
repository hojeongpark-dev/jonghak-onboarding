import { useImmer } from "use-immer";
import { toast } from "react-toastify";
import Flex from "../../components/layout/styled/Flex";
import useTipsQuery from "../../apiHooks/tip/useTipsQuery";
import { LanguageType, QueryTipsArgs } from "../../graphql-types";
import { languageCategoriesKo } from "./constants";
import CategoryFilter from "../../components/common/CategoryFilter";
import RightButton from "../../components/common/RightButton";
import STRING from "../../constants/strings";
import SearchBar from "../../components/common/SearchBar";
import TipListTable from "./components/TipListTable";
import {
  useDeleteTipMutation,
  useTipUpdateMutation,
} from "../../apiHooks/tip/useTipMutations";
import { getErrorDescription } from "../../network/error";
import { DEFAULT_LIMIT_SIZE } from "../../constants/list";
import useToggle from "../../hooks/useToggle";
import NewTipModal from "./components/NewTipModal";

const initialArgs: QueryTipsArgs = {
  input: {
    filter: {
      language: "KOREAN",
    },
    limit: DEFAULT_LIMIT_SIZE,
    page: 1,
  },
};

function Tip(): JSX.Element {
  const [queryTipsArgs, setQueryTipsArgs] = useImmer(initialArgs);
  const { tips, loading, refetch } = useTipsQuery(queryTipsArgs);
  const { updateTip } = useTipUpdateMutation();
  const { requestDelete } = useDeleteTipMutation();
  const [modalVisible, toggleModalVisible, modalKey] = useToggle();

  const refreshTips = () => refetch(queryTipsArgs);

  const handleChangeLangFilter = (key: LanguageType) => {
    setQueryTipsArgs((prev) => {
      prev.input.filter.language = key;
    });
  };

  const handleChangeFilterTitle = (value: string) => {
    setQueryTipsArgs((prev) => {
      prev.input.filter.search = value;
    });
  };

  const handleTipDelete = async (code: number) => {
    try {
      await requestDelete(code);
      await refreshTips();
      toast.success(STRING.DELETE_SUCCESS);
    } catch (e) {
      toast.error(getErrorDescription(e));
    }
  };

  const handleTipToggleActive = async (code: number) => {
    try {
      await updateTip({ code, toggleActive: true });
      toast.success(STRING.TOGGLE_ACTIVE_SUCCESS);
    } catch (e) {
      toast.error(getErrorDescription(e));
    }
  };

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
        loading={loading}
        onTipDelete={handleTipDelete}
        onTipToggleActive={handleTipToggleActive}
        tips={tips}
      />
      <NewTipModal
        key={modalKey}
        onClose={toggleModalVisible}
        afterOk={refreshTips}
        isVisible={modalVisible}
      />
    </>
  );
}

export default Tip;

import { useImmer } from "use-immer";
import PageTopLabel from "../../components/common/PageTopLabel";
import RightButton from "../../components/common/RightButton";
import Flex from "../../components/layout/styled/Flex";
import useToggle from "../../hooks/useToggle";
import EventSpotListTable from "./components/EventSpotListTable";
import NewEventModal from "./components/NewEventModal";
import useSpotEventsQuery from "../../apiHooks/spot/useSpotEventsQuery";
import EventSpotListFilter from "./components/EventSpotListFilter";
import SearchBar from "../../components/common/SearchBar";
import {
  QuerySpotEventsArgs,
  SpotEventStatusType,
  SpotEventType,
  SpotTranslationsArgs,
} from "../../graphql-types";
import { DEFAULT_LIMIT_SIZE } from "../../constants/list";

const initialArgs: QuerySpotEventsArgs & SpotTranslationsArgs = {
  input: {
    page: 1,
    limit: DEFAULT_LIMIT_SIZE,
    filter: {
      search: "",
    },
  },
  language: "KOREAN",
};

export default function TripEvent(): JSX.Element {
  const [modalVisible, toggleModal, modalKey] = useToggle(true);
  const [spotEventsArgs, setSpotEventsArgs] = useImmer(initialArgs);
  const { events, loading, refetch } = useSpotEventsQuery(spotEventsArgs);

  const handleSearchKeywordChange = (keyword: string) => {
    setSpotEventsArgs((prev) => {
      if (prev.input.filter) prev.input.filter.search = keyword;
      else prev.input.filter = { search: keyword };
    });
  };

  const handleEventStatusChange = (status: SpotEventStatusType) => {
    setSpotEventsArgs((prev) => {
      if (prev.input.filter) prev.input.filter.status = status;
      else prev.input.filter = { status };
    });
  };

  const handleEventTypeChange = (type: SpotEventType) => {
    setSpotEventsArgs((prev) => {
      if (prev.input.filter) prev.input.filter.type = type;
      else prev.input.filter = { type };
    });
  };

  const handleEventPeriodChange = (
    period: { start: string; end: string } | null
  ) => {
    setSpotEventsArgs((prev) => {
      if (prev.input.filter) prev.input.filter.period = period;
      else prev.input.filter = { period };
    });
  };

  const handleDeleteEvent = (code: number) => {
    console.log("delete", code);
  };

  return (
    <>
      <PageTopLabel label={"스팟 이벤트"} />
      <Flex mb={10}>
        <RightButton label={"새 이벤트 생성"} onClick={toggleModal} />
      </Flex>
      <SearchBar
        placeholder={"상품명, 스팟명 검색"}
        resetWhenEmpty
        onSearch={handleSearchKeywordChange}
      />
      <EventSpotListFilter
        onPeriodChange={handleEventPeriodChange}
        onTypeChange={handleEventTypeChange}
        onStatusChange={handleEventStatusChange}
      />
      <EventSpotListTable
        onEventDelete={handleDeleteEvent}
        loading={loading}
        events={events}
      />
      <NewEventModal
        isVisible={modalVisible}
        key={modalKey}
        onClose={toggleModal}
      />
    </>
  );
}

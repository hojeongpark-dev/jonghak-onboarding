import { useImmer } from "use-immer";
import PageTopLabel from "../../components/common/PageTopLabel";
import RightButton from "../../components/common/RightButton";
import Flex from "../../components/layout/styled/Flex";
import useToggle from "../../hooks/useToggle";
import EventSpotListTable from "./components/EventSpotListTable";
import NewEventModal from "./components/NewEventModal";
import useSpotEventsQuery from "../../apiHooks/spotEvent/useSpotEventsQuery";
import EventSpotListFilter from "./components/EventSpotListFilter";
import SearchBar from "../../components/common/SearchBar";
import {
  PeriodArgs,
  QuerySpotEventsArgs,
  SpotEventStatusType,
  SpotEventType,
  SpotTranslationsArgs,
} from "../../graphql-types";
import { DEFAULT_LIMIT_SIZE, INITIAL_PAGE_INDEX } from "../../constants/list";
import STRING from "../../constants/strings";
import useWhenUpdate from "../../hooks/useWhenUpdate";
import { ErrorToast } from "../../toast";

const initialArgs: QuerySpotEventsArgs & SpotTranslationsArgs = {
  input: {
    page: INITIAL_PAGE_INDEX,
    limit: DEFAULT_LIMIT_SIZE,
    filter: {
      search: STRING.EMPTY,
    },
  },
  language: "KOREAN",
};

export default function SpotEvent(): JSX.Element {
  const [modalVisible, toggleModalVisible, modalKey] = useToggle();
  const [spotEventsArgs, setSpotEventsArgs] = useImmer(initialArgs);
  const { events, loading, refetch } = useSpotEventsQuery(initialArgs);

  const handleSearchKeywordChange = (search: string) => {
    setSpotEventsArgs((prev) => {
      prev.input.filter &&= { search };
    });
  };

  const handleEventStatusChange = (status: SpotEventStatusType) => {
    setSpotEventsArgs((prev) => {
      prev.input.filter &&= { status };
    });
  };

  const handleEventTypeChange = (type: SpotEventType) => {
    setSpotEventsArgs((prev) => {
      prev.input.filter &&= { type };
    });
  };

  const handleEventPeriodChange = (period: PeriodArgs | null) => {
    setSpotEventsArgs((prev) => {
      prev.input.filter &&= { period };
    });
  };

  const handlePageChange = (page: number) => {
    setSpotEventsArgs((prev) => {
      prev.input.page = page;
    });
  };

  useWhenUpdate(() => {
    refetch(spotEventsArgs).catch(ErrorToast);
  }, [spotEventsArgs]);

  return (
    <>
      <PageTopLabel label={STRING.SPOT_EVENT} />
      <Flex mb={10}>
        <RightButton
          label={STRING.OPEN_NEW_EVENT_MODAL}
          onClick={toggleModalVisible}
        />
      </Flex>
      <SearchBar
        placeholder={STRING.SPOT_EVENT_SEARCHBAR_PLACEHOLDER}
        resetWhenEmpty
        onSearch={handleSearchKeywordChange}
      />
      <EventSpotListFilter
        onPeriodChange={handleEventPeriodChange}
        onTypeChange={handleEventTypeChange}
        onStatusChange={handleEventStatusChange}
      />
      <EventSpotListTable
        loading={loading}
        events={events}
        refetch={refetch}
        onPageChange={handlePageChange}
      />
      <NewEventModal
        key={modalKey}
        isVisible={modalVisible}
        onClose={toggleModalVisible}
        afterOk={refetch}
      />
    </>
  );
}

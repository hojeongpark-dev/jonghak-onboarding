import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { URLS } from "../../constants/urls";
import useSpotEventQuery from "../../apiHooks/spotEvent/useSpotEventQuery";
import Loading from "../../components/common/Loading";
import SpotEventSummary from "./components/SpotEventSummary";
import SpotEventIndividualList from "./components/SpotEventIndividualList";

export default function SpotEventDetail(): JSX.Element {
  const { code } = useParams();
  const { spotEvent, error, loading, refetch } = useSpotEventQuery(
    Number(code)
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (error) navigate(URLS.SPOT_EVENT);
  }, [loading]);

  if (loading) return <Loading />;

  if (!spotEvent) return <div>404</div>;

  const { individuals, type, ...eventSummaryInfo } = spotEvent;
  const {
    spot: { items: spotItems },
    code: eventCode,
  } = eventSummaryInfo;

  return (
    <>
      <SpotEventSummary
        type={type}
        refetch={refetch}
        summaryInfo={eventSummaryInfo}
      />
      <SpotEventIndividualList
        type={type}
        refetch={refetch}
        eventCode={eventCode}
        spotItems={spotItems}
        individualEvents={individuals}
      />
    </>
  );
}

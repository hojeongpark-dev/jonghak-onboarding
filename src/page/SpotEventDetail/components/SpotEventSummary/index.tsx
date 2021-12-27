import moment from "moment-es6";
import { Tag } from "antd";
import { array } from "yup";
import {
  SpotEvent,
  SpotEventType,
  UpdateDiscountSpotEventArgs,
  UpdateGetFreeSpotEventArgs,
} from "../../../../graphql-types";
import DescriptionRow from "../../../../components/forms/DescriptionRow";
import STRING from "../../../../constants/strings";
import RightButton from "../../../../components/common/RightButton";
import OngoingSwitch from "../../../../components/spotEvent/OngoingSwitch";
import NotYetSwitch from "../../../../components/spotEvent/NotYetSwitch";
import { RangeMoment } from "../../../../types/form/inputProps";
import { dateTimeFormat, dateToVisibleFormat } from "../../../../util/date";
import { EVENT_TYPE_TO_KO } from "../../../../constants/enumToString";
import Flex from "../../../../components/layout/styled/Flex";
import useForm from "../../../../hooks/useForm";
import { FormType } from "../../../../types/form/formType";
import {
  useCloseSpotEventMutations,
  useUpdateDiscountSpotEvent,
  useUpdateGetFreeSpotEvent,
} from "../../../../apiHooks/spotEvent/useSpotEventMutations";
import { ErrorToast, SuccessToast } from "../../../../toast";

const numberInputStyle = { width: 140, marginRight: 20 };

interface SpotEventSummaryProps {
  type: SpotEventType;
  summaryInfo: Omit<Omit<SpotEvent, "individuals">, "type">;
  refetch: () => void;
}

export default function SpotEventSummary({
  type,
  summaryInfo,
  refetch,
}: SpotEventSummaryProps): JSX.Element {
  const {
    status,
    code,
    start,
    end,
    spot,
    manager,
    createdAt,
    description: initialDescription,
  } = summaryInfo;
  // @ts-ignore
  const initialPeriod: RangeMoment = [moment(start), moment(end)];
  const isGetFreeType = type === "GET_FREE";

  const { updateDiscountSpotEvent, loading: discountUpdateLoading } =
    useUpdateDiscountSpotEvent();
  const { updateGetFreeSpotEvent, loading: getFreeUpdateLoading } =
    useUpdateGetFreeSpotEvent();
  const updateLoading = getFreeUpdateLoading || discountUpdateLoading;

  const { closeSpotEvent, loading: closeLoading } =
    useCloseSpotEventMutations();

  const handleUpdateSpotEvent = async (
    type: SpotEventType,
    args: UpdateDiscountSpotEventArgs & UpdateGetFreeSpotEventArgs
  ) => {
    try {
      if (type === "DISCOUNT") {
        await updateDiscountSpotEvent(args);
      }
      if (type === "GET_FREE") {
        await updateGetFreeSpotEvent(args);
      }
      SuccessToast(STRING.UPDATE_SUCCESS);
      await refetch();
    } catch (e) {
      ErrorToast(e);
    }
  };

  const handleCloseEvent = async (code: number) => {
    try {
      await closeSpotEvent(code);
      await refetch();
      SuccessToast(STRING.UPDATE_SUCCESS);
    } catch (e) {
      ErrorToast(e);
    }
  };

  const { formik, Form } = useForm({
    formInfo: {
      period: {
        formType: FormType.DATE_RANGE_PICKER,
        initialValue: initialPeriod,
        validator: array().required(),
      },
      baseValue: {
        formType: FormType.NUMBER,
        placeholder: STRING.BUY_NUMBER,
        initialValue: summaryInfo.baseValue || undefined,
      },
      subValue: {
        formType: FormType.NUMBER,
        placeholder: STRING.GIFT_NUMBER,
        initialValue: summaryInfo.subValue || undefined,
      },
      description: {
        formType: FormType.TEXT_AREA,
        initialValue: initialDescription || STRING.EMPTY,
      },
    },
    onSubmit: async ({ period, description, baseValue, subValue }) => {
      const [from, to] = period;
      await handleUpdateSpotEvent(type, {
        description,
        code,
        baseValue,
        subValue,
        period: {
          start: dateTimeFormat(from),
          end: dateTimeFormat(to),
        },
      });
    },
  });

  return (
    <Flex flexDirection={"column"}>
      <DescriptionRow label={STRING.IS_ONGOING}>
        {status === "ON_GOING" ? (
          <OngoingSwitch
            loading={closeLoading}
            code={code}
            onEventClose={handleCloseEvent}
          />
        ) : (
          <NotYetSwitch />
        )}
      </DescriptionRow>
      <DescriptionRow label={STRING.EVENT_TYPE}>
        <Tag color="blue">{EVENT_TYPE_TO_KO[type]}</Tag>
      </DescriptionRow>
      <DescriptionRow label={STRING.CONNECTED_SPOT}>
        <Tag color="blue">{spot.translations?.at(0)?.name}</Tag>
      </DescriptionRow>
      {isGetFreeType && (
        <DescriptionRow label={STRING.GIFT_NUMBER}>
          <Flex>
            <Flex style={numberInputStyle}>
              <Form.baseValue allowClear={false} min={1} />
            </Flex>
            <Flex alignItems={"center"}>{STRING.BUY_BASE_TEXT}</Flex>
            <Flex style={numberInputStyle} ml={20}>
              <Form.subValue allowClear={false} min={0} />
            </Flex>
            <Flex alignItems={"center"}>{STRING.GIFT_TEXT}</Flex>
          </Flex>
        </DescriptionRow>
      )}
      <DescriptionRow label={STRING.PERIOD}>
        <Form.period />
      </DescriptionRow>
      <DescriptionRow label={STRING.MANAGER}>{manager.name}</DescriptionRow>
      <DescriptionRow label={STRING.CREATED_AT}>
        {dateToVisibleFormat(createdAt)}
      </DescriptionRow>
      <DescriptionRow label={STRING.ADDITIONAL_DESCRIPTION}>
        <Form.description />
      </DescriptionRow>
      <Flex pb={10} />
      <RightButton
        disabled={!formik.isValid || updateLoading}
        label={STRING.SAVE}
        onClick={formik.submitForm}
      />
    </Flex>
  );
}

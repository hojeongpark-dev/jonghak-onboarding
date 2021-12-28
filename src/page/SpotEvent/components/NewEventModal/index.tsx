import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { array, object } from "yup";
import { useImmer } from "use-immer";
import { ModalProps } from "../../../../types/modal";
import CustomModal from "../../../../components/common/CustomModal";
import STRING from "../../../../constants/strings";
import recordToArray from "../../../../util/record";
import { EVENT_TYPE_TO_KO } from "../../../../constants/enumToString";
import DescriptionRow from "../../../../components/forms/DescriptionRow";
import {
  PeriodArgs,
  QuerySpotsArgs,
  Spot,
  SpotEventType,
  SpotTranslationsArgs,
} from "../../../../graphql-types";
import useForm from "../../../../hooks/useForm";
import { FormType } from "../../../../types/form/formType";
import useSpotsQuery from "../../../../apiHooks/spot/useSpotsQuery";
import {
  DEFAULT_LIMIT_SIZE,
  INITIAL_PAGE_INDEX,
} from "../../../../constants/list";
import {
  RangeMoment,
  SelectOptionItem,
} from "../../../../types/form/inputProps";
import Flex from "../../../../components/layout/styled/Flex";
import {
  useCreateDiscountSpotEventMutations,
  useCreateGetFreeSpotEventMutations,
} from "../../../../apiHooks/spotEvent/useSpotEventMutations";
import { dateTimeFormat } from "../../../../util/date";
import { ErrorToast, SuccessToast } from "../../../../toast";

const numberInputStyle = { width: 140, marginRight: 20 };

const spotToOption = (spot: Spot): SelectOptionItem => ({
  label: `${spot.translations?.at(0)?.name}`,
  value: `${spot.code}`,
});

const INITIAL_TYPE = "DISCOUNT";

const initialQueryArgs: QuerySpotsArgs & SpotTranslationsArgs = {
  input: {
    page: INITIAL_PAGE_INDEX,
    limit: DEFAULT_LIMIT_SIZE,
    filter: {
      language: "KOREAN",
    },
  },
  language: "KOREAN",
};

export default function NewEventModal({
  onClose,
  isVisible,
  afterOk,
}: ModalProps): JSX.Element {
  const [type, setType] = useState<SpotEventType>(INITIAL_TYPE);

  const [spotQueryArgs, setSpotQueryArgs] = useImmer(initialQueryArgs);

  const { spots } = useSpotsQuery(spotQueryArgs);

  const { creteDiscountSpotEvent } = useCreateDiscountSpotEventMutations();
  const { creteGetFreeSpotEvent } = useCreateGetFreeSpotEventMutations();

  const isGetFreeType = type === "GET_FREE";
  const spotOptions = spots?.edges.map(spotToOption) || [];

  const handleSearchKeywordChange = (keyword: string) => {
    setSpotQueryArgs((prev) => {
      prev.input.filter.name = keyword;
    });
  };

  const handleTypeChange = ({ target: { value } }: RadioChangeEvent) =>
    setType(value);

  const { Form, formik } = useForm({
    formInfo: {
      connectedSpot: {
        formType: FormType.SELECT_SEARCH,
        validator: object().pick(["value"]).required(),
      },
      baseValue: {
        formType: FormType.NUMBER,
        placeholder: STRING.BUY_NUMBER,
      },
      subValue: {
        formType: FormType.NUMBER,
        placeholder: STRING.GIFT_NUMBER,
      },
      eventPeriod: {
        formType: FormType.DATE_RANGE_PICKER,
        validator: array().required(),
      },
      description: {
        formType: FormType.TEXT,
        initialValue: STRING.EMPTY,
      },
    },
    onSubmit: async ({
      connectedSpot,
      description,
      baseValue,
      subValue,
      eventPeriod,
    }) => {
      const spotCode = Number(connectedSpot?.value);
      const [from, to] = eventPeriod as RangeMoment;
      const period: PeriodArgs = {
        start: dateTimeFormat(from),
        end: dateTimeFormat(to),
      };
      try {
        if (type === "GET_FREE") {
          await creteGetFreeSpotEvent({
            spotCode,
            description,
            period,
            subValue,
            baseValue,
          });
        }
        if (type === "DISCOUNT") {
          await creteDiscountSpotEvent({
            spotCode,
            description,
            period,
          });
        }
        SuccessToast(STRING.CREATE_SUCCESS);
        onClose();
        afterOk?.();
      } catch (e) {
        ErrorToast(e);
      }
    },
  });

  const {
    values: { baseValue, subValue, eventPeriod },
  } = formik;

  const isInvalid =
    !formik.isValid ||
    !eventPeriod ||
    (isGetFreeType && (baseValue < 1 || subValue < 1));

  return (
    <CustomModal
      title={`${STRING.CREATE_NEW_EVENT}*`}
      okText={STRING.CREATE}
      okButtonDisable={isInvalid}
      onOk={formik.submitForm}
      visible={isVisible}
      onCancel={onClose}
    >
      <DescriptionRow label={`${STRING.EVENT_TYPE}*`}>
        <Radio.Group onChange={handleTypeChange} defaultValue={INITIAL_TYPE}>
          {recordToArray(EVENT_TYPE_TO_KO).map(([type, label]) => (
            <Radio.Button key={type} value={type}>
              {label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </DescriptionRow>
      <DescriptionRow label={`${STRING.CONNECTED_SPOT}*`}>
        <Form.connectedSpot
          options={spotOptions}
          onSearch={handleSearchKeywordChange}
        />
      </DescriptionRow>
      {/** N+N 이벤트일 경우 노출 */}
      {isGetFreeType && (
        <DescriptionRow label={`${STRING.GIFT_NUMBER}*`}>
          <Flex>
            <Flex style={numberInputStyle}>
              <Form.baseValue value={baseValue} />
            </Flex>
            <Flex alignItems={"center"}>{STRING.BUY_BASE_TEXT}</Flex>
            <Flex style={numberInputStyle} ml={20}>
              <Form.subValue value={subValue} />
            </Flex>
            <Flex alignItems={"center"}>{STRING.GIFT_TEXT}</Flex>
          </Flex>
        </DescriptionRow>
      )}
      <DescriptionRow label={`${STRING.SET_PERIOD}*`}>
        <Form.eventPeriod />
      </DescriptionRow>
      <DescriptionRow label={STRING.ADDITIONAL_DESCRIPTION}>
        <Form.description />
      </DescriptionRow>
    </CustomModal>
  );
}

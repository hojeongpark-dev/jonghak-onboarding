import { Card, Descriptions } from "antd";
import { toast } from "react-toastify";
import { number } from "yup";
import {
  CreateDiscountIndividualSpotEventArgs,
  IndividualSpotEvent,
  SpotItem,
  UpdateDiscountIndividualSpotEventArgs,
} from "../../../../graphql-types";
import STRING from "../../../../constants/strings";
import { wonPrice } from "../../../../util/price";
import DeleteConfirmSwitch from "../../../../components/common/DeleteConfirmSwitch";
import RightButton from "../../../../components/common/RightButton";
import Flex from "../../../../components/layout/styled/Flex";
import useForm from "../../../../hooks/useForm";
import { FormType } from "../../../../types/form/formType";
import ReservableTag from "../ReservabelTag";

interface SpotEventIndividualDiscountCardProps {
  item: SpotItem;
  loading: boolean;
  individualEvent?: IndividualSpotEvent;
  onEventDelete: (code: number) => void;
  onEventCreate: (
    args: Omit<CreateDiscountIndividualSpotEventArgs, "eventCode">
  ) => void;
  onUpdateBaseValue: (
    args: Omit<UpdateDiscountIndividualSpotEventArgs, "eventCode">
  ) => void;
}

export default function SpotEventIndividualDiscountCard({
  item,
  loading,
  individualEvent,
  onEventCreate,
  onEventDelete,
  onUpdateBaseValue,
}: SpotEventIndividualDiscountCardProps): JSX.Element {
  const { code, translations, isReservable, originalPrice, discountPrice } =
    item;

  const individualEventCode = Number(individualEvent?.code);

  const { Form, formik } = useForm({
    formInfo: {
      baseValue: {
        formType: FormType.NUMBER,
        placeholder: STRING.NUMBER_PLACEHOLDER,
        initialValue: individualEvent?.baseValue || undefined,
        validator: number().required().min(1),
      },
    },
    onSubmit: function handleUpdate({ baseValue }) {
      onUpdateBaseValue({
        baseValue,
        individualEventCode,
      });
    },
  });

  const {
    values: { baseValue },
  } = formik;

  const handleCreate = () => {
    if (baseValue && formik.isValid) {
      onEventCreate({ itemCode: code, baseValue });
    } else {
      toast.error(STRING.BASE_VALUE_ERROR);
    }
  };

  const handleDelete = async () => {
    await onEventDelete(individualEventCode);
    await formik.setFieldValue("baseValue", undefined);
  };

  return (
    <Card key={code}>
      <Descriptions bordered>
        <Descriptions.Item label={STRING.PRODUCT_NAME}>
          {translations.at(0)?.name}
        </Descriptions.Item>
        <Descriptions.Item label={STRING.IS_RESERVABLE}>
          <ReservableTag isReservable={isReservable} />
        </Descriptions.Item>
        <Descriptions.Item label={STRING.CREATE_NEW_EVENT}>
          <DeleteConfirmSwitch
            loading={loading}
            onCheck={handleCreate}
            onDelete={handleDelete}
            disabled={!formik.isValid}
            checked={!!individualEvent}
          />
        </Descriptions.Item>
        <Descriptions.Item label={STRING.OPTION_BASE_PRICE}>
          {wonPrice(originalPrice)}
        </Descriptions.Item>
        <Descriptions.Item label={STRING.DISCOUNT_PRICE}>
          {wonPrice(discountPrice)}
        </Descriptions.Item>
        <Descriptions.Item label={`${STRING.EVENT_PRICE}*`}>
          <Flex>
            <Form.baseValue allowClear={false} value={baseValue} />
            <RightButton
              loading={loading}
              disabled={!formik.isValid || !individualEvent}
              label={STRING.EDIT}
              onClick={formik.submitForm}
            />
          </Flex>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

import { Card, Descriptions } from "antd";
import { IndividualSpotEvent, SpotItem } from "../../../../graphql-types";
import STRING from "../../../../constants/strings";
import { wonPrice } from "../../../../util/price";
import DeleteConfirmSwitch from "../../../../components/common/DeleteConfirmSwitch";
import ReservableTag from "../ReservabelTag";

interface SpotEventIndividualGetFreeCardProps {
  item: SpotItem;
  loading: boolean;
  individualEvent?: IndividualSpotEvent;
  onEventCreate: (code: number) => void;
  onEventDelete: (individualEventCode: number) => void;
}

export default function SpotEventIndividualGetFreeCard({
  item,
  loading,
  individualEvent,
  onEventCreate,
  onEventDelete,
}: SpotEventIndividualGetFreeCardProps): JSX.Element {
  const { code, translations, isReservable, originalPrice, discountPrice } =
    item;

  const individualEventCode = Number(individualEvent?.code);

  const handleCreate = () => onEventCreate(code);

  const handleDelete = () => onEventDelete(individualEventCode);

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
            checked={!!individualEvent}
          />
        </Descriptions.Item>
        <Descriptions.Item label={STRING.OPTION_BASE_PRICE}>
          {wonPrice(originalPrice)}
        </Descriptions.Item>
        <Descriptions.Item label={STRING.DISCOUNT_PRICE}>
          {wonPrice(discountPrice)}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

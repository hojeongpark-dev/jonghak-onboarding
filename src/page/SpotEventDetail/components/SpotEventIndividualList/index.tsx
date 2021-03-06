import { Descriptions } from "antd";
import styled from "styled-components";
import { Fragment } from "react";
import {
  CreateDiscountIndividualSpotEventArgs,
  IndividualSpotEvent,
  SpotEventType,
  SpotItem,
  UpdateDiscountIndividualSpotEventArgs,
} from "../../../../graphql-types";
import { Nullable } from "../../../../types/null";
import STRING from "../../../../constants/strings";
import SpotEventIndividualDiscountCard from "../SpotEventIndividualDiscountCard";
import SpotEventIndividualGetFreeCard from "../SpotEventIndividualGetFreeCard";
import {
  useCreateDiscountIndividualSpotEvent,
  useCreateGetFreeIndividualSpotEvent,
  useDeleteIndividualSpotEvent,
  useUpdateDiscountIndividualSpotEvent,
} from "../../../../apiHooks/IndividualSpotEvent/useIndividualSpotEventMutations";
import { ErrorToast, SuccessToast } from "../../../../toast";

const ListLayout = styled.section`
  display: flex;
  flex-direction: column;
`;
const ListHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: #e6e6e6;
  margin-top: 30px;
`;

interface SpotEventIndividualListProps {
  type: SpotEventType;
  eventCode: number;
  refetch: () => void;
  spotItems?: Nullable<SpotItem[]>;
  individualEvents: IndividualSpotEvent[];
}

export default function SpotEventIndividualList({
  type,
  refetch,
  eventCode,
  spotItems,
  individualEvents,
}: SpotEventIndividualListProps): JSX.Element {
  const { creteDiscountIndividualSpotEvent, loading: discountCreateLoading } =
    useCreateDiscountIndividualSpotEvent();
  const { creteGetFreeIndividualSpotEvent, loading: getFreeCreateLoading } =
    useCreateGetFreeIndividualSpotEvent();
  const { deleteIndividualSpotEvent, loading: deleteLoading } =
    useDeleteIndividualSpotEvent();
  const { updateDiscountIndividualSpotEvent, loading: discountUpdateLoading } =
    useUpdateDiscountIndividualSpotEvent();

  const handleCreateDiscountIndividualSpotEvent = async ({
    itemCode,
    baseValue,
  }: Omit<CreateDiscountIndividualSpotEventArgs, "eventCode">) => {
    try {
      await creteDiscountIndividualSpotEvent({
        eventCode,
        itemCode,
        baseValue,
      });
      SuccessToast(STRING.CREATE_SUCCESS);
      await refetch();
    } catch (e) {
      ErrorToast(e);
    }
  };
  const handleCreateGetFreeIndividualSpotEvent = async (itemCode: number) => {
    try {
      await creteGetFreeIndividualSpotEvent({
        eventCode,
        itemCode,
      });
      SuccessToast(STRING.CREATE_SUCCESS);
      await refetch();
    } catch (e) {
      ErrorToast(e);
    }
  };

  const handleDeleteEvent = async (individualEventCode: number) => {
    try {
      await deleteIndividualSpotEvent({
        eventCode,
        individualEventCode,
      });
      SuccessToast(STRING.DELETE_SUCCESS);
      await refetch();
    } catch (e) {
      ErrorToast(e);
    }
  };

  const handleUpdateBaseValue = async ({
    individualEventCode,
    baseValue,
  }: Omit<UpdateDiscountIndividualSpotEventArgs, "eventCode">) => {
    try {
      await updateDiscountIndividualSpotEvent({
        eventCode,
        individualEventCode,
        baseValue,
      });
      SuccessToast(STRING.UPDATE_SUCCESS);
      await refetch();
    } catch (e) {
      ErrorToast(e);
    }
  };

  const getIndividualEvent = (itemCode: number) =>
    individualEvents.find(({ item }) => item.code === itemCode);

  const loading =
    getFreeCreateLoading ||
    deleteLoading ||
    discountCreateLoading ||
    deleteLoading ||
    discountUpdateLoading;
  return (
    <ListLayout>
      <ListHeader>????????? ?????? ??????</ListHeader>
      <div>
        <Descriptions bordered>
          <Descriptions.Item label={STRING.REPRESENTATIVE_PRODUCT_ORIGIN_PRICE}>
            ???
          </Descriptions.Item>
          <Descriptions.Item label={STRING.REPRESENTATIVE_PRODUCT_DC_PRICE}>
            ???
          </Descriptions.Item>
        </Descriptions>
      </div>
      {spotItems?.map((item) => {
        const individualEvent = getIndividualEvent(item.code);
        return (
          <Fragment key={item.code}>
            {type === "GET_FREE" ? (
              <SpotEventIndividualGetFreeCard
                item={item}
                loading={loading}
                individualEvent={individualEvent}
                onEventDelete={handleDeleteEvent}
                onEventCreate={handleCreateGetFreeIndividualSpotEvent}
              />
            ) : (
              <SpotEventIndividualDiscountCard
                item={item}
                loading={loading}
                individualEvent={individualEvent}
                onUpdateBaseValue={handleUpdateBaseValue}
                onEventDelete={handleDeleteEvent}
                onEventCreate={handleCreateDiscountIndividualSpotEvent}
              />
            )}
          </Fragment>
        );
      })}
    </ListLayout>
  );
}

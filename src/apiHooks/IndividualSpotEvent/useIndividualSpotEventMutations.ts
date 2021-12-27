import { gql, useMutation } from "@apollo/client";
import { SpotEventProductIndividualEvent } from "../../graphql/fragments";
import {
  CreateDiscountIndividualSpotEventArgs,
  CreateGetFreeIndividualSpotEventArgs,
  DeleteIndividualSpotEventArgs,
  Mutation,
  MutationCreateDiscountIndividualSpotEventArgs,
  MutationCreateGetFreeIndividualSpotEventArgs,
  MutationDeleteIndividualSpotEventArgs,
  MutationUpdateDiscountIndividualSpotEventArgs,
  UpdateDiscountIndividualSpotEventArgs,
} from "../../graphql-types";

const CREATE_DISCOUNT_INDIVIDUAL_SPOT_EVENT = gql`
  ${SpotEventProductIndividualEvent}
  mutation createDiscountIndividualSpotEvent(
    $input: CreateDiscountIndividualSpotEventArgs!
  ) {
    createDiscountIndividualSpotEvent(input: $input) {
      code
      baseValue
      event {
        code
        individuals {
          ...SpotEventProduct_individualEvent
        }
      }
    }
  }
`;

function useCreateDiscountIndividualSpotEvent() {
  const [create, { loading }] = useMutation<
    Mutation,
    MutationCreateDiscountIndividualSpotEventArgs
  >(CREATE_DISCOUNT_INDIVIDUAL_SPOT_EVENT);

  const creteDiscountIndividualSpotEvent = (
    input: CreateDiscountIndividualSpotEventArgs
  ) =>
    create({
      variables: {
        input,
      },
    });

  return { creteDiscountIndividualSpotEvent, loading };
}

const CREATE_GET_FREE_INDIVIDUAL_SPOT_EVENT = gql`
  ${SpotEventProductIndividualEvent}
  mutation createGetFreeIndividualSpotEvent(
    $input: CreateGetFreeIndividualSpotEventArgs!
  ) {
    createGetFreeIndividualSpotEvent(input: $input) {
      code
      baseValue
      event {
        code
        individuals {
          ...SpotEventProduct_individualEvent
        }
      }
    }
  }
`;

function useCreateGetFreeIndividualSpotEvent() {
  const [create, { loading }] = useMutation<
    Mutation,
    MutationCreateGetFreeIndividualSpotEventArgs
  >(CREATE_GET_FREE_INDIVIDUAL_SPOT_EVENT);

  const creteGetFreeIndividualSpotEvent = (
    input: CreateGetFreeIndividualSpotEventArgs
  ) =>
    create({
      variables: {
        input,
      },
    });

  return { creteGetFreeIndividualSpotEvent, loading };
}

const DELETE_INDIVIDUAL_SPOT_EVENT = gql`
  mutation deleteIndividualSpotEvent($input: DeleteIndividualSpotEventArgs!) {
    deleteIndividualSpotEvent(input: $input) {
      code
    }
  }
`;

function useDeleteIndividualSpotEvent() {
  const [deleteEvent, { loading }] = useMutation<
    Mutation,
    MutationDeleteIndividualSpotEventArgs
  >(DELETE_INDIVIDUAL_SPOT_EVENT);

  const deleteIndividualSpotEvent = (input: DeleteIndividualSpotEventArgs) =>
    deleteEvent({
      variables: {
        input,
      },
    });

  return { deleteIndividualSpotEvent, loading };
}

const UPDATE_DISCOUNT_INDIVIDUAL_SPOT_EVENT = gql`
  mutation updateDiscountIndividualSpotEvent(
    $input: UpdateDiscountIndividualSpotEventArgs!
  ) {
    updateDiscountIndividualSpotEvent(input: $input) {
      code
    }
  }
`;

function useUpdateDiscountIndividualSpotEvent() {
  const [update, { loading }] = useMutation<
    Mutation,
    MutationUpdateDiscountIndividualSpotEventArgs
  >(UPDATE_DISCOUNT_INDIVIDUAL_SPOT_EVENT);

  const updateDiscountIndividualSpotEvent = (
    input: UpdateDiscountIndividualSpotEventArgs
  ) =>
    update({
      variables: {
        input,
      },
    });

  return { updateDiscountIndividualSpotEvent, loading };
}

export {
  useDeleteIndividualSpotEvent,
  useUpdateDiscountIndividualSpotEvent,
  useCreateDiscountIndividualSpotEvent,
  useCreateGetFreeIndividualSpotEvent,
};

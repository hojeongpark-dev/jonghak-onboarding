import { gql, useMutation } from "@apollo/client";
import {
  CreateDiscountSpotEventArgs,
  CreateGetFreeSpotEventArgs,
  Mutation,
  MutationCloseEventArgs,
  MutationCreateDiscountSpotEventArgs,
  MutationCreateGetFreeSpotEventArgs,
  MutationDeleteSpotEventArgs,
  MutationUpdateDiscountSpotEventArgs,
  MutationUpdateGetFreeSpotEventArgs,
  UpdateDiscountSpotEventArgs,
  UpdateGetFreeSpotEventArgs,
} from "../../graphql-types";

const DELETE_SPOT = gql`
  mutation deleteSpot($code: Int!) {
    deleteSpotEvent(code: $code)
  }
`;

function useDeleteSpotEventMutations() {
  const [deleteSpotEventMutation] = useMutation<
    Mutation,
    MutationDeleteSpotEventArgs
  >(DELETE_SPOT);

  const deleteSpotEvent = (code: number) =>
    deleteSpotEventMutation({
      variables: {
        code,
      },
    });

  return { deleteSpotEvent };
}

const CREATE_DISCOUNT_SPOT_EVENT = gql`
  mutation createDiscountSpotEvent($input: CreateDiscountSpotEventArgs!) {
    createDiscountSpotEvent(input: $input) {
      code
    }
  }
`;

function useCreateDiscountSpotEventMutations() {
  const [create] = useMutation<Mutation, MutationCreateDiscountSpotEventArgs>(
    CREATE_DISCOUNT_SPOT_EVENT
  );

  const creteDiscountSpotEvent = ({
    description,
    spotCode,
    period,
  }: CreateDiscountSpotEventArgs) =>
    create({
      variables: {
        input: {
          description,
          period,
          spotCode,
        },
      },
    });

  return { creteDiscountSpotEvent };
}

const ClOSE_SPOT_EVENT = gql`
  mutation createDiscountSpotEvent($code: Int!) {
    closeEvent(code: $code) {
      code
      status
    }
  }
`;

function useCloseSpotEventMutations() {
  const [close, { loading }] = useMutation<Mutation, MutationCloseEventArgs>(
    ClOSE_SPOT_EVENT
  );

  const closeSpotEvent = (code: number) =>
    close({
      variables: {
        code,
      },
    });

  return { closeSpotEvent, loading };
}

const CREATE_GET_FREE_SPOT_EVENT = gql`
  mutation createGetFreeSpotEvent($input: CreateGetFreeSpotEventArgs!) {
    createGetFreeSpotEvent(input: $input) {
      code
    }
  }
`;

function useCreateGetFreeSpotEventMutations() {
  const [create] = useMutation<Mutation, MutationCreateGetFreeSpotEventArgs>(
    CREATE_GET_FREE_SPOT_EVENT
  );

  const creteGetFreeSpotEvent = ({
    description,
    spotCode,
    period,
    baseValue,
    subValue,
  }: CreateGetFreeSpotEventArgs) =>
    create({
      variables: {
        input: {
          baseValue,
          subValue,
          description,
          period,
          spotCode,
        },
      },
    });

  return { creteGetFreeSpotEvent };
}

const UPDATE_DISCOUNT_SPOT_EVENT = gql`
  mutation updateDiscountSpotEvent($input: UpdateDiscountSpotEventArgs!) {
    updateDiscountSpotEvent(input: $input) {
      code
      description
      start
      end
    }
  }
`;

function useUpdateDiscountSpotEvent() {
  const [update, { loading }] = useMutation<
    Mutation,
    MutationUpdateDiscountSpotEventArgs
  >(UPDATE_DISCOUNT_SPOT_EVENT);

  const updateDiscountSpotEvent = ({
    code,
    description,
    period,
  }: UpdateDiscountSpotEventArgs) =>
    update({
      variables: {
        input: {
          code,
          description,
          period,
        },
      },
    });

  return { updateDiscountSpotEvent, loading };
}
const UPDATE_GET_FREE_SPOT_EVENT = gql`
  mutation updateGetFreeSpotEvent($input: UpdateGetFreeSpotEventArgs!) {
    updateGetFreeSpotEvent(input: $input) {
      code
      description
      start
      end
    }
  }
`;

function useUpdateGetFreeSpotEvent() {
  const [update, { loading }] = useMutation<
    Mutation,
    MutationUpdateGetFreeSpotEventArgs
  >(UPDATE_GET_FREE_SPOT_EVENT);

  const updateGetFreeSpotEvent = (input: UpdateGetFreeSpotEventArgs) =>
    update({
      variables: {
        input,
      },
    });

  return { updateGetFreeSpotEvent, loading };
}

export {
  useDeleteSpotEventMutations,
  useCloseSpotEventMutations,
  useUpdateDiscountSpotEvent,
  useUpdateGetFreeSpotEvent,
  useCreateDiscountSpotEventMutations,
  useCreateGetFreeSpotEventMutations,
};

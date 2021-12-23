import { gql, useMutation } from "@apollo/client";
import {
  CreateTipArgs,
  Mutation,
  MutationCreateTipArgs,
  MutationDeleteTipArgs,
  MutationToggleTipActiveStatusArgs,
} from "../../graphql-types";

const DELETE_TIP = gql`
  mutation deleteTip($code: Int!) {
    deleteTip(code: $code)
  }
`;

function useDeleteTipMutation() {
  const [deleteTip, { data, loading, error }] = useMutation<
    Mutation,
    MutationDeleteTipArgs
  >(DELETE_TIP);

  const requestDelete = (code: number) => deleteTip({
    variables: {
      code,
    },
  });

  const res = data?.deleteTip;

  return {
    res,
    loading,
    error,
    requestDelete,
  };
}

const TOGGLE_TIP_ACTIVE = gql`
  mutation toggleTipActiveStatus($code: Int!) {
    toggleTipActiveStatus(code: $code) {
      code
      isActive
    }
  }
`;

function useToggleTipActiveMutation() {
  const [toggle, { data, loading, error }] = useMutation<
    Mutation,
    MutationToggleTipActiveStatusArgs
  >(TOGGLE_TIP_ACTIVE);

  const toggleTipActive = (code: number) => toggle({
    variables: {
      code,
    },
  });

  const res = data?.toggleTipActiveStatus;

  return {
    res,
    loading,
    error,
    toggleTipActive,
  };
}

const CREATE_TIP = gql`
  mutation createTip($input: CreateTipArgs!) {
    createTip(input: $input) {
      code
      title
      createdAt
      isActive
    }
  }
`;

function useCreateTipMutation() {
  const [create, { data, loading, error }] = useMutation<
    Mutation,
    MutationCreateTipArgs
  >(CREATE_TIP);

  const createTip = (input: CreateTipArgs) => create({
    variables: {
      input,
    },
  });

  return {
    createTip,
    data,
    loading,
    error,
  };
}

export {
  useDeleteTipMutation,
  useToggleTipActiveMutation,
  useCreateTipMutation,
};

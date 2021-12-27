import { gql, useMutation } from "@apollo/client";
import {
  CreateTipArgs,
  Mutation,
  MutationCreateTipArgs,
  MutationDeleteTipArgs,
  MutationSetBlogTransToTipArgs,
  MutationSetTipImageArgs,
  MutationToggleTipActiveStatusArgs,
  MutationUpdateTipArgs,
} from "../../graphql-types";
import { TipFragment } from "../../graphql/fragments";

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

  const requestDelete = (code: number) =>
    deleteTip({
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

const UPDATE_TIP_TITLE = gql`
  ${TipFragment}
  mutation updateTip($input: UpdateTipArgs!) {
    updateTip(input: $input) {
      ...TipTable_tip
    }
  }
`;

const UPDATE_TIP_ACTIVE = gql`
  mutation toggleTipActiveStatus($code: Int!) {
    toggleTipActiveStatus(code: $code) {
      code
    }
  }
`;

const UPDATE_TIP_BlOG = gql`
  mutation setTipBlogTrans($input: SetBlogTransToTipArgs!) {
    setBlogTransToTip(input: $input) {
      code
    }
  }
`;

const UPDATE_TIP_IMAGE = gql`
  mutation setTipImage($input: SetTipImageArgs!) {
    setTipImage(input: $input) {
      code
      imageUrl
    }
  }
`;

interface CustomUpdateTipArgs {
  code: number;
  title?: string;
  blogTransCode?: number;
  toggleActive?: boolean;
  imageUrl?: string;
}

function useTipUpdateMutation() {
  const [updateTipTitle, { loading: titleLoading }] = useMutation<
    Mutation,
    MutationUpdateTipArgs
  >(UPDATE_TIP_TITLE);
  const [updateTipImage, { loading: imageLoading }] = useMutation<
    Mutation,
    MutationSetTipImageArgs
  >(UPDATE_TIP_IMAGE);
  const [updateTipBlog, { loading: blogLoading }] = useMutation<
    Mutation,
    MutationSetBlogTransToTipArgs
  >(UPDATE_TIP_BlOG);

  const [updateTipActive, { loading: activeLoading }] = useMutation<
    Mutation,
    MutationToggleTipActiveStatusArgs
  >(UPDATE_TIP_ACTIVE);

  const loading = titleLoading || imageLoading || blogLoading || activeLoading;

  const updateTip = ({
    title,
    code,
    blogTransCode,
    toggleActive,
    imageUrl,
  }: CustomUpdateTipArgs) =>
    Promise.all([
      ...[
        title === undefined ||
          updateTipTitle({ variables: { input: { tipCode: code, title } } }),
        blogTransCode === undefined ||
          updateTipBlog({
            variables: { input: { tipCode: code, blogTransCode } },
          }),
        toggleActive === undefined || updateTipActive({ variables: { code } }),
        imageUrl === undefined ||
          updateTipImage({
            variables: {
              input: {
                tipCode: code,
                imageUrl,
              },
            },
          }),
      ],
    ]);

  return { updateTip, loading };
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

  const createTip = (input: CreateTipArgs) =>
    create({
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

export { useDeleteTipMutation, useTipUpdateMutation, useCreateTipMutation };

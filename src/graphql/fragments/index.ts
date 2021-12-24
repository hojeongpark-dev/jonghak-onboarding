import { gql } from "@apollo/client";

export const TipTable = gql`
  fragment TipTable_tips on TipPage {
    totalCount
    edges {
      code
      createdAt
      title
      isActive
      manager {
        code
        nickname
        name
      }
    }
  }
`;
export const Tip = gql`
  fragment TipTable_tip on Tip {
    blogTrans {
      title
      code
      blogCode
    }
    manager {
      name
      nickname
    }
    language
    code
    createdAt
    isActive
    title
    imageUrl
  }
`;

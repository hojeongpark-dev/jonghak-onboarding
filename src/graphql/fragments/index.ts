import { gql } from "@apollo/client";

export const TipsFragment = gql`
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
export const TipFragment = gql`
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

export const SpotEventFragment = gql`
  fragment SpotEventTable_spotEvent on SpotEvent {
    code
    type
    spot {
      code
      translations(language: $language) {
        name
      }
    }
    start
    end
    status
    manager {
      code
      name
      nickname
    }
  }
`;

export const SpotFragment = gql`
  fragment SpotTable_spot on Spot {
    code
    createdAt
    viewCount
    latitude
    isReservable
    translations(language: $language) {
      code
      name
      isPublish
      isRecommend
      renewalDate
    }
  }
`;

export const SpotEventProduct = gql`
  fragment SpotEventProduct_product on SpotItem {
    code
    discountPrice
    originalPrice
    isMain
    isReservable
    translations(language: $language) {
      name
    }
    parentCode
  }
`;

export const SpotEventProductIndividualEvent = gql`
  fragment SpotEventProduct_individualEvent on IndividualSpotEvent {
    code
    baseValue
    item {
      code
    }
  }
`;

import { gql } from "@apollo/client";

// eslint-disable-next-line import/prefer-default-export
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

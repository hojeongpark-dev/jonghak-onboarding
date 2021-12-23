import { gql, useQuery } from "@apollo/client";
import {
  BlogPageArgs,
  BlogTranslationsArgs,
  Query,
  QueryBlogsArgs,
} from "../../graphql-types";

const BLOG_FOR_SEARCH = gql`
  query blogForSearch($input: BlogPageArgs!, $language: LanguageType!) {
    blogs(input: $input) {
      totalCount
      edges {
        translations(language: $language) {
          code
          title
        }
      }
    }
  }
`;

export default function useBlogForSearchQuery(input: BlogPageArgs) {
  const { data, error, loading } = useQuery<
    Query,
    QueryBlogsArgs & BlogTranslationsArgs
  >(BLOG_FOR_SEARCH, { variables: { language: input.filter.language, input } });

  const blogs = data?.blogs.edges;
  return {
    blogs,
    loading,
    error,
  };
}

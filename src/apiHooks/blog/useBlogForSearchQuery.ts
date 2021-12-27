import { gql, useQuery } from "@apollo/client";
import {
  BlogTranslationsArgs,
  Query,
  QueryBlogsArgs,
} from "../../graphql-types";
import { SelectOptionItem } from "../../types/form/inputProps";

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

export default function useBlogForSearchQuery(
  initialArgs: QueryBlogsArgs & BlogTranslationsArgs
) {
  const { data, error, loading, refetch } = useQuery<
    Query,
    QueryBlogsArgs & BlogTranslationsArgs
  >(BLOG_FOR_SEARCH, {
    variables: initialArgs,
  });

  const blogs = data?.blogs.edges;

  const blogOptions: SelectOptionItem[] | undefined = blogs?.map(
    ({ translations }) => ({
      value: `${translations?.at(0)?.code}`,
      label: `${translations?.at(0)?.title}`,
    })
  );
  return {
    refetch,
    blogOptions,
    blogs,
    loading,
    error,
  };
}

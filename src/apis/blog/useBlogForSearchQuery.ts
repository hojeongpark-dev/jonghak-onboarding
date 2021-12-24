import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  BlogTranslationsArgs,
  LanguageType,
  Query,
  QueryBlogsArgs,
} from "../../graphql-types";
import { DEFAULT_LIMIT_SIZE } from "../../constants/list";
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
  language: LanguageType = "KOREAN"
) {
  const [blogSearchKeyword, setBlogSearchKeyword] = useState("");
  const { data, error, loading } = useQuery<
    Query,
    QueryBlogsArgs & BlogTranslationsArgs
  >(BLOG_FOR_SEARCH, {
    variables: {
      input: {
        limit: DEFAULT_LIMIT_SIZE,
        page: 1,
        filter: {
          title: blogSearchKeyword,
          language,
        },
      },
      language,
    },
  });

  const blogs = data?.blogs.edges;

  const blogOptions: SelectOptionItem[] | undefined = blogs?.map(
    ({ translations }) => ({
      value: `${translations?.at(0)?.code}`,
      label: `${translations?.at(0)?.title}`,
    })
  );
  return {
    setBlogSearchKeyword,
    blogOptions,
    blogs,
    loading,
    error,
  };
}

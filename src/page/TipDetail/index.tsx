import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useImmer } from "use-immer";
import useTipQuery from "../../apiHooks/tip/useTipQuery";
import { URLS } from "../../constants/urls";
import CategoryFilter from "../../components/common/CategoryFilter";
import { languageCategoriesKo } from "../Tip/constants";
import useBlogForSearchQuery from "../../apiHooks/blog/useBlogForSearchQuery";
import TipDetailForms from "./components/TipDetailForms";
import Loading from "../../components/common/Loading";
import { DEFAULT_LIMIT_SIZE, INITIAL_PAGE_INDEX } from "../../constants/list";
import STRING from "../../constants/strings";
import useWhenUpdate from "../../hooks/useWhenUpdate";
import { ErrorToast } from "../../toast";

export default function TipDetail(): JSX.Element {
  const { code } = useParams();
  const navigate = useNavigate();
  const {
    tip,
    refetch: refetchTip,
    error,
    loading,
  } = useTipQuery(Number(code));

  const tipLanguage = tip?.language || "KOREAN";

  const [blogQueryArgs, setBlogQueryArgs] = useImmer({
    input: {
      limit: DEFAULT_LIMIT_SIZE,
      page: INITIAL_PAGE_INDEX,
      filter: {
        title: STRING.EMPTY,
        language: tipLanguage,
      },
    },
    language: tipLanguage,
  });
  const { blogOptions, refetch: refetchBlog } =
    useBlogForSearchQuery(blogQueryArgs);

  const handleBlogSearchKeywordChange = (keyword: string) => {
    setBlogQueryArgs((prev) => {
      prev.input.filter.title = keyword;
    });
  };

  useWhenUpdate(() => {
    refetchBlog(blogQueryArgs).catch(ErrorToast);
  }, [blogQueryArgs]);

  // loading 이 변경된 경우에만 error를 체크하는 이유? 유저 입장에서는 갑자기 리다이렉트 될텐데 알림 같은걸 띄워줬으면,,
  useEffect(() => {
    if (error) navigate(URLS.TIP);
  }, [loading]);

  if (loading) return <Loading />;
  if (!tip) return <div>404</div>;

  return (
    <>
      <CategoryFilter
        defaultSelectedKeys={[tip.language]}
        categories={{ [tip.language]: languageCategoriesKo[tip.language] }}
      />
      <TipDetailForms
        tip={tip}
        blogOptions={blogOptions}
        onUpdate={refetchTip}
        onBlogSearch={handleBlogSearchKeywordChange}
      />
    </>
  );
}

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useTipQuery from "../../apiHooks/tip/useTipQuery";
import { URLS } from "../../constants/urls";
import CenterLayout from "../../components/layout/styled/CenterLayout";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import CategoryFilter from "../../components/common/CategoryFilter";
import { languageCategoriesKo } from "../Tip/constants";
import useBlogForSearchQuery from "../../apiHooks/blog/useBlogForSearchQuery";
import TipDetailForms from "./components/TipDetailForms";

function Loading() {
  return (
    <CenterLayout>
      <LoadingSpinner />
    </CenterLayout>
  );
}

export default function TipDetail(): JSX.Element {
  const { code } = useParams();
  const navigate = useNavigate();
  const { tip, refresh, error, loading } = useTipQuery({ code: Number(code) });
  const { blogOptions, setBlogSearchKeyword } = useBlogForSearchQuery(
    tip?.language
  );

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
        onUpdate={() => refresh(Number(code))}
        blogOptions={blogOptions}
        onSearch={setBlogSearchKeyword}
      />
    </>
  );
}

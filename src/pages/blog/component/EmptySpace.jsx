import { useEffect, useState } from "react";
import { getPosts } from "../../../services/blogServices";
import PageLayout from "../../../components/Layout/PageLayout";

async function allArticles(setAllArticle) {
  getPosts().then((response) => {
    setAllArticle(response);
  });
}
export default function EmptySpace({ errorMesaage }) {
  const [allArticle, setAllArticle] = useState([]);

  useEffect(() => {
    allArticles(setAllArticle);
  }, []);
  return (
    allArticle.length == 0 && (
      <PageLayout>
        <div className="lg:pt-36 lg:pb-28 pt-28 pb-16 w-full bg-[#f1f3f9]">
          <div className="h-[200px] bg-neutral-500 rounded-md w-full max-w-6xl mx-auto grid place-content-center text-neutral-100 p-5">
            <p className="text-sm text-center font-light text-neutral-100">
              There are no available articles right now
            </p>
          </div>
        </div>
      </PageLayout>
    )
  );
}

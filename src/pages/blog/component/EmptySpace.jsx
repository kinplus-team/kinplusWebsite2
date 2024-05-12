import { useEffect, useState } from "react";
import { getPosts } from "../../../services/blogServices";
import PageLayout from "../../../components/Layout/PageLayout";
import noData from "../../../assets/no_data.svg";

async function allArticles(setAllArticle) {
  getPosts().then((response) => {
    setAllArticle(response);
  });
}
export default function EmptySpace({ errorMesaage }) {
  const [allArticle, setAllArticle] = useState([]);

  // useEffect(() => {
  //   allArticles(setAllArticle);
  // }, []);
  return (
    allArticle.length == 0 && (
      <PageLayout>
        <div className="lg:pt-36 lg:pb-28 py-5 w-full bg-[#f1f3f9]">
          <div className="grid min-h-[60vh] pt-10 w-full">
            <div className="grid items-center">
              <div className="relative w-40 mx-auto md:w-60 place-self-center">
                <img
                  src={noData}
                  width={1000}
                  height={1000}
                  alt="Illustration"
                />
              </div>
              <p className="text-xl pl-5 mt-5 md:text-2xl md:pl-12 place-self-center">
                There are no articles
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    )
  );
}

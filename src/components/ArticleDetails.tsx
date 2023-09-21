import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { IArticle } from "../interfaces/IArticle";

const ArticleDetails = () => {
    const params = useParams<{ articleId: string }>()
    const [article, setArticle] = useState<IArticle | null>(null);

  const fetchArticle = async () => {
    try {
        const fetchUrl = "https://api.spaceflightnewsapi.net/v4/articles/" + params.articleId
      const resp = await fetch(fetchUrl);
      if (resp.ok) {
        const articleFromAPI = await resp.json();
        setArticle(articleFromAPI);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);
    return (
        <>
        {article && 
            <>
                <h1 className="mb-4">{article.title}</h1>
                <p>{article.news_site}</p>
                <p>{article.summary}</p>
                <img src={`${article.image_url}`} alt="article image" className="my-4 img-fluid" />
                <p>{(new Date(article.published_at)).toLocaleString()}</p>
            </>
            }
        </>
    )
}

export default ArticleDetails
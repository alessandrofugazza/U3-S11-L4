import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";

interface SingleArticleProps {
  article: IArticle;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  return (
    <article className="mb-5 border border-primary p-5"> 
      <Link to={`/articles/${article.id}`}> <h3 className="mb-4">{article.title}</h3></Link>
      <p>{article.summary}</p>
      <img src={`${article.image_url}`} alt="article image" className="my-4 img-fluid" />
      <p>{(new Date(article.published_at)).toLocaleString()}</p>
    </article>
  );
};

export default SingleArticle;
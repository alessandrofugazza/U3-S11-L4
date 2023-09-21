import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import SingleArticle from "./SingleArticle";

const ArticlesList = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const articlesFromAPI = await resp.json();
        setArticles(articlesFromAPI.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <h1 className="text-center my-5">Articles :D</h1>
        </Col>
      </Row>
      <Row>
        {articles.map(article => (
          <Col xs={12} md={{ span: 6, offset: 3 }} key={`id-${article.id}`}>
            <SingleArticle article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ArticlesList;
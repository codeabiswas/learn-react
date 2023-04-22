import { Container } from "react-bootstrap";
import articles from "./article-content";
import { Link } from "react-router-dom";
import ArticlePage from "./ArticlePage";
import ArticlesList from "../components/ArticlesList";

// Defining as function components since class components are becoming outdated.
const ArticlesListPage = () => {
  return (
    <>
      <Container fluid>
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
      </Container>
    </>
  );
};

export default ArticlesListPage;

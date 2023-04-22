import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

// Defining as function components since class components are becoming outdated.
const ArticlePage = () => {
  // This retrieves the URL parameter. The Route item's URL has :articleId, which is what this is retrieving
  const { articleId } = useParams();

  const article = articles.find((article) => article.name === articleId);

  //   If article was not found, show 404 page
  if (!article) {
    return <NotFoundPage />;
  }

  return (
    // Empty <> is a React Fragment. It is just meant for situations like this where multiple items need to be returned without any HTML object associated with it
    <>
      <Container fluid>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Container>
    </>
  );
};

export default ArticlePage;

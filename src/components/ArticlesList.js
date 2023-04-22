import { Link } from "react-router-dom";

// Import articles as a prop
const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        // Remember that when dynamically mapping things, add a unique key
        <Link key={article.name} to={`/articles/${article.name}`}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150) + "..."}</p>
        </Link>
      ))}
    </>
  );
};

export default ArticlesList;

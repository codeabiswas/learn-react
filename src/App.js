import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ContactPage from "./pages/ContactPage";
import NavigationBar from "./NavigationBar";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // React Router Dom enables client side rendering
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesListPage />} />
        {/* URL parameter :articleId */}
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* For all paths not defined above, show the Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

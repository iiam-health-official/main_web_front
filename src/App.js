import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./Pages/LandingPage";
import NewsPage from "./Pages/NewsPage";
import ProductPage from "./Pages/ProductPage";
import AboutUs from "./Pages/TeamPage";
import BookADemo from "./Pages/BookDemo";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "";
        break;
      case "/news-page":
        title = "News";
        metaDescription = "";
        break;
      case "/product-page":
        title = "Product";
        metaDescription = "";
        break;
      case "/about-page":
        title = "About";
        metaDescription = "";
        break;
      case "/demo-page":
        title = "Book a Demo";
        metaDescription = "";
        break;
      default:
        title = "404 Not Found";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/news-page" element={<NewsPage />} />
      <Route path="/product-page" element={<ProductPage />} />
      <Route path="/about-page" element={<AboutUs />} />
      <Route path="/demo-page" element={<BookADemo />} />
    </Routes>
  );
}
export default App;

import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BackgroundImage from "./Components/Background";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

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

    /* switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    } */

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <BackgroundImage />
      <Navbar />
      <Main />
    </div>
  );
}
export default App;

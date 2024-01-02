import PageType from "./pages/PageType";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleDetails from "./Components/ArticleDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageType />}>
          <Route path=":articletitle" element={<ArticleDetails />} />
        </Route>
        <Route path="/react" element={<PageType />}>
          <Route path=":articletitle" element={<ArticleDetails />} />
        </Route>
        <Route path="/react-native" element={<PageType />}>
          <Route path=":articletitle" element={<ArticleDetails />} />
        </Route>
        <Route path="/javascript" element={<PageType />}>
          <Route path=":articletitle" element={<ArticleDetails />} />
        </Route>
        <Route path="/css" element={<PageType />}>
          <Route path=":articletitle" element={<ArticleDetails />} />
        </Route>
        <Route path="/html" element={<PageType />}>
          <Route path=":articletitle" element={<ArticleDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DemoWedding from "./pages/wedding/wd-1/DemoWedding";
import WD_2 from "./pages/wedding/wd-2/index";
import CatalogPage from "./pages/catalog/catalog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wedding/wd-2" element={<WD_2 />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
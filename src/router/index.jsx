import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductPage, FormPage } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<FormPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
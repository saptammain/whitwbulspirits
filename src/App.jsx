import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import ComingSoon from "./components/comingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

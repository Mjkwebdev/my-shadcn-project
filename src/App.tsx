import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./MainComponent/Hero";
import SearchPage from "./MainComponent/Search";
import DetailPage from "./MainComponent/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail/:slug" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

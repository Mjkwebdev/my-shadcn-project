import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./MainComponent/Hero";
import SearchPage from "./MainComponent/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

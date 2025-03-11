import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./MainComponent/Hero";
import SearchPage from "./MainComponent/Search";
import DetailPage from "./MainComponent/Detail";
import Booking from "./MainComponent/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail/:slug" element={<DetailPage/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

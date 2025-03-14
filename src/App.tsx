import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./MainComponent/Hero";
import SearchPage from "./MainComponent/Search";
import DetailPage from "./MainComponent/Detail";
import Booking from "./MainComponent/Booking";
import Layout from "./MainComponent/Layout/Layout";
import Home from "./MainComponent/Home";
import MyBooking from "./MainComponent/MyBooking";
import BookASunbed from "./MainComponent/BookASunbed";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/detail/:slug" element={<DetailPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/my-bookings" element={<MyBooking />} />
          <Route path="/book-sunbed" element={<BookASunbed />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

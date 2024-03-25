import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import FavoritList from "./components/FavoritList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        {/* <Route path="/favoritlist" element={<FavoriteList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

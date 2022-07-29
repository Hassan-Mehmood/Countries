import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Country from "./Pages/Country";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";

export const SearchContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("All");
  return (
    <div>
      <SearchContext.Provider
        value={{ searchTerm, setSearchTerm, filterRegion, setFilterRegion }}
      >
        <BrowserRouter>
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route
              path="/"
              element={<Home theme={theme} setTheme={setTheme} />}
            ></Route>
            <Route
              path="/country/:name"
              element={<Country theme={theme} setTheme={setTheme} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

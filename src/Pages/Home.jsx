import SearchField from "../components/SearchField/SearchField";
import Cards from "../components/Cards/Cards";

function Home({ theme, setTheme }) {
  return (
    <div
      className={`${
        theme === "light" ? "backgroundLightGray" : "backgroundDark"
      }`}
    >
      <SearchField theme={theme} setTheme={setTheme} />
      <Cards theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default Home;

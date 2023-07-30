import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Sidebar from "../public/components/Sidebar";
import SearchInput from "../public/components/SearchInput";
import MovieCard from "../public/components/MovieCard";
import { MoviesContext } from "./context/MoviesContext";

function App() {
  const { logout } = useContext(UserContext);
  const { data } = useContext(MoviesContext);
  console.log(data);
  return (
    <div className="wrap">
      <Sidebar></Sidebar>

      <div className="mainContentBox">
        <SearchInput></SearchInput>
        <div className="trendingBox">
          <h1 className="trending">Trending</h1>
        </div>
        <div className="movieWrap">
          {data.map((i) => {
            if (i.isTrending === true) {
              return <MovieCard i={i}></MovieCard>;
            }
          })}
        </div>

        <div className="recommenBox">
          <h1 className="recommend">Recommended for you</h1>
          {/* card  */}
        </div>
      </div>
    </div>
  );
}

export default App;

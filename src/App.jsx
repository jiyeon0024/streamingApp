import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import Sidebar from "../public/components/Sidebar";
import SearchInput from "../public/components/SearchInput";
import MovieCard from "../public/components/MovieCard";
import { MoviesContext } from "./context/MoviesContext";

function App() {
  const { logout, user, loggedIn } = useContext(UserContext);
  const { data, setFiltered, filtered } = useContext(MoviesContext);
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState([]);

  let newInputData = [];
  // console.log(data);
  console.log(user);
  console.log(loggedIn);

  return (
    <div className="wrap">
      <Sidebar></Sidebar>

      <div className="mainContentBox">
        <SearchInput
          value={inputData}
          placeholder="Search for movies or TV series"
          onChange={(e) => {
            // console.log(inputData);
            setInputData(e.target.value);

            if (e.target.value === "") {
              setFiltered(data);
              setResult([]);
              return;
            }
            console.log(inputData);
            console.log(result);

            let movies = data.map((i) => {
              if (i.title.toLowerCase().includes(inputData.toLowerCase())) {
                return i.title;
              }
            });
            setResult(movies);
          }}
          onClick={(e) => {
            e.preventDefault();
            let _inputData = inputData.toLowerCase().trim();

            newInputData = data.filter((i) =>
              i.title.toLowerCase().includes(_inputData)
            );
            // console.log(newInputData[0].title);

            setFiltered(newInputData);
            setResult([]);
          }}
        ></SearchInput>
        <div className="inputList">
          {result.map((i) => {
            return (
              <p
                className="list"
                onClick={() => {
                  setInputData(i);
                  setResult([]);
                }}
              >
                {i}
              </p>
            );
          })}
        </div>

        {filtered && filtered.length !== 29 ? (
          <div className="result">
            <span className="margin">Found </span>
            <span className="margin">{filtered.length} </span>
            <span className="margin">
              {filtered.length == 1 ? "result" : "results"}
            </span>
            <span className="margin"> for '{inputData}'</span>
          </div>
        ) : null}

        {filtered && filtered.length != 29 ? (
          <h1 className="trending"></h1>
        ) : (
          <h1 className="trending">Trending</h1>
        )}

        <div className="movieWrap">
          {filtered.map((i) => {
            if (i.isTrending === true) {
              return <MovieCard i={i}></MovieCard>;
            }
          })}
        </div>
        {filtered && filtered.length != 29 ? (
          <h1 className="trending"></h1>
        ) : (
          <h1 className="recommend">Recommended for you</h1>
        )}
        <div className="movieWrap flexWrap">
          {filtered.map((i) => {
            if (i.isTrending === false) {
              return <MovieCard i={i} className={`recommend`}></MovieCard>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

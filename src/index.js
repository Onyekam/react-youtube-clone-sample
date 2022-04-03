import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD_y44r9QBm6quV0xW-E0UmTEjul2fxt34";
YTSearch({ key: API_KEY, term: "surfboards" }, function (data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
// Take this component's html and put iot on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));

import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyD_y44r9QBm6quV0xW-E0UmTEjul2fxt34";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("surfboards");
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
// Take this component's html and put iot on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));

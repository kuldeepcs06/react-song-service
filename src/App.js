import React from "react";
import "./styles.css";

class Search extends React.Component {
  state = {
    searchValue: "",
    songs: []
  };

  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = async (searchInput) => {
    const response = await fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${searchInput}`);
    const songs = await response.json();
    console.log(songs);
    this.setState({ songs });
  };

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <input
          name="text"
          type="search"
          placeholder="Search"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.SearchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
        {this.state.songs ? (
          <div>
            {this.state.songs.map((song, index) => (
              <div key={index}>
                <h3>{song.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>Something</p>
        )}
      </div>
    );
  }
}

export default Search;

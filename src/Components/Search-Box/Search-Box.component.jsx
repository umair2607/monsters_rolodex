import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      // Search Component
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
        type="search"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;

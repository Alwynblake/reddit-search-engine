import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
        <form>
          <input name = "textInput" type="text"/>
          <button type="submit"> Update List</button>button>
        </form>
    );
  }
}
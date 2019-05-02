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
          <input name = "numberInput" type ="number"/>
          <button type="submit"> Update List (searchForm.js)</button>
        </form>
    );
}
}


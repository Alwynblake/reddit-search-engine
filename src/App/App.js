import React from 'react';
import '../App.css';
import superagent from 'superagent';
import SearchForm from '../App/components/SearchForm';
import SearchResultList from '../App/components/SearchResultList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      topic: '',
      limit: '',
      errorExists: false,
    };
  }

  handleSubmit = async (event) => {
    const { topic, limit } = this.state;
    event.preventDefault();
    const REDDIT_API = `https://www.reddit.com/r/${topic}.json?limit=${limit}`;

    return superagent.get(REDDIT_API)
        .then(response => {
          this.setState({ topics: response.body.data.children, errorExists: false });
        })
          .catch(error => {
            this.setState({ topics: [], errorExists: true });
          });
  };

  handleTopic = (event) => this.setState({ topic: event.target.value });

  handleLimit = (event) => this.setState({ limit: event.target.value });

  render() {

    return(
        <main>
            <SearchForm
                handleTopic={this.handleTopic} // passing props to the SearchForm Component
                handleLimit={this.handleLimit}
                handleSubmit={this.handleSubmit}
                errorExists={this.state.errorExists}
            />

            <SearchResultList
                topics={this.state.topics} // passing props to the SearchResultList Component
            />
        </main>
    );
  }
}


import React from 'react';
import superagent from 'superagent';
import SearchForm from '../App/components/SearchForm';
// import SearchResultList from '../App/components/SearchResultList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.topics = [];
    this.state.topics.children = [];
  }

  async componentDidMount() {
    await this.LoadRedditList();
  }

  LoadRedditList = async () => {
    const REDDIT_API = 'https://www.reddit.com/r/cats.json?limit=22';

    return superagent.get(REDDIT_API)
        .then(response => {
          this.setState({
            topics: response.body.data
          });
          console.log(response);

        })
          .catch(console.error);
  };

  render() {

    return(
        <main>

          {
            this.state.topics.children.map((currentTopics, index) =>
            <div>
                <p> {currentTopics.data.title} </p>
                <p> {currentTopics.data.url} </p>
            </div>
            )
          }
            <SearchForm/>
            {/*<SearchResultList/>*/}
        </main>
    );
  }
}


import React from 'react';
import superagent from 'superagent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.topics = [];
  }

  async componentDidMount() {
    await this.LoadRedditList();
  }
  LoadRedditList = async () => {
    const REDDIT_API = 'https://www.reddit.com/r/dogs.json?limit=22';

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
          <ul>
          {
            this.state.topics.map((currentTopics, index) =>
                <li>{currentTopics.name}</li>
            )
          }
          </ul>
        </main>
    );
  }
}


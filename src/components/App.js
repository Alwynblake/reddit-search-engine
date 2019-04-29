import React from 'react';
import superagent from 'superagent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.reddit = [];
  }

  async componentDidMount() {
    await this.LoadRedditList();
  }
  LoadRedditList = async () => {
    const REDDIT_API = 'https://www.reddit.com/r/dogs.json?limit=20';

    return superagent.get(REDDIT_API)
        .then(response => {
          console.log(response);
        })
          .catch(console.error);
        };

  render() {
    return(
        <main>
          welcome :)
        </main>
    );
  }
}


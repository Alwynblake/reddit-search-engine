# reddit-search-engine

## Author: Alistair Blake
### Links and Resources
* [Repo] (https://github.com/Alwynblake/reddit-search-engine)

### Purpose
* contains all of the application state
* contains methods for modifying the application state
* the state has a topics array for holding the results of the search
* SearchForm Component:
1. contains a text input for the user to supply a reddit board to look up
2. contains a number input for the user to limit the number of results to return
3. the number must be more than 0 and less than 100
4. onSubmit the form should make a request to reddit
5. it should make a get request to https://www.reddit.com/r/${topic}.json?limit=${limit}
6. on success it should pass the results to the application state
7. on failure it should add a class to the form called error and turn the form's inputs borders red
* SearchResultList Component:
1. inherits all search results through props
2. This component does not need to have its own state
3. If there are topics in the application state it should display an unordered list
4. Each list item in the unordered list should contain the following
5. an anchor tag with a href to the topic.url
6. inside the anchor a heading tag with the topic.title
7. inside the anchor a p tag with the number of topic.ups

### Imported Values
*	React
*	Reddit

### Available Scripts
In order to view frontend_tooling within the browser,
in the terminal type: 
##### `npm install`
##### `npm start`

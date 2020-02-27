const axios = require("axios");

const urlBase = "https://hacker-news.firebaseio.com/v0";
const hn = path => `${urlBase}${path}`;

const jsonGet = async path => {
  let response = await axios.get(hn(path));
  return response.data;
};

class Story {
  constructor({ title, by, url, score }) {
    this.title = title;
    this.by = by;
    this.url = url;
    this.score = score;
  }
  toString() {
    return `${this.score}. ${this.title} (${this.url}) [${this.by}]`;
  }
}

const getStories = async num => {
  const ids = await jsonGet("/topstories.json");
  let stories = [];
  for (let id of ids.slice(0, num)) {
    const storyJson = await jsonGet(`/item/${id}.json`);
    stories.push(new Story(storyJson));
  }
  return stories;
};

getStories(3).then(stories => {
  console.log(stories);
});

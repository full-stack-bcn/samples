
const fs = require('fs')
const axios = require('axios')

const URL_BASE = 'https://hacker-news.firebaseio.com/v0'

const HN = (path) => `${URL_BASE}${path}`
const NUM_STORIES = 50

const fetchEachStory = async ({ data: itemIdArray }) => {
  let allItems = []
  for (let itemId of itemIdArray.slice(1, NUM_STORIES)) {
    try {
      let item = await axios.get(HN(`/item/${itemId}.json`))
      allItems.push(item.data)
    } catch (e) {
      console.error("ERROR: ", e)
    }
  }
  return allItems
}

const saveJSON = (data) => {
  fs.writeFileSync("hn.json", JSON.stringify(data))
}

axios.get(HN('/topstories.json'))
   .then(fetchEachStory)
   .then(saveJSON)

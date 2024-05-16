let previousSearchTxt = "";
let pageNum = 1;
let perPage = 6;

async function beginSearch(searchTxt) {

  // Reset how many images are displayed if the search text has changed
  if(previousSearchTxt !== searchTxt) {
    perPage = 6;
  }

  const url = `https://api.pexels.com/v1/search?query=${searchTxt}&page=${pageNum}&per_page=${perPage}`

  previousSearchTxt = searchTxt;

  // I can't seem to get .env to work, so I'm just going to hardcode the API key
  const response = await fetch(url, {
    headers: {
      Authorization: "fO5dcMGzL2H5cF1qGtKwGhrW9LEMzowY2Ng3pcGIHoonmttzmMZovzT7"
    }
  });
  const data = await response.json();

  return data.photos;
}

async function loadMore() {
  perPage += 6;

  const results = await beginSearch(previousSearchTxt);

  return results;
}

export { beginSearch, loadMore };


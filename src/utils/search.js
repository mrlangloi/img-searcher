let pageNum = 1;
let perPage = 6;

async function beginSearch(searchTxt) {
  console.log("Searching...");
  const url = `https://api.pexels.com/v1/search?query=${searchTxt}&page=${pageNum}&per_page=${perPage}`

  const response = await fetch(url, {
    headers: {
      Authorization: "fO5dcMGzL2H5cF1qGtKwGhrW9LEMzowY2Ng3pcGIHoonmttzmMZovzT7"
    }
  });
  const data = await response.json();

  console.log(data);
}

export { beginSearch };


let searchTxt = "";
let pageNum = 1;

function handleSearchSubmit(e) {
  e.preventDefault();
  console.log(`Searching for ${searchTxt}`);
}

function handleSearchTxtChange(e) {
  searchTxt = e.target.value;
  console.log(searchTxt);
}

async function beginSearch() {
  console.log("Searching...");
  const URL = `https://api.pexels.com/v1/search?query=${searchTxt}&per_page=${pageNum}`
}

export { beginSearch, handleSearchSubmit, handleSearchTxtChange };


import './App.css';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <h1>Image Search App</h1>

      <form action="">
        <input type="text" id="search-txt" placeholder="Search images..." />
        <button id="search-btn">Search</button>
      </form>

      <SearchResults />

    </div>
  );
}

export default App;

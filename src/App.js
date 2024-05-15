import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {

  const [photos, setPhotos] = useState([]);

  return (
    <div className="App">
      <h1>Image Search App</h1>

      <SearchForm setPhotos={setPhotos}/>

      <SearchResults photos={photos}/>

    </div>
  );
}

export default App;

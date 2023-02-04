import './App.css';
import Movie from './Components/Movie/Movie';
import SearchBar from './Components/SearchBar/Searchbar';
import { useSelector } from "react-redux";
import Navbar from './Components/Navbar/Navbar';
import {Route,Routes} from "react-router-dom" ;
import Favourite from './Components/Favourite/Favourite';
import View from './Components/View/View';

function App() {
  
  let storeData = useSelector((data) => {
    return data.searchedMovie;
  });
  // console.log(storeData) ;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchBar />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/view/:id' element={<View />} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;

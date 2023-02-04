import './App.css';
import Movie from './Components/Movie/Movie';
import Navbar from './Components/Nav/Nav';
import { useSelector } from "react-redux";

function App() {
  
  let storeData = useSelector((data) => {
    return data.searchedMovie;
  });
  // console.log(storeData) ;

  return (
    <div className="App">
      <Navbar />
      {
        storeData.length != 0 ? <Movie /> : null
      }
      
    </div>
  );
}

export default App;

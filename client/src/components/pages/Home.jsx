import SearchBar from '../SearchBar';
import VicTypes from '../VicTypes';
import Regions from '../Regions';
import '../pages/pages.css';


const Home = () => {
  return (
    <div className="container">
      <div id='searchBar'>
      <SearchBar />
      </div>
      <div id='vic-container'>
        <VicTypes />
      </div>
      <Regions />

    </div>
  );
};

export default Home;

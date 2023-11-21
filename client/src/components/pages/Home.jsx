import SearchBar from '../SearchBar';
import VicTypes from '../VicTypes';
import Regions from '../Regions';
import '../pages/pages.css';


const Home = () => {
  return (
    <div className="container">
      <SearchBar />
      <div className="vic-container">
        <VicTypes />
      </div>
      <Regions />

    </div>
  );
};

export default Home;

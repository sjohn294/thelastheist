import SearchBar from '../SearchBar';
 import VicTypes from '../VicTypes';
import Regions from '../Regions';


const Home = () => {
  return (
    <div className="container">
      <SearchBar />
       <VicTypes />
      <Regions />
    </div>
  );
};

export default Home;

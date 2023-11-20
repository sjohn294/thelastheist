import SearchBar from '../SearchBar';
import VicList from '../VicList';
import Regions from '../Regions'


const SearchResults = () => {
  return (
    <div className="container">
      <SearchBar />
      <VicList />
      <Regions />
    </div>
  );
};

export default SearchResults;
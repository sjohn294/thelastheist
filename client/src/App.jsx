import { Outlet } from 'react-router-dom';
import Nav from './NavTabs';
// import Main from './main';
import './style/app.css'
import NavTabs from './NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    NavTabs: {
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
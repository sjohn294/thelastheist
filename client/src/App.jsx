import { Outlet } from 'react-router-dom';
import Nav from './NavTabs';
import './style/app.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
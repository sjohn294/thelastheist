import { Outlet } from 'react-router-dom';
// import Main from './main';
import './style/app.css';
import NavTabs from './NavTabs';
import { setContext } from 'apollo-link-context';

function App() {
  const authLink = setContext((_, { token = req.body.token || req.query.token || req.headers.authorization
  }) => {
    const token = localStorage.getItem('id_token');
    return {
      NavTabs: {
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
}
 ///test
 
function App() {
return (
  <ApolloProvider client={client}>
    <div className="flex-column justify-flex-start min-100-vh">
      <NavTabs />
      <div className="container">
      </div>
    </div>
  </ApolloProvider>
);
}
  


export default App;
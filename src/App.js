import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './components/user';
import Header from './components/header';
import SearchUser from './components/search';
import ContextUser from './context/ContextUser';
import ContextRepo from './context/ContextRepo';

function App() {
  const [user, setUser] = useState([]);
  const [repo, setRepo] = useState([]);
  return (
    <ContextRepo.Provider value={[user, setUser]}>
      <ContextUser.Provider value={[repo, setRepo]}>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={SearchUser}></Route>
            <Route exact path='/page-result-github' component={User}></Route>
          </Switch>
        </main>
      </ContextUser.Provider>
    </ContextRepo.Provider>
  );
}

export default App;

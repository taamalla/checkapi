import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import UsersList from './components/UsersList'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const toggle=()=>{
    setIsLogin(!isLogin)
  }
      
  return (
    <Router>
    <div className="App">
      <NavBar isLogin={isLogin} toggle={toggle}/>
      <Switch>
     <Route  exact path="/" component={Home} />
     <Route path='/users' >
       <UsersList isLogin={isLogin}/>
       </Route>
     <Route path='/about' render={()=><h3>This is the About page</h3>} />
     <Route path='/profile/:userId' >
       <Profile  isLogin={isLogin}/>
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;

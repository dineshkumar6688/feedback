import React from 'react';
import Trash from './Views/trash'
import Feed from './Views/feed';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {useStore} from './Components/store'

function Home(props) {
  
    let info = useStore(state=> state.update);
    info(props.data);
    let ptrash = useStore(state=> state.updateposts);
    ptrash(props.ptrash);
    let ctrash = useStore(state=> state.updatecomments);
    ctrash(props.ctrash);
   
   
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Feed}/>
      <Route exact path="/trash" component={Trash}/>
      </Switch>
    </Router>
  );
}

export default Home;
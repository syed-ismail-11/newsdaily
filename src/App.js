import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App () {
  const pageSize = 14;

  const [progress, setProgress] = useState(0)

    return (
      <div>
      <Router>
        <NavBar/>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
      />
        <Switch>
        <Route exact path="/">
          <News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" category="General"/>
        </Route>
        <Route exact path="/business">
          <News setProgress={setProgress}   key="business" pageSize={pageSize} country="in" category="Business"/>
        </Route>
        <Route exact path="/entertainment">
          <News setProgress={setProgress}   key="entertainment" pageSize={pageSize} country="in" category="Entertainment"/>
        </Route>
        <Route exact path="/health">
          <News setProgress={setProgress}   key="health" pageSize={pageSize} country="in" category="Health"/>
        </Route>
        <Route exact path="/science">
          <News setProgress={setProgress}   key="science" pageSize={pageSize} country="in" category="Science"/>
        </Route>
        <Route exact path="/sports">
          <News setProgress={setProgress}   key="sports" pageSize={pageSize} country="in" category="Sports"/>
        </Route>
        <Route exact path="/technology">
          <News setProgress={setProgress}   key="technology" pageSize={pageSize} country="in" category="Technology"/>
        </Route>
         
        </Switch>
      </Router>
      </div>
    )
}

export default App
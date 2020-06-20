import React, { Suspense, Component } from 'react';
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage.js";

import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import LoadingBar from 'react-top-loading-bar';

class  App extends  Component {
  componentDidMount() {
    this.LoadingBar.complete();
    console.log(`state changed number`);
}
  render() {
  return (
    // <Suspense fallback={(<div>Loading...</div>)}>
    <div>
          <div>
    <LoadingBar
      height={2}
      color='#667db6'
      onRef={ref => (this.LoadingBar = ref)}
    />
  </div>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />

        </Switch>
      </div>
      <Footer />
 </div> 
 // </Suspense>
  )
}
}
export default App;

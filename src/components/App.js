import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import test from './test';
function App() {
  return (
    
    <React.Fragment>
      	<div id="wrapper">
          <test />
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;

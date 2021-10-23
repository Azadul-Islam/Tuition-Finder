import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Chittagong from "./components/Chittagong/Chittagong";
import Home from "./components/Home/Home";
import Join from "./components/Join/Join";
import Login from "./components/Login/Login";
import Need from "./components/Need/Need";
import NotFound from "./components/NotFound/NotFound";
import Online from "./components/Online/Online";
import Pricing from "./components/Pricing/Pricing";
import Sirajganj from "./components/Pricing/Sirajganj/Sirajganj";
import Rajshahi from "./components/Rajshahi/Rajshahi";
import Works from "./components/Works/Works";




function App() {
  return (
    <Router>           
      <Switch>
      
        <Route exact path="/">
          <Home></Home>
        </Route>   

        <Route path="/home">
          <Home />
        </Route>
        <Route path="/works">
          <Works></Works>
        </Route>
        <Route path="/Need">
          <Need></Need>
        </Route>
        <Route path="/join">
           <Join></Join>
        </Route>
        <Route path="/online">
          <Online></Online>
        </Route>
        <Route path="/pricing">
            <Pricing></Pricing>
        </Route>
        <Route path="/sirajganj">
          <Sirajganj></Sirajganj>
        </Route>
        <Route path="/Rajshahi">
          <Rajshahi></Rajshahi>
        </Route>
        <Route path="/Chittagong">
         <Chittagong></Chittagong>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>

        </Route>
      </Switch>
  </Router>
  );
}

export default App;










// import React from 'react';
// import Header from './components/Header/Header';
// import Login from './components/Login/Login';
// import Navbar from './components/Navbar/Navbar';
// import Home from "./components/Home/Home";

// import {
// import Online from './components/Online/Online';
//   /import Rajshahi from './components/Rajshahi/Rajshahi';
// / Bimport Chittagong from './components/Chittagong/Chittagong';
// rowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// const App = () => {
//   return (
   
    
//     <div>
//      <Navbar></Navbar>
//      <Header></Header> 
//       <Router>
//        <Switch>
//          <Route path="Home">
//          <Home></Home>
//          </Route> 

//          <Route path="/home">
//           <Home/>
//          </Route>

//          <Route path="/login">
//         <Login></Login>
//         </Route>

//         {/* <Route path="*">
//       <NoMatch></NoMatch>
//           </Route> */}
          
//        </Switch>

//       </Router>
  
//     </div>
//   );
// };

// export default App;
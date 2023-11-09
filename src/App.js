import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

const App = () => {
  return (
    <div>
      <YourInfo/>
      <BrowserRouter>
         <Routes>
            <Route path="/" exact component={<YourInfo/>}/>
            <Route path="/SelectPlan" exact component={<SelectPlan/>}/>
            <Route path="/AddOns" exact component={<AddOns/>}/>
            <Route path="/Summary" exact component={<Summary/>}/>

         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
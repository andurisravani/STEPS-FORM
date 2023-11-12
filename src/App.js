import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<YourInfo />} />
          <Route path="/SelectPlan" element={<SelectPlan />} />
          <Route path="/AddOns" element={<AddOns />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

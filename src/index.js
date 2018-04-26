import React from "react";
import { render } from "react-dom";
import Calender from "./Calender";

const calenderProps = {
  options: {
    google: true,
    apple: true,
    yahoo: true,
    outlook: true,
    iCal: true
  }
};

const App = () => (
  <Calender
    display={calenderProps.options}
    title="My First Event"
    start="20180510"
    end="20180511"
    duration="120"
    address="The internet"
    description="Some description"
    website="https://sciencenearme.com"
  />
);

render(<App />, document.getElementById("root"));

import React from "react";
import { useState } from "react";
import Feedback from "./Feedback.jsx";
import Statistics from "./Statistics.jsx";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Feedback rate="good" onClick={() => setGood(good + 1)} />
        <Feedback rate="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Feedback rate="bad" onClick={() => setBad(bad + 1)} />
      </div>
      <Statistics
        count={{
          good: good,
          neutral: neutral,
          bad: bad,
        }}
      />
    </div>
  );
};

export default App;

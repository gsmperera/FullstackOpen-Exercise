import React from "react";

const Statistics = ({ count }) => {
  const total = count.good + count.neutral + count.bad;
  const average = (count.good - count.bad) / total;
  const positive = (count.good / total) * 100;
  const averageIsNum = !Number.isNaN(average);
  const positiveIsNum = !Number.isNaN(positive);

  if (total > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>good {count.good}</p>
        <p>neutral {count.neutral}</p>
        <p>bad {count.bad}</p>
        <p>all {total}</p>
        <p>average {averageIsNum ? average : "-"}</p>
        <p>positive {positiveIsNum ? positive + "%" : "-"}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
};

export default Statistics;

import React from "react";
import StatisticLine from "./StatisticLine.jsx";

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
        <table>
          <tbody>
            <StatisticLine text="good" value={count.good} />
            <StatisticLine text="neutral" value={count.neutral} />
            <StatisticLine text="bad" value={count.bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine
              text="average"
              value={averageIsNum ? average : "-"}
            />
            <StatisticLine
              text="positive"
              value={positiveIsNum ? positive + "%" : "-"}
            />
          </tbody>
        </table>
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

const Total = ({ parts }) => {
  const total = parts.reduce((total, cur) => total + cur.exercises, 0);
  return <p>Total of {total} exercises</p>;
};

export default Total;

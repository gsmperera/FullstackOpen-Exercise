import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((cur) => {
        return <Part key={cur.id} part={cur} />;
      })}
      <Total parts={parts} />
    </>
  );
};

export default Content;

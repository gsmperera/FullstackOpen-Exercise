const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => {
  return (
    <div>
      <Part pName={props.part1} exCount={props.exercises1} />
      <Part pName={props.part2} exCount={props.exercises2} />
      <Part pName={props.part3} exCount={props.exercises3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.pName} {props.exCount}
    </p>
  );
};

const Total = (props) => (
  <p>
    Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
  </p>
);

const App = () => {
  // These properties could be passed as an object array, but I'm keeping it this way as per the exercise instructions.
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const props = {
    part1: part1,
    part2: part2,
    part3: part3,
    exercises1: exercises1,
    exercises2: exercises2,
    exercises3: exercises3,
  };

  return (
    <div>
      <Header course={course} />
      <Content {...props} />
      <Total {...props} />
    </div>
  );
};

export default App;

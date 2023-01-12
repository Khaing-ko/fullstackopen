const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Content = ({parts}) => {
  return (
    <>
      { parts.map( (part) => part = <Part key={part.id} name={part.name}  exercises={part.exercises} />)}
    </>
  );
};

const Part = ({name,exercises}) => {
  return (
    <>
      <p>{name} - {exercises}</p>
    </>
  )
}

const Total = ({num_of_exercise}) => {
  return (
    <p>Number of exercises - {num_of_exercise} </p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { id: 1, name: 'Fundamentals of React', exercises: 10 },
    { id: 2, name: 'Using props to pass data', exercises: 7 },
    { id: 3, name: 'State of a component', exercises: 14 },
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total num_of_exercise = { parts.map( (part)  => (part.exercises) ).reduce(  (pre_exe,next_exe) => (pre_exe+next_exe) )}  />
    </>
  )
}

export default App;
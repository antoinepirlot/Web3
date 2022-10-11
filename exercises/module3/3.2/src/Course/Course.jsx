import Header from "../Header/Header";

const Course = ({course}) => {
  console.log("Course")
  if (!course) {
    return;
  }

  return (
      <div>
        <Header course={course}/>
      </div>
  )
}

export default Course
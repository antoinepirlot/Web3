import Content from "../Content/Content";

const Header = ({course}) => {
  console.log("Header")
  return (
      <div>
        <h1>{course.name}</h1>
        <Content parts={course.parts}/>
      </div>
  );
}

export default Header;
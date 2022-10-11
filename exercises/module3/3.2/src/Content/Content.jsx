import Part from "Part/Part";

const Content = ({parts}) => {
  console.log("Content")
  return (
      <ul>
        {parts.map((part) =>
            <Part key={part.id} part={part}/>
        )}
      </ul>
  );
}

export default Content;
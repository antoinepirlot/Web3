const Part = ({part}) => {
  console.log("Part")
  return (
      <li>
        <p> {part.name} {part.exercises}</p>
      </li>
  );
}

export default Part;